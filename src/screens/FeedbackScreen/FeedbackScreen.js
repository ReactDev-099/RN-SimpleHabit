import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Typography from '../../components/Typography';
import * as Styled from './FeedbackScreen.style';

const FeedbackScreen = ({info, onNext, onPrev, onReset}) => {
  const {
    fields: {
      title: {content},
      body: {content: bodyContent},
      feedbackTitle,
      feedbackComponent,
      buttonText,
    },
  } = info;
  return (
    <Styled.FeedbackScreenWrapper>
      <Styled.ContentWrapper>
        <Header onBack={onPrev} onReset={onReset} />
        {content?.map((item, index) => {
          const {nodeType, content: textContent} = item;
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
        {bodyContent?.map((item, index) => {
          const {nodeType, content: textContent} = item;
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
        {(feedbackTitle || feedbackComponent) && (
          <Styled.FeedbackCompWrapper>
            {feedbackTitle ? (
              <Typography nodeType="heading-3">{feedbackTitle}</Typography>
            ) : null}
            {feedbackComponent && (
              <Styled.ThumbWrapper>
                <Styled.RateButton>
                  <Icon name="thumbs-up" size={25} />
                </Styled.RateButton>
                <Styled.RateButton>
                  <Icon name="thumbs-down" size={25} />
                </Styled.RateButton>
              </Styled.ThumbWrapper>
            )}
            <Typography nodeType="heading-4" textAlign="center">
              Your feedback will help us{'\n'}personalize your Sleep Program.
            </Typography>
          </Styled.FeedbackCompWrapper>
        )}
      </Styled.ContentWrapper>
      <Button onPress={onNext} buttonText={buttonText} />
    </Styled.FeedbackScreenWrapper>
  );
};

export default FeedbackScreen;
