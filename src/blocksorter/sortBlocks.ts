import EditorJS from '@editorjs/editorjs'

async function getFootnoteBlockIndex(footnoteID: string, editor: EditorJS): Promise<number> {

    const blocks = await editor.save().then(d => d.blocks)
    console.log("getFootnoteBlockIndex", footnoteID)

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]
        // console.log("getFootnoteBlockIndex", footnoteID, "block", block)
        if (block["type"] !== "footnoteParagraph") { continue }
        console.log("getFootnoteBlockIndex", footnoteID, "id", block["data"]["id"], "block", block)
        if (block["data"]["id"] === footnoteID) {
            console.log("FOUND", block)
            return i
        }

    }

    throw ("No footnote found with id: " + footnoteID)

}

function getFootnotes(blockText: string): Array<string> {

    let ret: Array<string> = []
    const tmp = document.createElement("div")
    tmp.innerHTML = blockText
    const anchors = tmp.getElementsByTagName("a");
    const footnoteIDs = []
    console.log()
    for (var i = 0; i < anchors.length; i++) {
        const a = anchors[i]
        console.log("logging-a:", a)
        const href = a.getAttribute("href")
        if (!href) { continue }
        footnoteIDs.push(href)
    }
    tmp.remove()

    console.log("footnoteIDs", footnoteIDs)

    return footnoteIDs;
}

async function popFootnoteBlocks(editor: EditorJS): Promise<{ [id: string]: { data: any } }> {

    // remove all footnote blocks
    const footnotes: any = {}

    let i = 0;
    while (i < editor.blocks.getBlocksCount()) {
        const blockObject = await editor.blocks.getBlockByIndex(i).save();
        if (blockObject["data"] && blockObject["tool"] == "footnoteParagraph" && blockObject["data"]["text"]) {
            footnotes[blockObject["data"]["id"]] = blockObject;
            console.log("Deleting footnote", blockObject)
            editor.blocks.delete(i)
            i = 0
            continue
        }
        i++
    }

    return footnotes


}

async function addFoonotesBack(footnotes: { [id: string]: { data: any } }, editor: EditorJS) {

    console.log("Adding footnotes back", footnotes)
    let i = 0;
    while (i < editor.blocks.getBlocksCount()) {
        const block = editor.blocks.getBlockByIndex(i)
        const blockData = await block.save()
        if (blockData["tool"] !== "paragraph") {
            i++
            continue
        }

        const footnoteIDs = getFootnotes(blockData["data"]["text"])

        footnoteIDs.reverse().map((footnoteID: string) => {
            editor.caret.setToBlock(i)
            const footnoteData = footnotes[footnoteID.replace("#", "")]
            if (!footnoteData) { return }
            console.log("Inserting at index", i, footnoteID, footnoteData);// footnotes[footnoteID].data)
            editor.blocks.insert("footnoteParagraph", footnoteData["data"])

            // clear the footnote so it can't be inserted again
            // footnotes[footnoteID.replace("#", "")] = undefined

        })
        i++
    }

}

export default async function sortBlocks(editor: EditorJS) {


    const footnotes = await popFootnoteBlocks(editor);

    console.log("popped footnotes", footnotes)

    addFoonotesBack(footnotes, editor)

    // for (let i = 0; i < editor.blocks.getBlocksCount(); i++) {
    //     const block = editor.blocks.getBlockByIndex(i)
    //     const blockText = await block.save()

    //     if (blockText["data"] && blockText["tool"] == "paragraph" && blockText["data"]["text"]) {
    //         console.log("Looking in : ", blockText);
    //         const footnoteIDs = getFootnotes(blockText["data"]["text"])
    //         footnoteIDs.reverse().forEach(async footnoteID => {
    //             try {
    //                 // convert #_ftnref13 to _ftn13
    //                 // const footnoteIndex = await getFootnoteBlockIndex(footnoteID.replace("#", ""), footnoteEditor)
    //                 // editor.blocks.move(i + 1, footnoteIndex)
    //                 const footnoteContent = await footnotes[footnoteID.replace("#", "")].save()
    //                 console.log("footnoteContent", footnoteContent)
    //                 editor.blocks.insert("footnoteParagraph", footnoteContent["id"])
    //                 i++;
    //             } catch {

    //             }
    //         })



    //     }

    // }

}