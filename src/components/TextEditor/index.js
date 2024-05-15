import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditorContainer,
  LeftSection,
  Heading,
  Image,
  RightSection,
  ButtonsListContainer,
  ButtonsListItem,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    const fontWeight = isBold === false ? 'normal' : 'bold'
    const fontStyle = isItalic === false ? 'normal' : 'italic'
    const textDecoration = isUnderline === false ? 'normal' : 'underline'
    const boldButtonColor = isBold === false ? '#f1f5f9' : '#faff00'
    const italicButtonColor = isItalic === false ? '#f1f5f9' : '#faff00'
    const underlineButtonColor = isUnderline === false ? '#f1f5f9' : '#faff00'

    return (
      <AppContainer>
        <TextEditorContainer>
          <LeftSection>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftSection>
          <RightSection>
            <ButtonsListContainer>
              <ButtonsListItem>
                <Button
                  data-testid="bold"
                  type="button"
                  onClick={this.onBold}
                  color={boldButtonColor}
                >
                  <VscBold size={30} />
                </Button>
              </ButtonsListItem>
              <ButtonsListItem>
                <Button
                  data-testid="italic"
                  type="button"
                  onClick={this.onItalic}
                  color={italicButtonColor}
                >
                  <GoItalic size={30} />
                </Button>
              </ButtonsListItem>
              <ButtonsListItem>
                <Button
                  data-testid="underline"
                  type="button"
                  onClick={this.onUnderline}
                  color={underlineButtonColor}
                >
                  <AiOutlineUnderline size={30} />
                </Button>
              </ButtonsListItem>
            </ButtonsListContainer>
            <TextArea
              rows={53}
              cols={70}
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </RightSection>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
