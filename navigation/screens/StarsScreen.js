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

var starView = (
  <View>
    <Text>Select a planet to fill this!</Text>
  </View>
);

export default function StarsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState('');

  function sunView() {
    setModalVisible(true);
    starView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          Sun
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={ require('./stars/sun.gif') }
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

  function siriusView() {
    setModalVisible(true);
    starView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          Sirius B
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./stars/SiriusB.gif')}
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
      </ScrollView>
    );
  }

  function rossView() {
    setModalVisible(true);
    starView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          ROSS 128
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./stars/Ross128.gif')}
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

  function alphaView() {
    setModalVisible(true);
    starView = (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            marginVertical: 10,
          }}>
          Alpha Centauri AB
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
            source={require('./stars/AlphaCentauri.gif')}
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
          Select a nearby star.
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable onPress={() => sunView()}>
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
                Sun
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                }}
                source={require('./stars/sun.gif')}
              />
            </Card>
          </Pressable>
          <Pressable onPress={() => siriusView()}>
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
                SiriusB
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  marginTop: 3,
                }}
                source={require('./stars/SiriusB.gif')}
              />
            </Card>
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable onPress={() => rossView()}>
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
                ROSS 128
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  marginTop: 10,
                }}
                source={require('./stars/Ross128.gif')}
              />
            </Card>
          </Pressable>
          <Pressable onPress={() => alphaView()}>
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
                Alpha Centauri AB
              </Text>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  marginTop: 10,
                }}
                source={require('./stars/AlphaCentauri.gif')}
              />
            </Card>
          </Pressable>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {starView}
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
