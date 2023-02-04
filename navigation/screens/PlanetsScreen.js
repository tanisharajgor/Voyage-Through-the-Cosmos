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
import { Card, Button, ListItem, Icon, Badge } from '@rneui/themed';

var planetView = (
  <View>
    <Text>Select a planet to fill this!</Text>
  </View>
);

var bodyName = '';

export default function PlanetsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState('');

  function earthView() {
    setModalVisible(true);
    planetView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          Earth
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./planets/Earth.GIF')}
          />
        </View>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Mass</ListItem.Title>
            <ListItem.Subtitle>1 Earths</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Radius</ListItem.Title>
            <ListItem.Subtitle>1 Earth Radii</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Distance from Earth</ListItem.Title>
            <ListItem.Subtitle>0 light-years</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Average Temperature</ListItem.Title>
            <ListItem.Subtitle>288 °K</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: 300 }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Orbital Period</ListItem.Title>
            <ListItem.Subtitle>365.249 earth days</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    );
  }

  function glieseView() {
    setModalVisible(true);
    bodyName = 'GLIESE 667CC';
    planetView = (
      <ScrollView>
        <Badge
              status="success"
              containerStyle={{ position: 'absolute', top: 0, left: 60, marginTop: 17 }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          GLIESE667CC
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
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Mass</ListItem.Title>
            <ListItem.Subtitle>3.7 Earths</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Radius</ListItem.Title>
            <ListItem.Subtitle>1.5 Earth Radii</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Distance from Earth</ListItem.Title>
            <ListItem.Subtitle>22.97 light-years</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Average Temperature</ListItem.Title>
            <ListItem.Subtitle>277.4 °K</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: 300 }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Orbital Period</ListItem.Title>
            <ListItem.Subtitle>28.155 earth days</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <View
          style={{
            marginTop: 10,
            marginRight: 30,
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate('VR', { bodyName })}>
            <Text style={styles.textStyle}>VR View</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }

  function keplerView() {
    setModalVisible(true);
    planetView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          KEPLER-442B
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./planets/Kepler-442B.gif')}
          />
        </View>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Mass</ListItem.Title>
            <ListItem.Subtitle>2.36 Earths</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Radius</ListItem.Title>
            <ListItem.Subtitle>1.34 Earth Radii</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Distance from Earth</ListItem.Title>
            <ListItem.Subtitle>1100 light-years</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Average Temperature</ListItem.Title>
            <ListItem.Subtitle>233 °K</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: 300 }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Orbital Period</ListItem.Title>
            <ListItem.Subtitle>112 earth days</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    );
  }

  function proximaView() {
    setModalVisible(true);
    planetView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          PROXIMA B
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./planets/ProximaB.gif')}
          />
        </View>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Mass</ListItem.Title>
            <ListItem.Subtitle>1.17 Earths</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Radius</ListItem.Title>
            <ListItem.Subtitle>1.06 Earth Radii</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Distance from Earth</ListItem.Title>
            <ListItem.Subtitle>4,24 light-years</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: '100%' }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Average Temperature</ListItem.Title>
            <ListItem.Subtitle>234 °K</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivder style={{ marginTop: 10, width: 300 }}>
          <Icon name="arrow-right" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Orbital Period</ListItem.Title>
            <ListItem.Subtitle>11.186 earth days</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={{ uri: 'https://i.gifer.com/37Es.gif' }}
        resizeMode="cover"
        style={styles.image}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          Explore 🔎
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
            marginVertical: 5,
          }}>
          Select an earth-like exoplanet.
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable onPress={() => earthView()}>
            <Card
              containerStyle={{
                width: 175,
                alignItems: 'center',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Earth
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                }}
                source={require('./planets/Earth.GIF')}
              />
            </Card>
          </Pressable>
          <Pressable onPress={() => glieseView()}>
            <Card
              containerStyle={{
                width: 175,
                alignItems: 'center',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                GLIESE 667CC
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  marginTop: 3,
                }}
                source={require('./planets/GLIESE667CC.gif')}
              />
            </Card>
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable onPress={() => keplerView()}>
            <Card
              containerStyle={{
                width: 175,
                alignItems: 'center',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                KEPLER-442B
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  marginTop: 10,
                }}
                source={require('./planets/Kepler-442B.gif')}
              />
            </Card>
          </Pressable>
          <Pressable onPress={() => proximaView()}>
            <Card
              containerStyle={{
                width: 175,
                alignItems: 'center',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                PROXIMA B
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  marginTop: 10,
                }}
                source={require('./planets/ProximaB.gif')}
              />
            </Card>
          </Pressable>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {planetView}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close Me</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
