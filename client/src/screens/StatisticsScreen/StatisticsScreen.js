import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Box = ({ title, contentTop, contentBottom }) => (
    <View style={styles.box}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.centerText}>
        <Text style={styles.topText}>{contentTop}</Text>
        <Text style={styles.bottomText}>{contentBottom}</Text>
      </View>
    </View>
  );
  
  const TallBox = ({ title }) => (
    <View style={styles.tallBox}>
        <Text style={styles.headingRight}>{title}</Text>
    </View>
  );
  
  const BottomBox = ({ title, contentTop, contentBottom }) => (
    <View style={styles.bottomBox}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.centerText}>
        <Text style={styles.topText}>{contentTop}</Text>
        <Text style={styles.bottomText}>{contentBottom}</Text>
      </View>
    </View>
  );
  

export function StatisticsScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.placeholder}></View>
        <View style={styles.topRow}>
          <View style={styles.leftColumn}>
            <Box title="KM Walked"     contentTop="1,200 KM" contentBottom="keep it up!"/>
            <Box title="Wins & Losses" contentTop="12 : 4" contentBottom="positive ratio!"/>
            <Box title="Net earnings"  contentTop="72.00€" contentBottom="lifetime earned"/>
          </View>
          <View style={styles.rightColumn}>
            <TallBox title="Bananas Covered" />
          </View>
        </View>
        <BottomBox title="Net earnings"  contentTop="12,000 kcal" contentBottom="lifetime burned"/>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
      },
      centerText:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'auto',
        paddingTop: '5%',
        marginBottom: 'auto',
        textAlign: 'center',
        alignItems:'center',
      },
      topText: {
        color: '#000000',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      },
      bottomText: {
        color: '#8d8d8d',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
      },
      placeholder: {
        height: '15%',
        width: '100%',
        marginTop: '15%',
        backgroundColor: '#ff0000',
      },
      heading: {
        position: 'absolute',
        marginLeft: '5%',
        marginTop: '5%',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      },
      headingRight: {
        position: 'absolute',
        right: 0,
        marginRight: '5%',
        marginTop: '5%',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      },
      topRow: {
        flexDirection: 'row',
        flex: 1,
        borderRadius: 18,
      },
      leftColumn: {
        flex: 1,
        justifyContent: 'space-between',
      },
      rightColumn: {
        flex: 1,
      },
      box: {
        flex: 1,
        margin: 3,
        borderRadius: 18,
        backgroundColor: '#E6E6E6',
      },
      tallBox: {
        flex: 1,
        margin: 3,
        backgroundColor: '#E6E6E6',
        borderRadius: 18,
      },
      bottomBox: {
        margin: 3,
        marginBottom: '25%',
        height: '15%',
        backgroundColor: '#E6E6E6',
        borderRadius: 18,
      },
    });
