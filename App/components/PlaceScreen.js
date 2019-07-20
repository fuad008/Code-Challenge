import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground, View, Text, Platform, Button, StatusBar, TouchableHighlight} from 'react-native';
import GoogleStaticMap from 'react-native-google-static-map';
import { withNavigation } from 'react-navigation';





class PlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            color: 'white',
            bgColor: 'blue',
            text: 'Pin to Trip'
        };
    }

    _changeStyle(){
        this.setState({
            pressed: true,
            color: this.state.color == 'white' ? 'black': 'white',
            bgColor: this.state.bgColor == 'blue' ?  '#05f915': 'blue',
            text: this.state.text == 'Pin to Trip' ? '✓ Pin to Trip': 'Pin to Trip'
        })
    }

    static navigationOptions ={
        title: 'Place',
    }
    

    render(){
        const {navigation} = this.props;
        const placeID = navigation.getParam('placeID');
        const placeName = navigation.getParam('placeName');
        const placeCity = navigation.getParam('placeCity');
        const rating = navigation.getParam('rating');
        const district = navigation.getParam('district');
        const address = navigation.getParam('address');
        const url = navigation.getParam('placeUrl');
        const staticLoc = navigation.getParam('staticLoc');

        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={{height: '60%'}}>
                        <ImageBackground source={{uri: url}} style={{width: '100%', height: '100%', flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.3)'}} >
                            <View style={{  padding: 10, flexDirection: 'row' }}>
                                <View style={{  padding: 15, width: '80%' }}>
                                    <Text style={{color: 'white', fontSize: 15, alignSelf: 'flex-start', fontWeight: '500', }}> {placeCity} </Text>
                                    <Text style={{color: 'white', fontSize: 20, alignSelf: 'flex-start', fontWeight: '500', }}> {placeName} </Text>
                                </View>
                                <View style={{  padding: 10, width: '20%', alignSelf: 'center',  }}>
                                    <Text style={{color: 'blue', fontSize: 15, fontWeight: '600', backgroundColor: 'white', borderRadius: 5,}}> <Image style={{height: 15, width: 15,  }} source={require('../assets/smallHeartIcon.png')}></Image> {rating} </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: '100%', height: '100%', }}>
                        <View style={{flex: 1, alignItems: 'center', alignSelf: 'center', width: '100%', }}>
                            <TouchableOpacity 
                                style={{backgroundColor: this.state.bgColor,
                                    padding: 10,
                                    width: '80%',
                                    marginTop: 10,
                                    borderTopLeftRadius: 50,
                                    borderTopRightRadius: 50,
                                    borderBottomRightRadius: 50,
                                    borderBottomLeftRadius: 50,}}
                                onPress={ ()=> this._changeStyle() }>
                                <View>
                                    <Text style={{color: this.state.color, alignSelf: 'center', fontSize: 15, fontWeight: '500'}}>{this.state.text}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{marginTop: 10}}>
                                <Text style={{   fontSize: 10, fontWeight: 'bold'}}> <Image source={require("../assets/townPinIcon.png")}></Image>  {district}</Text>
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
    pinPlace: {
        backgroundColor: '#05f909',
        padding: 10,
        width: '80%',
        marginTop: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    }  
    
});

export default withNavigation(PlaceScreen);
