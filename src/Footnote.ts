import Paragraph from '@editorjs/paragraph'
import { FootnoteMaker } from './FootnoteMaker'
import { generateID } from './generateID'
import { API, BlockToolData, EditorConfig } from '@editorjs/editorjs'
import styles from './style.css'

export interface TuneSetting {
  name: string
  icon: string
  active: boolean
  handleClick: () => void
}

export class Footnote extends Paragraph {
  constructor(opts: { data: BlockToolData; config: EditorConfig; api: API }) {
    const { data, config, api } = opts
    super({ data, config, api })

    // if no ID is set, set one
    if (!data.id) {
      const initialID = generateID()
      this._data.id = initialID
    }

    // if not text is set, set it
    if (!data.text) {
      this._data.text = ''
    }

    this.save = this.save.bind(this)
    this.render = this.render.bind(this)
    this.renderEmbedCode = this.renderEmbedCode.bind(this)
  }

  renderEmbedCode(e?: any) {
    e?.preventDefault()
    let embedCodeLabel = this.wrapper.querySelector('.' + styles.embedCodeLabel)
    let embedCode = this.wrapper.querySelector('.' + styles.embedCode)
    let embedCodePreview = this.wrapper.querySelector('.' + styles.embedPreview)

    if (!embedCodeLabel) {
      embedCodeLabel = document.createElement('div')
      embedCodeLabel.classList.add(styles.embedCodeLabel)
      embedCodeLabel.classList.add(styles.barLabel)
      embedCodeLabel.innerHTML = 'Embed code'
      this.wrapper.appendChild(embedCodeLabel)
    }

    if (!embedCode) {
      embedCode = document.createElement('textarea')
      embedCode.value = this.data.embedCode || ''
      embedCode.classList.add(styles.embedCode)
      embedCode.addEventListener('change', this.renderEmbedCode)
      embedCode.addEventListener('keyup', this.renderEmbedCode)
      this.wrapper.appendChild(embedCode)
    }

    if (!embedCodePreview) {
      embedCodePreview = document.createElement('div')
      embedCodePreview.classList.add(styles.embedPreview)

      embedCodePreview.innerHTML = embedCode.value
      this.wrapper.appendChild(embedCodePreview)
    }

    embedCodePreview.innerHTML = embedCode.value
  }

  static get sanitize() {
    return {
      id: false,
      label: false, // TODO - Is this right?
      text: { i: true, a: true, b: true },
      embedCode: true,
    }
  }

  save(blockContent: BlockToolData) {
    const content = blockContent.querySelector('.' + styles.contentArea)
    const text = content ? content.innerHTML : ''

    const id = blockContent
      .querySelector('.' + styles.idField)
      .getAttribute('data-id')

    const label = blockContent.querySelector('.label-field').textContent

    const embedCode = blockContent.querySelector('.' + styles.embedCode).value

    const ret = {
      id,
      label,
      text,
      embedCode,
    }

    console.log('Saving', ret)

    return ret
  }

  render() {
    const wrapper = document.createElement('div')
    wrapper.classList.add(styles.footnoteBlock)

    const idBar = document.createElement('div')
    idBar.classList.add(styles.idField)
    idBar.classList.add(styles.barLabel)
    idBar.setAttribute('data-id', this.data.id)
    idBar.innerHTML = '[ #' + this.data.id + ' ]'
    wrapper.appendChild(idBar)

    // const labelBar = document.createElement('div')
    // labelBar.classList.add(styles.barLabel)
    const label = document.createElement('div')
    label.innerHTML = 'footnote label'
    label.classList.add(styles.barLabel)
    const labelInput = document.createElement('div')
    labelInput.setAttribute('contentEditable', 'true')
    labelInput.classList.add('label-field')
    // labelInput.classList.add(styles.flexFill);
    labelInput.classList.add(styles.textInput)
    labelInput.innerHTML = this.data.label || ''
    wrapper.appendChild(label)
    wrapper.appendChild(labelInput)
    // wrapper.appendChild(labelBar)

    const contentLabel = document.createElement('div')
    contentLabel.classList.add(styles.barLabel)
    contentLabel.innerHTML = 'footnote body'
    wrapper.appendChild(contentLabel)

    const contentArea = document.createElement('div')
    contentArea.classList.add(styles.contentArea)
    contentArea.classList.add(styles.textInput)

    contentArea.classList.add('ce-paragraph')
    contentArea.innerHTML = this.data.text
    contentArea.contentEditable = 'true'
    wrapper.appendChild(contentArea)

    contentArea.addEventListener('keyup', this.onKeyUp)

    this.wrapper = wrapper

    this.renderEmbedCode()

    return wrapper
  }

  /**
   * Icon and title for displaying at the Toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: 'F',
      title: 'Footnote',
    }
  }
}

console.log('Defined class', FootnoteMaker)
