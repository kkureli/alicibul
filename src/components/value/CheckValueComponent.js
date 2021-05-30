/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../constants/theme/theme';
import {degerKategorileri} from '../../constants/data';
import Typography from '../common/TextComponent';
import DownArrowIcon from '../../../assets/icons/DownArrowIcon';

const CheckValueComponent = () => {
  return (
    <View style={styles.container}>
      {degerKategorileri.map((e, i) => {
        return (
          <TouchableOpacity key={i}>
            <View>
              <Typography>{e.title}</Typography>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#3A2D13',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Typography bold>{e.value}</Typography>
                <View style={{right: 10, position: 'absolute'}}>
                  <DownArrowIcon />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CheckValueComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.lightGray,
    borderRadius: 16,
    marginTop: 20,
    padding: 10,
    paddingVertical: 20,
  },
});
