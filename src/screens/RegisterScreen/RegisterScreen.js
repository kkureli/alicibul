/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AlicibulLogo from '../../../assets/icons/AlicibulLogo';
import RegisterButtonComponent from '../../components/RegisterButtonComponent';
import Typography from '../../components/common/TextComponent';
import {registerMethods} from '../../constants/data';
import theme from '../../constants/theme/theme';

const RegisterScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(163,97,47)', 'rgb(80,74,65)']}>
      <SafeAreaView />
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.containerScroll}>
        <View style={styles.logo}>
          <AlicibulLogo />
        </View>
        <Typography color="white">Hazır alıcılar, mutlu satıcılar</Typography>
        <View style={{marginTop: 80}}>
          {registerMethods.map((e, i) => {
            return (
              <RegisterButtonComponent
                key={i}
                method={e.method}
                title={e.title}
                logo={e.icon}
              />
            );
          })}
        </View>
        <View style={styles.orLineContainer}>
          <View style={styles.line} />
          <Typography color="white">veya</Typography>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Typography color="white">Giriş Yapın</Typography>
          </TouchableOpacity>
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <Typography color="white" style={{textAlign: 'center'}}>
              Kaydolarak veya giriş yaparak{' '}
              <Typography color={theme.COLORS.orange}>
                Şartlar ve Koşullar{' '}
              </Typography>{' '}
              ve{' '}
              <Typography color={theme.COLORS.orange}>
                {' '}
                Gizlilik Politikasını{' '}
              </Typography>{' '}
              kabul etmiş olursunuz.
            </Typography>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  containerScroll: {
    alignItems: 'center',
    paddingBottom: 30,
    width: responsiveWidth(100),
  },
  logo: {
    marginTop: responsiveHeight(15),
  },
  orLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: responsiveWidth(100),
    marginTop: 20,
  },
  line: {
    width: 120,
    marginHorizontal: 40,
    backgroundColor: 'white',
    height: 0.5,
  },
});
