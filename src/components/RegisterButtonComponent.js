import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Typography from './common/TextComponent';
import {useDispatch} from 'react-redux';
import {login, updateLoading} from '../redux/actions';
import PropTypes from 'prop-types';
import {Notifier, NotifierComponents} from 'react-native-notifier';

const RegisterButtonComponent = ({logo, title, style, titleColor, method}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(login(method));
        dispatch(updateLoading(true));
        setTimeout(() => {
          dispatch(updateLoading(false));
        }, 3000);
        navigation.navigate('TabNavigator');
        Notifier.showNotification({
          title: 'Başarılı',
          description: 'Başarı ile giriş yaptınız',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success',
          },
        });
      }}
      style={[styles.container, {...style}]}>
      <View style={styles.logo}>{logo}</View>
      <Typography color={titleColor ? titleColor : 'white'}>{title}</Typography>
    </TouchableOpacity>
  );
};

export default RegisterButtonComponent;

RegisterButtonComponent.propTypes = {
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  style: PropTypes.object,
  titleColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'rgb(119,102,92)',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    width: 300,
  },
  logo: {
    borderRightWidth: 1,
    borderRightColor: 'white',
    marginRight: 15,
    paddingRight: 10,
  },
});
