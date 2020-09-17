import Paragraph from "@editorjs/paragraph";
import { FootnoteMaker } from "./FootnoteMaker";
import { API, BlockToolData, EditorConfig } from "@editorjs/editorjs";
import "./style.css";

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
      const initialID = "fn-" + Date.now().toString(36);
      this._data.id = initialID;
    }

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
    let preview = this.wrapper.querySelector(".embed-preview");
    let embedCode = this.wrapper.querySelector(".embed-code").value;
    console.log("Rendering embed code", this.wrapper);

    if (!this.enableEmbedCode) {
      // remove preview
      if (preview) {
        preview.remove();
      }
    }

    if (!preview) {
      preview = document.createElement("div");
      preview.classList.add("embed-preview");
      this.wrapper.appendChild(preview);
    }

    console.log("renderEmbedCode", preview, this.data);

    preview.innerHTML = embedCode;
  }

  toggleEnableEmbedCode() {
    this.enableEmbedCode = !this.enableEmbedCode;
    console.log("toggling embed code: ", this.enableEmbedCode, this._data);

    console.log("this.wrapper", this.wrapper);
    let embedCode = this.wrapper.querySelector(".embed-code");

    if (this.enableEmbedCode) {
      if (embedCode) {
        return;
      }
      embedCode = document.createElement("textarea");
      embedCode.classList.add("embed-code");
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
    const content = blockContent.querySelector(".content-area");
    const text = content ? content.innerHTML : "";

    const id = blockContent.querySelector(".meta-bar").getAttribute("data-id");

    const embedCode = blockContent.querySelector(".embed-code")
      ? blockContent.querySelector(".embed-code").value
      : undefined;

    console.log("save.embedCode", embedCode);

    const ret = {
      id,
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
    wrapper.classList.add("footnote-block");

    const metaBar = document.createElement("div");
    metaBar.classList.add("meta-bar");
    metaBar.setAttribute("data-id", this.data.id);
    metaBar.innerHTML = "[ #" + this.data.id + " ] ";
    wrapper.appendChild(metaBar);

    const contentArea = document.createElement("div");
    contentArea.classList.add("content-area");
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
