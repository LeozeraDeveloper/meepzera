import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
export const Container = styled.View`
  flex:1;
  background: #D93B48;
  padding-top:${getStatusBarHeight()}px;
  justify-content: space-around;
  align-items: center;
`;


export const CardContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: true,
})``;


export const Card = styled.View` 
  margin: 0 20px;
  width: 220px;
  height: 200px;
  background: #FFF;  
  margin-left: 10px;
  padding: 10px; 
  border-radius: 4px;
  top: 50px;  
  
 
`;

export const CardHeader = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding: 30px;
`;

export const CardContent = styled.View`
 flex: 1;
 padding: 0 30px;
 align-items: center;
`;

export const Title = styled.Text`
 font-size: 16px;
 color: #999;

`;

export const Description = styled.Text`
 font-size: 10px;
 margin-top: 3px;
 color: #333;

`;



