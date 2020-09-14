import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

function AccountDetails(props) {
  React.useEffect(() => {}, []);

  selectedUser = props.selectedUser

  return (
    <View style={styles.content}>
      <View style={styles.messageBox}>
        <View style={styles.alertComponent}>
          <Text style={styles.messageBoxTitleText}>
            Automatic Settings for {selectedUser.name}
          </Text>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.rowStartStyle}>
            <Text style={styles.rowTextStyle}>{selectedUser.data[0].trans_name}</Text>
            <Text style={styles.rowDescTextStyle}>{selectedUser.data[0].next_date}</Text>
          </View>
          <View style={styles.rowEndStyle}>
            <Text style={styles.rowPriceStyle}>{selectedUser.data[0].cost}</Text>
            <Text style={styles.rowPriceDescTextStyle}>{selectedUser.data[0].interval}</Text>
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.rowStartStyle}>
            <Text style={styles.rowTextStyle}>{selectedUser.data[1].trans_name}</Text>
            <Text style={styles.rowDescTextStyle}>{selectedUser.data[1].interval}</Text>
          </View>
          <View style={styles.rowEndStyle}>
          <Text style={styles.rowPriceStyle}>{selectedUser.data[1].cost}</Text>
            <Text style={styles.rowPriceDescTextStyle}>{selectedUser.data[1].interval}</Text>
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.rowStartStyle}>
            <Text style={styles.rowTextStyle}>{selectedUser.data[2].trans_name}</Text>
            <Text style={styles.rowDescTextStyle}>{selectedUser.data[2].interval}</Text>
          </View>
          <View style={styles.rowEndStyle}>
          <Text style={styles.rowPriceStyle}>{selectedUser.data[2].cost}</Text>
            <Text style={styles.rowPriceDescTextStyle}>{selectedUser.data[2].interval}</Text>
          </View>
        </View>

        <View style={styles.portFolioRowStyle}>
          <View style={styles.rowStyle}>
            <View style={styles.rowStartStyle}>
              <Text style={styles.rowTextStyle}>Portfolio</Text>
              <Text style={styles.rowDescTextStyle}>Next transfer July 2</Text>
            </View>
            <View style={styles.rowEndStyle}>
              <Text style={styles.rowPriceDescTextStyle}>Weekly</Text>
            </View>
          </View>

          <View style={styles.portFolioTransRowStyle}>
          <Image style={styles.imageStyle} source={require('./assets/apple.png')} />

          <View style={styles.rowStartStyle}>
            <Text style={styles.rowTextStyle}>Apple</Text>
            <Text style={styles.rowDescTextStyle}>Balance $5</Text>
          </View>
          <View style={styles.rowEndStyle}>
            <Text style={styles.rowPriceStyle}>Off</Text>
          </View>
        </View>

        <View style={styles.portFolioTransRowStyle}>
          <Image style={styles.imageStyle} source={require('./assets/apple.png')} />

          <View style={styles.rowStartStyle}>
            <Text style={styles.rowTextStyle}>Apple</Text>
            <Text style={styles.rowDescTextStyle}>Balance $5</Text>
          </View>
          <View style={styles.rowEndStyle}>
            <Text style={styles.rowPriceStyle}>Off</Text>
          </View>
        </View>

        <View style={styles.portFolioTransRowStyle}>
          <Image style={styles.imageStyle} source={require('./assets/apple.png')} />

          <View style={styles.rowStartStyle}>
            <Text style={styles.rowTextStyle}>Apple</Text>
            <Text style={styles.rowDescTextStyle}>Balance $5</Text>
          </View>
          <View style={styles.rowEndStyle}>
            <Text style={styles.rowPriceStyle}>Off</Text>
          </View>
        </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop:5,
    width: '100%',
  },
  messageBox: {
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  messageBoxTitleText: {
    fontWeight: '600',
    color: '#1D1D1F',
    fontSize: 17,
    fontFamily: 'Silka',
    marginBottom: 10,
    marginTop: 8,
    justifyContent: 'flex-start',
    flex: 1,
  },
  alertComponent: {
    flexDirection: 'row', //Step 1
  },
  rowStyle: {
    backgroundColor: '#EDEDED',
    padding: 10,
    borderRadius: 20,
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  },
  rowTextStyle: {
    fontWeight: 'normal',
    color: '#000',
    fontFamily:'Silka',
    fontSize: 20,
    justifyContent: 'flex-start',
    flex: 1,
  },
  rowDescTextStyle: {
    fontWeight: 'normal',
    color: '#1D1D1F',
    fontFamily:'Silka',
    fontSize: 12,
    flex: 1,
  },
  rowStartStyle: {
    flex: 1,
  },
  rowEndStyle: {
  },
  rowPriceStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  rowPriceDescTextStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
    flex: 1,
  },portFolioRowStyle: {
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    marginBottom:20,
  },portFolioTransRowStyle: {
    backgroundColor: '#EDEDED',
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    paddingLeft:20,
    paddingRight:20,
  },imageStyle:{
      marginTop:3,
      marginRight:10,
  }
});

export default AccountDetails;
