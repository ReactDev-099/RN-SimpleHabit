import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Styled from './Header.style';

const Header = ({onBack, onReset}) => {
  return (
    <Styled.HeaderWrapper>
      <TouchableOpacity onPress={onBack}>
        <Icon name="arrow-back" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onReset}>
        <Icon name="close" size={24} />
      </TouchableOpacity>
    </Styled.HeaderWrapper>
  );
};

export default Header;
