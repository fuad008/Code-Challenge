import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground, View, Text, Platform, Button, StatusBar} from 'react-native';


export default class PlaceScreen extends Component {
    render(){

        const {navigation} = this.props;
        const placeID = navigation.getParam('placeID');
        const rating = navigation.getParam('rating');
        const district = navigation.getParam('district');
        const address = navigation.getParam('address');

        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <Text>PlaceID: {JSON.stringify(placeID)} </Text>
                    <Text>Rating: {JSON.stringify(rating)} </Text>
                    <Text>District: {JSON.stringify(district)}</Text>
                    <Text>address: {JSON.stringify(address)}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

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