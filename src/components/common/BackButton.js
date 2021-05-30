import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BackArrowIcon from '../../../assets/icons/BackArrowIcon';
import {useNavigation} from '@react-navigation/core';
import PropTypes from 'prop-types';

const BackButton = ({buttonStyle}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={[styles.container, {style: {...buttonStyle}}]}>
      <BackArrowIcon />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

BackButton.propTypes = {
  buttonStyle: PropTypes.object,
};
