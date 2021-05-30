import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../constants/theme/theme';
import Typography from './TextComponent';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  title,
  textStyle,
  buttonStyles,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...buttonStyles, backgroundColor: theme.COLORS.orange}}
      {...props}>
      <Typography style={{...textStyle}}>{title}</Typography>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});

ButtonComponent.defaultProps = {
  buttonStyles: {
    backgroundColor: theme.COLORS.orange,
  },
};

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  buttonStyles: PropTypes.object,
  onPress: PropTypes.func,
};
