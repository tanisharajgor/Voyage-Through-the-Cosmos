import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { Card, Button, ListItem, Icon } from '@rneui/themed';
import { Video } from 'expo-av';

export default function VRScreen({ bodyName, navigation, route }) {
  bodyName = route.params?.bodyName;

  var VRView = (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: 'black',
        borderColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          marginVertical: 15,
        }}>
        Choose an option and grab a VR headset.
      </Text>
    </View>
  );

  if (bodyName == "GLIESE 667CC") {
    gliseView();
  }

  function gliseView() {
    VRView = (
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 20,
          backgroundColor: 'black',
          borderColor: 'white',
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          GLIESE 667CC
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./planets/GLIESE667CC.gif')}
          />
        </View>
        <Video
          style={styles.video}
          resizeMode="contain"
          source={require('./planets/GLIESE667CC.mp4')}
          useNativeControls={true}
          isLooping={true}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={{ uri: 'https://i.gifer.com/37Es.gif' }}
        resizeMode="cover"
        style={styles.image}>
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
            }}>
            Surface Views in VR 🔎
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            Select a cosmic body from one of the other two menus, and its
            respective view will display here!
          </Text>
        </View>
        <View>{VRView}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginVertical: 10,
  },
});
