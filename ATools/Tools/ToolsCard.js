import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default class ToolsCard extends Component {
  navigateToWebview = (url, name) => {
    this.props.navigation.navigate('CommonWebview', {url: url, name: name});
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => this.navigateToWebview(item.url, item.name)}>
        <View style={styles.card}>
          {/* <Image source={item.image} style={styles.cardImage} /> */}
          <Text style={styles.cardText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          ListFooterComponent={() => <View style={{marginBottom: 40}} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#Faa',
    // padding: 10,
  },
  cardContainer: {
    // flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  card: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 10,
    width: DeviceWidth * 0.4,
    height: DeviceWidth * 0.4,
  },
  cardImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    color: '#fff',
  },
});
