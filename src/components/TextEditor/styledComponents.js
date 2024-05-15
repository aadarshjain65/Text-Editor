import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
  padding: 48px;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  width: 90%;
  padding: 20px;
  display: flex;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 750px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #f8fafc;
  font-weight: 500;
  margin-top: 20px;
`

export const Image = styled.img`
  width: 380px;
  margin-top: 96px;
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #334155;
  border-radius: 20px;
  width: 550px;
  height: 750px;
`

export const ButtonsListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #334155;
  width: 100%;
  background-color: #25262c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: 0;
  margin-bottom: 0;
`

export const ButtonsListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
  background: none;
  color: ${props => props.color};
`

export const TextArea = styled.textarea`
  font-family: 'Roboto';
  font-size: 14px;
  color: #f8fafc;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  padding: 20px;
  border: none;
  outline: none;
  background-color: #25262c;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
