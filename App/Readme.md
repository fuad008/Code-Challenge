# How to install and configure this react-native project

## First Step

- Don't download the files yet from this repo. 
- Install the latest version of react-native (0.60):
```
npm install -g react-native-cli
react-native init App
cd App
react-native run-ios
```
- Now install the react naviation 3.x
```
npm install react-navigation
npm install react-native-gesture-handler
```
- If you don't have Cocoapads installed, then run:
```
gem install cocoapods
```
- On iOS, to complete the linking, make sure you have Cocoapods installed. Then run:
```
cd ios
pod install
cd ..
```

- To install the Google Place Api. Run command:
```
npm i react-native-google-places --save
react-native link react-native-google-places
```
- The run these commands one more time:
```
cd ios
pod install
cd ..
```
- Configuration on iOS
In your 'AppDelegate.m' file in iOS fold, import the Google Places library by adding

    @import GooglePlaces; 
    @import GoogleMaps;
on top of the file.

Within the 'didFinishLaunchingWithOptions' method, instantiate the library as follows - read about a better way to secure this below:
```
[GMSPlacesClient provideAPIKey:@"Google_API_KEY_HERE"];
[GMSServices provideAPIKey:@"Google_API_KEY_HERE"];
```
Ensure you have the required location permissions for the application by declaring keys for NSLocationWhenInUseUsageDescription and NSLocationAlwaysAndWhenInUseUsageDescription in your info.plist file, either using Xcode or manually editing the file e.g.
```
<key>NSLocationWhenInUseUsageDescription</key>
<string>RNGPDemos needs your location to show you places</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>RNGPDemos needs your location to show you places</string>
 ```
- I used react-native-dotenv for environment variables. Here is the link to setup: https://www.npmjs.com/package/react-native-dotenv
- Copy the "assests" folder from this link into the project: https://github.com/TAPP-Travel/Code-Challenge/tree/master/design


## Second Step - Update Dependencies
 If you have followed the first steps above, then you might see a few deprecated warnings in the console about several packages, so let's update them using these commands.
- npm install --save core-js@^3
- npm install --save eslint@^5

## Third Step - Add Components
- Download and copy the 'components' folder into the main Project found on this link: https://github.com/fuad008/Code-Challenge under 'App' folder.
- Download and replace the 'App.js' file in your project.

## Note
- Since there is 100MB file size limit on GitHub, I only uploaded the necessary files such as 'components' folder and 'App.js' file. Rest of the files are same for everybody if you follow the above steps. 
