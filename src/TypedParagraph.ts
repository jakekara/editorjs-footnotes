import Paragraph from '@editorjs/paragraph'
import { API, BlockToolData, EditorConfig } from '@editorjs/editorjs'
import styles from "./TypedParagraph.css"

type ParagraphType = "paragraph" | "blockquote"

export class TypedParagraph extends Paragraph {

    api: API;

    constructor(opts: { data: BlockToolData; config: EditorConfig; api: API }) {
        const { data, config, api } = opts
        super({ data, config, api });
        this.api = api;

        // if no paragraph type is set, set one
        if (!data.paragraphType) {
            this.data.paragraphType = "paragraph"
        }

        this.clear = this.clear.bind(this)
        this.onPaste = this.onPaste.bind(this)
        this.save = this.save.bind(this)
        this.render = this.render.bind(this)
        this.renderSettings = this.renderSettings.bind(this)
    }

    clear() {
        console.log("Clearing")
        super.clear()
    }

    // onPaste(event: Event) {
    // }

    save(blockContent: BlockToolData) {

        const innerBlock = blockContent.querySelector(".ce-paragraph")

        const paragraphType = blockContent
            .getAttribute("data-paragraph-type")
        const ret = super.save(innerBlock);

        return {
            paragraphType,
            ...ret
        };
    }

    render() {
        const ret = super.render()
        ret.addEventListener('paste', (event: ClipboardEvent) => {

            console.log(event.clipboardData.types)
            // console.log(event.clipboardData.getData("text/html"))

            let s = "";
            try {
                s = event.clipboardData.getData("text/html")
                // console.log("Loaded text/html")
            } catch {
                console.log("Falling back to plain text")
                s = event.clipboardData.getData("text/plain")
            }
            // s = s.replace(/<!--StartFragment-->([^<]*(?:<(?!!--(?:Start|End)Fragment-->)[^<]*)*)<!--EndFragment-->/g, '$1');
            // var arr = [s]
            if (s.indexOf("<!--StartFragment-->") < 0) {
                console.log("Not MS Word Content", s)
                return;
            }

            if (!window.confirm("Use MS Word super-pasting black magic?")) {
                return
            }
            console.log("MS Word Content")
            event.preventDefault()


            var rx = /<!--StartFragment-->([^<]*(?:<(?!!--(?:Start|End)Fragment-->)[^<]*)*)<!--EndFragment-->/g
            var arr = rx.exec(s);
            arr.forEach((item, index) => {
                console.log(`arr [${index + 1} / ${arr.length}]: ${item}`)
            })

            ret.innerHTML = ""
            const tmp = document.createElement("div")
            tmp.innerHTML = s
            const paragraphs = tmp.getElementsByTagName("p")
            for (let i = 0; i < paragraphs.length; i++) {
                const p = paragraphs.item(i);
                const isFootnote = p.classList.contains("MsoFootnoteText")
                const blockContent = this.api.sanitizer.clean(p.innerHTML, {
                    i: true,
                    a: { href: true },
                    b: true,
                })

                let blockData: { text: string, id?: string, label?: string } = {
                    text: blockContent
                }

                let blockType = "paragraph"

                if (isFootnote) {
                    const anchors = p.getElementsByTagName("a")
                    if (anchors.length < 1) {
                        console.log("ruh-roh no anchors found. can't get footnote id", p);
                        continue
                    }
                    const firstLink = anchors[0]

                    // remove the reundent first link
                    p.removeChild(firstLink)

                    blockData["text"] = this.api.sanitizer.clean(p.innerHTML, {
                        i: true,
                        a: { href: true },
                        b: true,
                    })

                    console.log("isFootnote", firstLink.getAttribute("href"), firstLink.getAttribute("name"))
                    const footnoteID = firstLink.getAttribute("name")
                    const footnoteLabel = firstLink.innerText.replace("[", "").replace("]", "").trim()
                    console.log("footnoteLabel Text", footnoteLabel)
                    blockType = "footnoteParagraph"
                    blockData["id"] = footnoteID
                    blockData["label"] = footnoteLabel

                }

                console.log("inserting parsed-paragraph", isFootnote, p)
                this.api.blocks.insert(
                    blockType,
                    blockData
                )
            }

            // if (s && s.length > 0) {
            // console.log('arr.length', arr.length, 'arr[1]', arr[1])
            // ret.innerHTML = arr[1]
            const cleaned = this.api.sanitizer.clean(s, {
                i: true,
                a: { href: true, name: true },
                b: true,
                p: {}
            })

            console.log("cleaned", cleaned)
            // ret.innerHTML = cleaned

        })


        // const currentParagraphType: ParagraphType = this._data.paragraphType === "paragraph" ? "paragraph" : "blockquote"
        console.log("currentParagraphType", this.data.paragraphType)
        const currentParagraphType = this.data.paragraphType || "paragraph"
        // const currentParagraphType = "paragraph"

        // console.log("154: currentParagraphType:", currentParagraphType)
        const wrapper = document.createElement("div")
        wrapper.setAttribute("data-paragraph-type", currentParagraphType)
        wrapper.classList.add(styles["typed-paragraph-wrapper"]);


        this.wrapper = wrapper;
        wrapper.appendChild(ret);
        return wrapper
    }

    renderSettings() {

        const getParagraphType = (): ParagraphType => {
            const paragraphTypeAttribute = this.wrapper.getAttribute("data-paragraph-type")
            console.log("paragraphTypeAttribute", paragraphTypeAttribute)
            return paragraphTypeAttribute === "paragraph" ? "paragraph" : "blockquote"
        }

        const reverseParagraphType = (p: ParagraphType): ParagraphType => {
            return p === "paragraph" ? "blockquote" : "paragraph";
        }

        const setParagraphType = (newParagraphType: ParagraphType) => {
            this.wrapper.setAttribute("data-paragraph-type", newParagraphType)
            // toggleTypeButton.innerHTML = newParagraphType === "paragraph" ? "P" : "B"
        }


        const settings = [
            {
                name: 'BlockQuote',
                icon: getParagraphType() === "paragraph" ? "B" : "P",
                onclick: () => {
                    setParagraphType(reverseParagraphType(getParagraphType()))
                    const settings = this.wrapper.querySelector(".ce-settings")
                }

            },
        ];
        const wrapper = document.createElement('div');

        settings.forEach(tune => {
            let button = document.createElement('div');

            button.classList.add('cdx-settings-button');
            button.innerHTML = tune.icon;
            wrapper.appendChild(button);
            button.onclick = tune.onclick;
        });

        return wrapper;
    }
}
