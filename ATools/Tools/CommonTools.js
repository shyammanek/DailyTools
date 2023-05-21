import {Text, View} from 'react-native';
import React, {Component} from 'react';

import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';

import ToolsCard from './ToolsCard';
import {ActivityIndicator} from 'react-native-paper';

var data = [
  {
    id: 1,
    name: 'Vahan Info',
    url: 'https://vahan.nic.in/nrservices/faces/user/searchstatus.xhtml',
  },
  {
    id: 2,
    name: 'Challan Info',

    url: 'https://echallan.parivahan.gov.in/index/accused-challan',
  },
  {
    id: 3,
    name: 'Driving Licence Info',
    url: 'https://parivahan.gov.in/rcdlstatus/?pur_cd=101',
  },
  {
    id: 4,
    name: 'pollution Expiry Info',

    url: 'https://vahan.nic.in/nrservices/faces/user/searchstatus.xhtml',
  },
  {
    id: 5,
    name: 'Resume Builder',
    url: 'https://www.free-resume-builder.net',
  },
  {
    id: 6,
    name: 'EMI Calculator',

    url: 'https://emicalculator.net/',
  },
  {
    id: 12,
    name: 'GST Calculator',

    url: 'https://cleartax.in/s/gst-calculator',
  },
  {
    id: 13,
    name: 'FD Calculator',

    url: 'https://www.paisabazaar.com/fixed-deposit-calculator/',
  },
  {
    id: 14,
    name: 'RD Calculator',

    url: 'https://www.paisabazaar.com/rd-calculator/',
  },
  {
    id: 15,
    name: 'SIP Calculator',

    url: 'https://www.paisabazaar.com/mutual-funds/sip-calculator/',
  },
  {
    id: 16,
    name: 'PPF Calculator',
    url: 'https://www.paisabazaar.com/ppf-calculator/',
  },

  {
    id: 18,
    name: 'Income Tax Calculator',

    url: 'https://www.paisabazaar.com/tax/income-tax-calculator/',
  },
  {
    id: 19,
    name: 'online PAN Card Application',

    url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
  },
  {
    id: 20,
    name: 'Aadhar Card Application',

    url: 'https://uidai.gov.in/my-aadhaar/get-aadhaar.html',
  },
  {
    id: 21,
    name: 'Passport Application',
    url: 'https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink',
  },
  {
    id: 22,
    name: 'Voter ID Application',
    url: 'https://www.nvsp.in/',
  },
  {
    id: 23,
    name: 'Driving License Application',
    url: 'https://parivahan.gov.in/sarathiservice8/stateSelection.do',
  },
  {
    id: 24,
    name: 'Ration Card Application',

    url: 'https://www.india.gov.in/apply-new-ration-card',
  },
  {
    id: 25,
    name: 'PF Withdrawal Application',

    url: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
  },

  {
    id: 30,
    name: 'link Aadhar with PAN Card',

    url: 'https://www1.incometaxindiaefiling.gov.in/e-FilingGS/Services/LinkAadhaarHome.html',
  },
  {
    id: 31,
    name: 'link Aadhar with Mobile Number',

    url: 'https://uidai.gov.in/my-aadhaar/update-aadhaar.html',
  },
  {
    id: 33,
    name: 'book a cylinder',

    url: 'https://my.ebharatgas.com/bharatgas/',
  },

  {
    id: 35,
    name: 'apply for new gas connection',

    url: 'https://my.ebharatgas.com/bharatgas/',
  },

  {
    id: 38,
    name: 'zip code finder',

    url: 'https://www.indiapost.gov.in/VAS/Pages/findpincode.aspx',
  },
  {
    id: 39,
    name: 'post office savings scheme calculator',

    url: 'https://www.indiapost.gov.in/VAS/Pages/Content/PostOfficeSavingsScheme.aspx',
  },
  {
    id: 40,
    name: 'Jobs in India',

    url: 'http://www.indeed.co.in/',
  },
  {
    id: 42,
    name: 'Remote Jobs',

    url: 'https://remoteok.io/',
  },

  {
    id: 41,
    name: 'jobs for freshers',

    url: 'http://www.freshersworld.com/',
  },

  {
    id: 57,
    name: 'Gov. Scheme for farmers',

    url: 'https://www.india.gov.in/topics/agriculture/farming-schemes',
  },
];

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
    // https://dailylifetools-klmapps-default-rtdb.asia-southeast1.firebasedatabase.app/Tools
    const ref = database().ref('/');
    ref.once('value').then(snapshot => {
      // console.log('DATA from Firebase', snapshot.child('Tools').val());
      // console.log('DATA from 7777777', snapshot);
    });
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

    // const ref = firebase.database().ref('Tools/DemoTools');
    // ref.set(data)
    //   .then(() => {
    //     console.log('Data added successfully');
    //   })
    //   .catch(error => {
    //     console.log('Error adding data: ', error);
    //   });
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
