import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View , Text,Button,Image} from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import{ Header,Icon } from 'react-native-elements'

export default class PhonicsScreen extends React.Component{
render(){
 return(
    <Header
         
    centerComponent={{ text: "Activity 3", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
    rightComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => {this.props.navigation.navigate('NotificationScreen')}}/>}

    backgroundColor = "pink"
  />
 )


}
}