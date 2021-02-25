import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Typography from '../../components/Typography';
import IntroImage from '../../components/IntroImage';
import * as Styled from './TextScreen.style';

const TextScreen = ({ info, onNext, onPrev, onReset }) => {
  const {
    fields: {
      text: { content },
      buttonText,
      image
    },
  } = info;
  const imageUrl = image ? image.fields.file.url : null;
  return (
    <Styled.TextScreenWrapper>
      <Styled.ContentWrapper>
        <Header onBack={onPrev} onReset={onReset} />
        {
          imageUrl && <IntroImage source={{ uri: `https:${imageUrl}` }} />
        }
        {content?.map((item, index) => {
          const { nodeType, content: textContent } = item;
          return textContent[0].value ? (
            <Typography
              key={`${index}-${textContent[0].value}`}
              color="violet"
              nodeType={nodeType}
              numberOfLines={nodeType === 'heading-1' ? 3 : 100}>
              {textContent[0].value}
            </Typography>
          ) : null;
        })}
      </Styled.ContentWrapper>
      <Button onPress={onNext} buttonText={buttonText} />
    </Styled.TextScreenWrapper>
  );
};

export default TextScreen;
