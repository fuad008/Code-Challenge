import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground, View, Text, Platform, Button, StatusBar} from 'react-native';
import GoogleStaticMap from 'react-native-google-static-map';
import { withNavigation } from 'react-navigation';




class PlaceScreen extends Component {

    static navigationOptions ={
        title: 'Place',
    }
    

    render(){
        const {navigation} = this.props;
        const placeID = navigation.getParam('placeID');
        const placeName = navigation.getParam('placeName');
        const rating = navigation.getParam('rating');
        const district = navigation.getParam('district');
        const address = navigation.getParam('address');
        const url = navigation.getParam('placeUrl');
        const staticLoc = navigation.getParam('staticLoc');


        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={{height: '60%'}}>
                        <ImageBackground source={{uri: url}} style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)'}} >
                            <View style={{ flex: 1, justifyContent: 'flex-end',marginBottom: 20, padding: 15 }}>
                                <Text style={{color: 'white', alignSelf: 'flex-start', fontSize: 15, fontWeight: '600'}}> {placeName} </Text>
                                <Text style={{color: 'blue', alignSelf: 'flex-end', fontSize: 15, fontWeight: '600',backgroundColor: 'white',borderRadius: 5}}> <Image style={{height: 15, width: 15, padding: 5,}} source={require('../assets/smallHeartIcon.png')}></Image> {rating} </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: '100%', height: '100%' }}>
                        <View style={{flex: 1, alignItems: 'center', alignSelf: 'center', width: '100%', borderColor: 'red' }}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: 'white', alignSelf: 'center', fontWeight: '500'}}>Pin to Trip</Text>
                            </TouchableOpacity>
                            <View style={{marginTop: 10}}>
                                <Text style={{  fontSize: 10, fontWeight: 'bold'}}> <Image source={require("../assets/townPinIcon.png")}></Image>  {district}</Text>
                                <Text style={{ fontSize: 9, fontWeight: '400'}}>{address}</Text>
                            </View>
                            <GoogleStaticMap style={styles.map} {...staticLoc}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      //borderWidth: 1, borderColor: 'blue',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    map: {
        paddingTop: 35, 
        paddingRight: 35,
        marginTop: 5,
        borderRadius: 5,
    },
    info: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        width: '80%',
        marginTop: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },  
    
});

export default withNavigation(PlaceScreen);
