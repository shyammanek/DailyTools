import {Text, View} from 'react-native';
import React, {Component} from 'react';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import ToolsCard from './ToolsCard';
import {ActivityIndicator} from 'react-native-paper';

// ca-app-pub-9621277816845441/4324215512 add id
export default class CommonTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchToolsData();
  }

  fetchToolsData = async () => {
    await firebase
      .database()
      .ref('Tools/')
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.setState({
            data: data,
          });
        } else {
          console.log('Data does not exist');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {data} = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#444',
        }}>
        {this.state.data.length === 0 ? (
          <ActivityIndicator size='large' color='#fff' style={{flex: 1}} />
        ) : (
          <ToolsCard data={data} navigation={this.props.navigation} />
        )}
      </View>
    );
  }
}
