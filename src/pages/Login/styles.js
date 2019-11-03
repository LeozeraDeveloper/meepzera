import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
  flex:1;
  background: #FFF;
  padding-top:${getStatusBarHeight()}px;
`;

export const Logo = styled.Image`
width: 188px;
height: 51px;
top: 40px;
`;

export const ContentLogo = styled.View`
justify-content: flex-start;
align-items: center;
height:250;
`;

export const ContentInput = styled.View`
  height: 200;
  justify-Content: space-around;
  align-items: center;
  bottom: 50px;
`;

export const InputLogin = styled.TextInput`
width: 249px;
height: 45px;
background-color: #C4C4C4;
border-radius: 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-align: center;
`;


export const InputEnter = styled.TouchableOpacity`
  width: 108px;
  height: 35px;
  background: #D93B48;
  border-radius: 4px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 10px;
  border-color: #D93B48;
`;

export const TextEntrar = styled.Text`
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: #FFF;
  text-align: center;
  margin-top: 1px;
`;

export const TextForgot = styled.Text`
  font-size: 15px;
  line-height: 30px;
  color: #D93B48;
  text-align: center;
  margin-top: 1px;
  bottom: 13px;
`;






