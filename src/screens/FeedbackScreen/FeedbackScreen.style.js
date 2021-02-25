import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const FeedbackScreenWrapper = styled(View)`
  flex: 1;
  margin: 32px 16px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled(View)``;

export const FeedbackCompWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 8px 8px 24px;
  background-color: white;
  border-radius: 8px;
`;

export const ThumbWrapper = styled(View)`
  width: 100%;
  justify-content: space-around;
  margin: 24px 0px;
  flex-direction: row;
`;

export const RateButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #486279;
`;
