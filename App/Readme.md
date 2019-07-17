# How to install and configure this react-native project

## First Step

- I am not using Expo Cli, So follow the "React Native CLI Quickstart" getting started guide for React Native (0.60) found at this link: https://facebook.github.io/react-native/docs/getting-started
- I am using React Navigation 3.x for navigation, so follow the getting started guide found at this website: https://reactnavigation.org/docs/en/getting-started.html
- For the Google Place Api, I am using the react-native-google-places. Note: this api requires an active billing account. For gettting started with this package follow this link: https://github.com/tolu360/react-native-google-places
- Copy the "assests" folder from this link into the project: https://github.com/TAPP-Travel/Code-Challenge/tree/master/design
- Run the following command to make sure everything works perfectly 
`react-native run-ios`
- Once you see Welcome screen, let's move on to the Second Step below.

## Second Step - Update Dependencies
 If you have followed the first steps above, then you might see a few deprecated warnings in the console about several packages, so let's update them using these commands.
- npm install --save core-js@^3
- npm install --save eslint@^5

## Third Step - Add Components
- Download and copy the 'components' folder into the main Project found on this link: https://github.com/fuad008/Code-Challenge under 'App' folder.
- Download and replace the 'App.js' file in your project.

## Note
- Since there is 100MB file size limit on GitHub, I only uploaded the necessary files such as 'components' folder and 'App.js' file. Rest of the files are same for everybody if you follow the above steps. 
