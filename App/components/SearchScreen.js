import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Platform, Button, StatusBar, TouchableOpacity} from 'react-native';

import RNGooglePlaces from 'react-native-google-places';
import PlaceScreen from './PlaceScreen';

export default class SearchScreen extends Component {

    openSearchModal() {
        
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            this.props.navigation.navigate("Place",{
                placeID: place.placeID,
                rating: place.rating,
                address: place.address,
                district: place.addressComponents[2].name
            });
        })
        .catch(error => {
            console.log(error.message);
            this.props.navigation.navigate("Home");
        });  // error is a Javascript Error object
    }

    render(){
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.container}>
            {this.openSearchModal()}
          </View>
        </SafeAreaView>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

