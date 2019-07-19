import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Platform, Button, StatusBar, TouchableOpacity} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import PlaceScreen from './PlaceScreen';
import {G_API} from 'react-native-dotenv';
import {NavigationEvents} from 'react-navigation';




class SearchScreen extends Component {

    
    constructor(props){
        super(props);
        this.openSearchModal = this.openSearchModal.bind(this);
    }

    static navigationOptions ={
        title: 'Search',
    }

    openSearchModal = () => {
        
        
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            let placeDetails = fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.placeID}&key=${G_API}`
            ).then(response => response.json())
             .then((data) => data.result.photos[0])
             .then((arr) => {
                let uri = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${arr.photo_reference}&key=${G_API}`;
                fetch(uri)
                    .then(result => {
                        this.props.navigation.navigate("Place",{
                            placeID: place.placeID,
                            placeName: place.name,
                            rating: Number(place.rating.toPrecision(2)),
                            address: place.address,
                            district: place.addressComponents[2].name,
                            placeUrl: result.url,
                            staticLoc:  {
                                latitude: place.location.latitude.toString(),
                                longitude: place.location.longitude.toString(),
                                zoom: 13,
                                format: 'jpg',
                                size: {
                                    width: 300,
                                    height: 150
                                },
                                apiKey: G_API
                            }
                        });
                    })
                    .catch(error => this.props.navigation.navigate("Home"));
             })
             .catch(error => this.props.navigation.navigate("Home"));
            
        })
        .catch(error => {
            console.log(error.message);
            this.props.navigation.navigate("Home");
        });
    }

    render(){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <NavigationEvents onDidFocus={() => this.openSearchModal() } />

        </View>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

export default SearchScreen;

