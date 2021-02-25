import { View, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const JournalScreenWrapper = styled(View)`
  flex: 1;
  margin: 32px 16px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ResponseInput = styled(TextInput)`
  margin-top: 16px;
  padding: 8px;
  background-color: #fff;
  border-color: #eee;
  border-width: 1px;
  border-radius: 6px;
  height: 120px;
`;

export const ContentWrapper = styled(View)``;
