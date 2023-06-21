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

import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-9621277816845441/4324215512';

const interstitial = InterstitialAd.createForAdRequest(adUnitId);

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default class ToolsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  navigateToWebview = (url, name) => {
    this.props.navigation.navigate('CommonWebview', {url: url, name: name});
  };

  componentDidMount() {
    const {loaded} = this.state;
    // if (loaded) {
    //   this.setState({loaded: false});
    //   interstitial.load();
    // }

    interstitial.load();
    console.log('mounted', loaded,interstitial.loaded);


    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      this.setState({ loaded: true });
      console.log('loaded-----');
    });

    if (!loaded) {
      return null;
    }
    return unsubscribe;
  }

  componentWillUnmount() {
    console.log('unmounting', this.state.loaded);
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          if(interstitial.loaded){
            interstitial.show();
            this.setState({loaded: false});
          }
          this.navigateToWebview(item.url, item.name);
        }}>
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
