/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/screens/Home';
import apiResponse from './flows/2_lesson_introduction_contentful.json';
import * as Styled from './App.style';

const App = () => {
  return (
    <Styled.MainWrapper>
      <Home response={apiResponse} />
    </Styled.MainWrapper>
  );
};

export default App;
