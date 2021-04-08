import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View , Text,Button,Image} from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


const { width } = Dimensions.get('screen');


import { Header,Icon,Badge } from 'react-native-elements';
export default class HomeScreen extends React.Component {
  render() {
    return (


      <View style={{flex:1,backgroundColor:"#382685"}}>
    <Header
         
          centerComponent={{ text: "Activity Bureau", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => {this.props.navigation.navigate('NotificationScreen')}}/>}
      
          backgroundColor = "pink"
        />


   
     <Card style={{padding: 10,marginTop:15,backgroundColor:"#162b96",color:"#82152b"}}
     isDark>
          <CardImage style={{fontSize:20,color:"red",marginTop:1,marginLeft:50,width:200,height:150}}
           
           title ={"Dancing"}
            source={require('../assets/dancing.jpg')}
      
          


          />
            <CardButton 
            onPress={()=> {this.props.navigation.navigate('DanceScreen')}}
            



            
            title="click here"
            color="#FEB557"
          />                                                                                     
                                                      
   </Card>
   
   <Card style={{padding: 10,marginTop:30,backgroundColor:"pink",color:"#82152b"}}
     isDark>
          <CardImage style={{fontSize:20,color:"red",marginTop:10,width:150,height:150}}
           
           title ={"shadow"}
            source={require('../assets/shadow.jpg')}
      
          


          />
            <CardButton
             onPress={()=> {this.props.navigation.navigate('ShadowScreen')}}



            
            title="click here"
            color="#FEB557"
          />
 
   </Card>

   <Card style={{padding: 10,marginTop:30,backgroundColor:"pink",color:"#82152b"}}
     isDark>
          <CardImage style={{fontSize:20,color:"red",marginTop:10,width:150,height:150}}
           
           title ={"phonics"}
            source={require('../assets/phonics.jpg')}
      
          


          />
            <CardButton
             onPress={()=> {this.props.navigation.navigate('PhonicsScreen')}}



            
            title="click here"
            color="#FEB557"
          />
 
   </Card>

   <Card style={{padding: 10,marginTop:30,backgroundColor:"pink",color:"#82152b"}}
     isDark>
          <CardImage style={{fontSize:20,color:"red",marginTop:10,width:150,height:150}}
           
           title ={"pranayama"}
            source={require('../assets/pranayama.jpg')}
      
          


          />
            <CardButton
             onPress={()=> {this.props.navigation.navigate('PranayamaScreen')}}



            
            title="click here"
            color="#FEB557"
          />
 
   </Card>













</View>
     
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
   
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    
  },
  products: {
    width: width - 50 * 2,
    paddingVertical:50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles:
  {
width:200,
height:200
  },
  shadow: {
    shadowColor: "#415136",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});
