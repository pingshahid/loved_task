import React, { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AvtarPic from './Avtarpic';
import AvtarpicUnselected from './AvtarpicUnselected';

function UserItem(props) {

  const [selectedUser, setSelectedUser] = useState(props.data[props.index].selected);
  const [name, setName] = useState(props.data[props.index].name);
  React.useEffect(() => {
    console.log('UserItem');
    console.log(props);
  }, []);

  return (
    <View>
      {selectedUser == 1?
        <View style={styles.content}>
          <View style={styles.messageBox}>
            <View style={styles.alertComponent}>
              <View style={styles.alertButton}>
                <AvtarPic />
              </View>
              <Text style={styles.messageBoxTitleText}>Open</Text>
            </View>
            <Text style={styles.userNameText}>{name}</Text>
          </View>
        </View> : <View style={styles.content}>
          <View style={styles.userBox}>
            <View style={styles.alertComponent}>
              <View style={styles.alertButton}>
                <AvtarpicUnselected />
              </View>
            </View>
      <Text style={styles.userNameUnselectedText}>{name}</Text>
          </View>
        </View>}
    </View>


  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
    alignItems: 'center', //<-----
  },
  messageBox: {
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    height: 120,
    width: 150,
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
  userBox: {
    backgroundColor: '#FFF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    height: 120,
    width: 150,
  },
  userNameText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 25,
    marginTop: 20,
  },
  userNameUnselectedText: {
    fontWeight: 'bold',
    color: '#969DA5',
    fontSize: 25,
    marginTop: 30,
  },
  messageBoxTitleText: {
    fontWeight: 'bold',
    color: '#FFCC00',
    fontSize: 20,
    marginTop: 15,
  }
});

export default UserItem;
