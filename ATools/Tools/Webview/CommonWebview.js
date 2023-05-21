import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native-paper';

import {WebView} from 'react-native-webview';

export default class CommonWebview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.route.params.url,
    };
  }

  componentDidMount() {
    console.log(this.state.url);
  }

  render() {
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
