import {Text, View, BackHandler} from 'react-native';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-9621277816845441/4324215512';

const interstitial = InterstitialAd.createForAdRequest(adUnitId);

export default class CommonWebview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.route.params.url,
      loaded: false,
    };
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress() {
    // Implement custom handling of the back button press here
    // Return true to indicate that the event has been handled
    this.props.navigation.navigate('CommonTools');
    console.log('back pressed');
    return true;
  }

  render() {
    // No advert ready to show yet

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#444',
            paddingVertical: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '700', color: '#fff', fontSize: 18}}>
            {this.props.route.params.name}
          </Text>
        </View>
        <WebView
          source={{uri: this.state.url}}
          //   style={{ flex: 1 }}
          refreshControl={true}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              size='large'
              color='#FAA'
              style={{justifyContent: 'center', flex: 8}}
            />
          )}
        />
      </View>
    );
  }
}
