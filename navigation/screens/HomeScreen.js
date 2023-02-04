import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Button, Icon, Card } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list';
import { ThemedButton } from 'react-native-really-awesome-button';

import CreateButton from './components/CreateButton';

const photo = {
  uri: 'https://cdn.dribbble.com/users/4468602/screenshots/9264997/media/9cd4dc16086c8790889fd35103b7b836.gif',
};

const photo2 = {
  uri: 'https://i.gifer.com/37Es.gif',
};

var image = photo2;
var textView = (
  <View style={{ alignItems: 'center', marginTop: 100 }}>
    <Text style={{ fontWeight: 'bold', color: 'white' }}>
      Change Wallpaper!
    </Text>
  </View>
);

export default function HomeScreen({ navigation }) {
  var numOfBackgroundChanges = 0;

  function changeBackground() {
    if (image == photo) {
      image = photo2;
    } else if (image == photo2) {
      image = photo;
    }
    numOfBackgroundChanges = numOfBackgroundChanges + 1;
    textView = (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: 'white' }}>
          Number of Background Changes: {numOfBackgroundChanges}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ alignItems: 'center' }}>
          {textView}
          <View
            style={{
              marginHorizontal: 160,
              marginTop: 10,
              marginBottom: 50,
              flexDiection: 'row',
            }}>
            <Button
              radius={'sm'}
              type="solid"
              onPress={() => changeBackground()}>
              <Icon name="photo" color="white" />
            </Button>
          </View>
          <View style={{ marginHorizontal: 40 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 5,
                color: 'white',
                marginHorizontal: 5,
                // backgroundColor: "rgba(39,70,135,.5)"
              }}>
              Voyage Through the Cosmos ‍💫
            </Text>
            <Text
              style={{
                color: 'white',
                marginTop: 10,
                marginHorizontal: 20,
                textAlign: 'center',
              }}>
              Explore celestial statistics, interact and immerse beyond into new worlds.
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 10,
                marginHorizontal: 20,
                textAlign: 'center',
              }}>
              Choose an option to begin.
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <ThemedButton
          name="bruce"
          type="secondary"
          style={{ marginVertical: 10 }}
          onPress={() => navigation.navigate('Planets', {})}>
          Stars ☀️
        </ThemedButton>
        <ThemedButton
          name="bruce"
          type="secondary"
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Planets', {})}>
          Planets 🪐
        </ThemedButton>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
