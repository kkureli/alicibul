/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import theme from '../../constants/theme/theme';
import Typography from '../common/TextComponent';
import PropTypes from 'prop-types';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Card = ({
  modal,
  description,
  priceRange,
  logoSource,
  carSource,
  textStyle,
}) => {
  return (
    <>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            ...theme.SHADOW,
          },
        ]}>
        <Image
          style={{
            width: responsiveWidth(30),
            height: responsiveHeight(5),
            resizeMode: 'contain',
          }}
          source={logoSource}
        />
      </View>
      <View
        style={{
          width: 200,
          height: 1,
          backgroundColor: theme.COLORS.orange,
          alignSelf: 'center',
          marginVertical: 20,
        }}
      />
      <Image
        style={{
          width: responsiveWidth(80),
          height: responsiveHeight(20),
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
        source={carSource}
      />
      <Typography
        bold
        color="black"
        style={{
          ...textStyle,
          alignSelf: 'center',
          fontSize: responsiveFontSize(4),
        }}>
        {modal}
      </Typography>
      <Typography
        color="black"
        style={{
          ...textStyle,
          alignSelf: 'center',
          textAlign: 'center',
          marginHorizontal: 30,
          fontSize: responsiveFontSize(2.5),
        }}>
        {description}
      </Typography>
      <Typography
        bold
        color={theme.COLORS.orange}
        style={{
          ...textStyle,
          alignSelf: 'center',
          marginTop: 10,
          fontSize: responsiveFontSize(4),
        }}>
        {priceRange}
      </Typography>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({});

Card.propTypes = {
  modal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceRange: PropTypes.string.isRequired,
  logoSource: PropTypes.any.isRequired,
  carSource: PropTypes.any.isRequired,
};
