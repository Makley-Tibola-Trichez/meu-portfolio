import { keyframes, styled } from '@stitches/react'
import colorPalette from '../../Theme/colorPalette.styles';

const Writing = keyframes({
  'from': { width: '0' },
  'to': { width: '100%' }
});

const BlinkCursor = keyframes({
  '0%':{ borderRightColor: 'transparent' },
  '70%': { borderRightColor: colorPalette.neutral.softBlack },
});

export const TextStyle = styled('span', {
  color: colorPalette.neutral.softBlack,
  overflow: 'hidden', 
  borderRight: '.15em solid',
  borderColor: colorPalette.neutral.softBlack,
  whiteSpace: 'nowrap',
  margin: '0 auto',
  letterSpacing: '.15em',
  animation: `${BlinkCursor} .5s steps(44) infinite normal`,
});

