/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {COLORS} from './Colors';
import AvtarPic from './Avtarpic';
import AvtarpicUnselected from './AvtarpicUnselected';

import {
  Animated,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CrossButton from './CrossButton';
import CardBar from './CardBar';
import AccountDetails from './AccountDetails';
import * as data from './assets/UserData.json';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

const App: () => React$Node = () => {
  const [dataList, setDataList] = useState([data[0], data[1]]);
  const [selectedUser, setSelectedUser] = useState(data[0]);
  const [dismissD, setDismissD] = useState(true);
  this.animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    //console.log('####');
    //setDataList([data[0], data[1]]);
    setSelectedUser(data[0]);
    //selectedUser = data[0]
    // console.log(dataList);
  }, []);

  onSelect = () => {
    selectedUser.barModel = "1";
    //setDismissD(false)
    animatedValue = new Animated.Value(0);
    Animated.timing(
      animatedValue,
      {
        toValue: 1,
        duration: 510,
        useNativeDriver: true
      }
    ).start(() => {
      setDismissD(false)
    });
    console.log('on dismiss');


  };
  onSelectUser = (p) => {

    if (p === 0) {
      dataList[0].selected = "1"
      dataList[1].selected = "0"
      setSelectedUser(dataList[0])
    } else {
      dataList[0].selected = "0"
      dataList[1].selected = "1"
      setSelectedUser(dataList[1])
    }

    if(dataList[p].barModel == '0'){
      setDismissD(true)
    }else{
      setDismissD(false)
    }

    console.log('onSelectUser');
    console.log(selectedUser)
    //setDataList([dataList[0], dataList[1]]);
  };

  const translateAnimation = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-WIDTH, 0, WIDTH]
  });

  const opacityAnimation = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.homeView}>
        <View style={styles.toolbar}>
          <View style={styles.toolbarButton}>
            <CrossButton />
          </View>
          <Text style={styles.toolbarTitle}>Auto-Investments</Text>
        </View>
        <Animated.View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View>
            {dismissD ? <CardBar onSelect={this.onSelect} /> : null}
          </View>

          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={() => this.onSelectUser(0)}>
              {/* <UserItem index={0} data={dataList} selectedUser={selectedUser}></UserItem> */}
              <View>
      {dataList[0].selected == "1"?
        <View style={styles.content}>
          <View style={styles.messageBox}>
            <View style={styles.alertComponent}>
              <View style={styles.alertButton}>
                <AvtarPic />
              </View>
              <Text style={styles.messageBoxTitleText}>Open</Text>
            </View>
            <Text style={styles.userNameText}>{dataList[0].name}</Text>
          </View>
        </View> : <View style={styles.content}>
          <View style={styles.userBox}>
            <View style={styles.alertComponent}>
              <View style={styles.alertButton}>
                <AvtarpicUnselected />
              </View>
            </View>
      <Text style={styles.userNameUnselectedText}>{dataList[0].name}</Text>
          </View>
        </View>}
    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onSelectUser(1)}>
            <View>
      {dataList[1].selected == "1"?
        <View style={styles.content}>
          <View style={styles.messageBox}>
            <View style={styles.alertComponent}>
              <View style={styles.alertButton}>
                <AvtarPic />
              </View>
              <Text style={styles.messageBoxTitleText}>Open</Text>
            </View>
            <Text style={styles.userNameText}>{dataList[1].name}</Text>
          </View>
        </View> : <View style={styles.content}>
          <View style={styles.userBox}>
            <View style={styles.alertComponent}>
              <View style={styles.alertButton}>
                <AvtarpicUnselected />
              </View>
            </View>
      <Text style={styles.userNameUnselectedText}>{dataList[1].name}</Text>
          </View>
        </View>}
    </View>
              {/* <UserItem index={1} data={dataList} selectedUser={selectedUser}></UserItem> */}
            </TouchableOpacity>
          </ScrollView>
          <AccountDetails selectedUser={selectedUser}></AccountDetails>
          <View style={styles.dView} />
        </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  dView: {
    height:100,
  },
  viewHolder: {
    paddingVertical: 15,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 4,
    paddingLeft: 15,
    borderRadius: 10
  },
  carousel: {
    height: 200,
  },
  barStyles: {
    backgroundColor: Colors.black,
    height: 200,
    width: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flex: 1,
    padding: 10,
    alignItems: 'center', //<-----
  },
  messageBox: {
    backgroundColor: '#000',
    paddingTop: 5,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    height: 110,
    width: 150,
  },
  userBox: {
    backgroundColor: '#FFF',
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    height: 110,
    width: 150,
  },
  userNameText: {
    fontWeight: 'normal',
    color: '#FFF',
    fontFamily: 'Silka',
    fontSize: 25,
    marginTop: 20,
  },
  userNameUnselectedText: {
    fontWeight: 'normal',
    fontFamily: 'Silka',
    color: '#969DA5',
    fontSize: 25,
    marginTop: 30,
  },
  messageBoxTitleText: {
    fontWeight: 'bold',
    color: '#FFCC00',
    fontSize: 20,
    marginTop: 15,
  }, ageTextTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginTop: 8,
    justifyContent: 'flex-start',
    flex: 1,
  }, ageTextTitleEnd: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginTop: 8,
    justifyContent: 'flex-end',
    flex: 0.3,
  },
  messageBoxBodyText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Silka',
  },
  alertComponent: {
    flexDirection: 'row', //Step 1
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertButton: {
    width: 16,
    height: 16,
    flex: 1,

  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row', //Step 1
  },
  toolbarButton: {
    marginTop: 5,
    width: 16,
    height: 16,
    marginLeft: 20,
  },
  toolbarTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 22,
    fontSize: 20,
    flex: 1,
  },
  homeView: {
    backgroundColor: COLORS.home_bg,
  },
  scrollView: {
    backgroundColor: COLORS.home_bg,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  button: {
    backgroundColor: '#a7bd4f',
    marginTop: 30,
    width: WIDTH * 0.4,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
