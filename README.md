# editorjs-footnotes

> footnotes for [editor.js](https://github.com/codex-team/editor.js)

## Overview

Adds a `Footnote` that implements `BlockTool` and FootnoteMaker that implements `InlineTool` that allows use to select a span of text and generate a new block. Automatically inserts an anchor link with a generated id.

## Usage example

```javascript
import EditorJS from "@editorjs/editorjs";
import { Footnote, FootnoteMaker } from "@jakekara/editorjs-footnotes";

const holderElement = document.createElement("div");
holderElement.setAttribute("id", "editor-js-holder");
document.body.appendChild(holderElement);

new EditorJS({
  holder: "editor-js-holder",
  autofocus: true,
  tools: {
    FootnoteMaker,
    footnoteParagraph: {
      class: Footnote,
      inlineToolbar: ["link", "bold", "italic"], // don't allow footnotes to add footnotes
    },
  },
});
```
