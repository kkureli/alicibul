/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import theme from '../../constants/theme/theme';
import ButtonComponent from '.././common/ButtonComponent';
import Typography from '.././common/TextComponent';
import PropTypes from 'prop-types';

const KMIndicator = ({value, setValue}) => {
  return (
    <View style={styles.container}>
      <ButtonComponent
        onPress={() => setValue(parseFloat(value) + 1000)}
        buttonStyles={{
          width: responsiveWidth(10),
          height: responsiveHeight(5),
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="+"
        textStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
        }}
      />
      <View style={styles.indicatorCenter}>
        <Typography>{value + ' KM'}</Typography>
      </View>
      <ButtonComponent
        onPress={() => setValue(parseFloat(value) - 1000)}
        buttonStyles={{
          width: responsiveWidth(10),
          height: responsiveHeight(5),
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="-"
        textStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
        }}
      />
    </View>
  );
};

export default KMIndicator;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
  },
  indicatorCenter: {
    width: responsiveWidth(75),
    height: responsiveHeight(5),
    backgroundColor: theme.COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

KMIndicator.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func,
};
