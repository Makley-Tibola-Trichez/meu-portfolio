import * as React from 'react'
import { TextStyle } from './Typewriter.styles';
import useTypeWriter from './useTypeWriter'

const TypeWriter = ({ text }) => {
  const { currentText } = useTypeWriter(text);

  return (
    <TextStyle>{currentText}</TextStyle>
  )
}

export default TypeWriter