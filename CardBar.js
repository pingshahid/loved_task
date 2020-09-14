import React, {useState} from 'react';

import BarChart from './BarChart';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CrossButton from './CrossButton';

function CardBar(props) {
  const [dataY, setDataY] = useState([]);
  const [dataYY, setDataYY] = useState([]);
  onSelect = props.onSelect
  React.useEffect(() => {
    setDataY([160, 140, 120, 100, 80, 60, 40, 20, 0]);
    setDataYY([160, 155, 140, 130, 115, 100, 80, 60, 40]);
    
  }, []);

  function onPressButton() {
    //setIsHallie(false);
    onSelect()
    
    //alert('You tapped the button!');
  }

  return (
    <View style={styles.content}>
      <View style={styles.messageBox}>
        <View style={styles.alertComponent}>
          <Text style={styles.messageBoxTitleText}>
            Why invest automatically?
          </Text>
          <TouchableOpacity onPress={onPressButton}>
            <View style={styles.alertButton}>
              <CrossButton />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.messageBoxBodyText}>
            If someone invested $50 each month from age 0, today you could have
            had $xx,xxx.
          </Text>
        </View>
        <View style={styles.container}>
          <BarChart
            dataY={dataY}
            color={'#f7da67'}
            height={180}
            barName={'yellowbar'}
            containerStyles={styles.barChart}
          />

          <BarChart
            dataY={dataYY}
            color={'#808080'}
            height={180}
            barName={'graybar'}
            containerStyles={styles.barChartAbove}
          />
        </View>
        <View style={styles.alertComponent}>
          <Text style={styles.ageTextTitle}>Age 0</Text>
          <Text style={styles.ageTextTitleEnd}>Age 35</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barStyles: {
    backgroundColor: Colors.black,
    height: 200,
    width: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flex: 1,
    padding: 5,
    alignItems: 'center', //<-----
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
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 8,
    justifyContent: 'flex-start',
    flex: 1,
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
    },
    alertButton: {
        width: 16,
        height: 16,
        marginTop: 12,

    }, barChart: {
        backgroundColor: 'transparent',
        height: 180,
        width: 340,
    },
    barChartAbove: {
        backgroundColor: 'transparent',
        height: 180,
        width: 340,
        position: 'absolute',
    }, container: {
        alignItems: 'center',
    },
});

export default CardBar;
