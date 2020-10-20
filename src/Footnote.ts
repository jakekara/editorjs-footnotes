import Paragraph from "@editorjs/paragraph";
import { FootnoteMaker } from "./FootnoteMaker";
import { generateID } from "./generateID";
import { API, BlockToolData, EditorConfig } from "@editorjs/editorjs";
import styles from "./style.css";

interface TuneSetting {
  name: string;
  icon: string;
  active: boolean;
  handleClick: () => void;
}

export class Footnote extends Paragraph {
  constructor(opts: { data: BlockToolData; config: EditorConfig; api: API }) {
    const { data, config, api } = opts;
    super({ data, config, api });

    // if no ID is set, set one
    if (!data.id) {
      const initialID = generateID();
      this._data.id = initialID;
    }

    // if not text is set, set it
    if (!data.text) {
      this._data.text = "";
    }

    this.enableEmbedCode = false;

    this.toggleEmbedCode = this.toggleEnableEmbedCode.bind(this);
    this.renderEmbedCode = this.renderEmbedCode.bind(this);
    this.save = this.save.bind(this);
    this.render = this.render.bind(this);
    this.renderSettings = this.renderSettings.bind(this);

    this.settings = [
      {
        name: "addEmbedCode",
        icon: `<>`,
        active: false,
        handleClick: this.toggleEmbedCode.bind(this),
      },
    ];
  }

  renderEmbedCode() {
    let preview = this.wrapper.querySelector("." + styles.embedPreview);
    let embedCode = this.wrapper.querySelector("." + styles.embedCode).value;
    console.log("Rendering embed code", this.wrapper);

    if (!this.enableEmbedCode) {
      // remove preview
      if (preview) {
        preview.remove();
      }
    }

    if (!preview) {
      preview = document.createElement("div");
      preview.classList.add(styles.embedPreview);
      this.wrapper.appendChild(preview);
    }

    console.log("renderEmbedCode", preview, this.data);

    preview.innerHTML = embedCode;
  }

  toggleEnableEmbedCode() {
    this.enableEmbedCode = !this.enableEmbedCode;
    console.log("toggling embed code: ", this.enableEmbedCode, this._data);

    console.log("this.wrapper", this.wrapper);
    let embedCode = this.wrapper.querySelector("." + styles.embedCode);

    if (this.enableEmbedCode) {
      if (embedCode) {
        return;
      }
      embedCode = document.createElement("textarea");
      embedCode.classList.add(styles.embedCode);
      this.wrapper.appendChild(embedCode);
      embedCode.addEventListener("change", this.renderEmbedCode);
      embedCode.addEventListener("keyup", this.renderEmbedCode);
    } else {
      embedCode.remove();
    }
  }

  static get sanitize() {
    return {
      id: false,
      text: { i: true, a: true, b: true },
      embedCode: true,
    };
  }

  save(blockContent: BlockToolData) {
    const content = blockContent.querySelector("." + styles.contentArea);
    const text = content ? content.innerHTML : "";

    const id = blockContent
      // .querySelector("." + styles.metaBar)
      .querySelector(".id-field")
      .getAttribute("data-id");

    const label = blockContent
      .querySelector(".label-field")
      .textContent

    const embedCode = blockContent.querySelector("." + styles.embedCode)
      ? blockContent.querySelector("." + styles.embedCode).value
      : undefined;

    const ret = {
      id,
      label,
      text,
      embedCode,
    };

    return ret;
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    this.settings.forEach((tune: TuneSetting) => {
      let button = document.createElement("div");

      button.classList.add("cdx-settings-button");
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      if (tune.active) {
        button.classList.add("cdx-settings-button--active");
      }

      button.addEventListener("click", tune.handleClick);
    });

    return wrapper;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add(styles.footnoteBlock);

    const metaBar = document.createElement("div");
    metaBar.classList.add(styles.metaBar);
    metaBar.classList.add("id-field")
    metaBar.setAttribute("data-id", this.data.id);
    metaBar.innerHTML = "[ #" + this.data.id + " ]";
    wrapper.appendChild(metaBar);

    const labelBar = document.createElement("div");
    labelBar.classList.add(styles.metaBar);
    const label = document.createElement("div");

    label.innerHTML = "<b>footnote label:</b> "
    const labelInput = document.createElement("div");
    labelInput.setAttribute("contentEditable", "true");
    labelInput.classList.add("label-field");
    labelInput.classList.add(styles.textInput);
    labelInput.setAttribute("type", "text");
    labelBar.appendChild(label)
    labelBar.appendChild(labelInput)
    wrapper.appendChild(labelBar);

    const contentArea = document.createElement("div");
    contentArea.classList.add(styles.contentArea);
    contentArea.classList.add("ce-paragraph");
    contentArea.innerHTML = this.data.text;
    contentArea.contentEditable = "true";
    wrapper.appendChild(contentArea);

    contentArea.addEventListener("keyup", this.onKeyUp);

    this.wrapper = wrapper;

    return wrapper;
  }

  /**
   * Icon and title for displaying at the Toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: "F",
      title: "Footnote",
    };
  }
}

console.log("Defined class", FootnoteMaker);
