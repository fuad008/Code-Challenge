import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground, View, Text, Platform, Button, StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    
    render(){
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.container}>
              <View style={{height: '20%'}}>
                <ImageBackground source={require("../assets/weatherHeader.png")} style={{ width: '100%', height: '100%' }}>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 30, padding: 15}}>
                    <View style={{ width: '70%'}}>
                      <Text style={{color: 'black', fontSize: 30}}>Good Morning!</Text>
                      <Text style={{color: 'black', fontSize: 13}}>Today is 75° and Sunny</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <TouchableOpacity onPress={()=> { const {navigate} = this.props.navigation; return navigate("Search")}}>
                        <Image source={require("../assets/addBookmarkButton.png")}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={{height: '30%', marginTop: 20, alignContent:'center', alignItems: 'center', }}>
                <Text style={{color: 'grey', fontSize: 20, marginTop: 30}}>This trip is empty</Text>
                <Text style={{color: 'grey', fontSize: 15, marginTop: 5}}>Click the blue button</Text>
              </View>
              <View style={{flex:1}}>
                <ImageBackground source={require("../assets/tripBackground.png")} style={{ width: '100%', height: '100%', opacity: 0.8, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40, padding: 15 }}>
                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', }}>Exploring Louisville BBQ</Text>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Louisville, Kentucky</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
        </SafeAreaView>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    white: {
        color: 'white'
    },
    black: {
        color: 'black',
    }
});

