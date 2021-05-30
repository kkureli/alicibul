import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '../../components/common/TextComponent';
import {logout} from '../../redux/actions';
import {Notifier, NotifierComponents} from 'react-native-notifier';

const ProfileScreen = () => {
  const {logged} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {logged ? (
        <TouchableOpacity
          onPress={() => {
            dispatch(logout());
            Notifier.showNotification({
              title: 'Başarılı',
              description: 'Başarı ile çıkış yaptınız',
              Component: NotifierComponents.Alert,
              componentProps: {
                alertType: 'success',
              },
            });
          }}
          style={styles.button}>
          <Typography color="white">Logout</Typography>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.push('RegisterScreen')}
          style={styles.button}>
          <Typography color="white">Login</Typography>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: responsiveWidth(60),
    borderRadius: 5,
    alignSelf: 'center',
    padding: 5,
  },
});
