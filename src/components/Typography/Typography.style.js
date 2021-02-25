import styled from 'styled-components/native';

const fontInfo = {
  'heading-1': {
    fontSize: 24,
    fontWeight: 600,
  },
  'heading-2': {
    fontSize: 20,
    fontWeight: 300,
  },
  'heading-3': {
    fontSize: 16,
    fontWeight: 300,
  },
  'heading-4': {
    fontSize: 14,
    lineHeight: '24px',
    fontWeight: 300,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 300,
  },
};

const colorInfo = {
  violet: '#486279',
  white: '#fff',
  black: '#000',
};

export const StyledTypography = styled.Text((props) => ({
  ...fontInfo[props.nodeType || 'paragraph'],
  color: colorInfo[props.color || 'violet'],
  textAlign: props.textAlign || 'left',
  marginVertical: 10,
}));
