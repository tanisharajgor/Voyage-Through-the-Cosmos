import * as React from 'react';
import MainContainer from './navigation/MainContainer';

import { View, ImageBackground, StyleSheet } from 'react-native';


//---------------------------------------------NOTE!-------------------------------------------------
// The view on the Web Preview on the app is slightly distorted, as its aspect ratio is different than 
// a normal 19:6 for phones. It is normal when viewing on a phone or through one of the phone emulators provided.
export default function App() {
  return (
      <MainContainer/>
  );
}
