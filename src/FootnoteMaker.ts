import { API, InlineTool } from '@editorjs/editorjs'
import { generateID } from './generateID'

export class FootnoteMaker implements InlineTool {
  api: API
  button?: HTMLButtonElement
  state: boolean

  static get isInline() {
    return true
  }

  constructor(args: { api: API }) {
    const { api } = args

    this.api = api
    // this.button = null;
    this.state = false

    this.render = this.render.bind(this)
    this.surround = this.surround.bind(this)
  }

  render() {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.textContent = 'M'
    this.button.classList.add(this.api.styles.inlineToolButton)

    return this.button
  }

  surround(range: Range) {
    // TODO - Check to see if there are any <mark> elements inside
    // the selectedText. If so, don't allow a footnote to be created.
    // however, this will require us to create a "delete" footnote
    // button. Or we could automatically broaden a footnote when
    // the user selects beyond either end of a mark, or srhink the
    // footnote when the user selects within it.
    // The way link handles it is if any part of an existing link is
    // selected, the icon changes to a delete link icon. this is
    // probably a good solution.
    // https://github.com/codex-team/editor.js/blob/next/src/components/inline-tools/inline-tool-link.ts

    if (this.state) {
      // If highlights is already applied, do nothing for now
      return
    }

    const selectedText = range.extractContents()

    // Create MARK element
    const id = generateID()

    const mark = document.createElement('a')
    mark.href = '#' + id

    const footnoteNumber = document.createElement('small')
    footnoteNumber.innerHTML = ' [ #' + id + ' ]'

    // Append to the MARK element selected TextNode
    mark.appendChild(selectedText)
    mark.appendChild(footnoteNumber)

    // Insert new element
    range.insertNode(mark)

    // add a footnote block now
    const newBlock = this.api.blocks.insert(
      'footnoteParagraph',
      { id },
      undefined,
      undefined,
      true
    )

    // console.log(
    //   this.api.blocks
    //     .getBlockByIndex(this.api.blocks.getCurrentBlockIndex())
    //     .save()
    //     .then((d) => console.log(d))
    // );

    this.api.inlineToolbar.close()

    // this.api.focus(this.api.blocks.getCurrentBlockIndex() + 1)
  }

  clear() {
    console.log('Clear called')
  }

  checkState(selection: Selection): boolean {
    const text = selection.anchorNode

    if (!text) {
      return
    }

    const anchorElement = text instanceof Element ? text : text.parentElement

    this.state = !!anchorElement.closest('MARK')

    return this.state
  }
}

console.log('Defined class', FootnoteMaker)
