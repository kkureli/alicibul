/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BackButton from '../../components/common/BackButton';
import ButtonComponent from '../../components/common/ButtonComponent';
import Typography from '../../components/common/TextComponent';
import Card from '../../components/result/Card';
import theme from '../../constants/theme/theme';

const DESCRIPTION =
  'Jeep Renegade 1.6 Multijet Limited 2019 - Otomatik - 55.000 KM';
const PRICE_RANGE = '263.150 - 270.100 TL';

const ResultScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, height: responsiveHeight(100)}}>
      <View style={styles.title}>
        <SafeAreaView />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={{position: 'absolute', left: 10}}>
            <BackButton />
          </View>
          <Typography h3 bold color="white">
            Değerini Öğren
          </Typography>
        </View>
      </View>
      <View>
        <View style={{...theme.SHADOW}}>
          <Image
            style={[styles.imageCover]}
            source={require('../../../assets/images/OrangeWhiteCover.png')}
          />
        </View>
        <View style={styles.cardContent}>
          <Card
            modal="Renegade"
            description={DESCRIPTION}
            priceRange={PRICE_RANGE}
            logoSource={require('../../../assets/images/jeepLogo.png')}
            carSource={require('../../../assets/images/jeep.png')}
          />
        </View>
      </View>
      <ButtonComponent
        buttonStyles={{
          width: responsiveWidth(75),
          height: responsiveHeight(6.5),
          borderRadius: 5,
          alignSelf: 'center',
          marginTop: 20,
          padding: 7,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Ücretsiz İlan Ver"
        textStyle={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
      />
    </ScrollView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.orange,
    height: responsiveHeight(20),
  },
  topContainer: {},
  imageCover: {
    height: responsiveHeight(70),
    width: responsiveWidth(90),
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 9999,
    top: -30,
    borderRadius: 21,
  },
  cardContent: {
    alignSelf: 'center',
  },
});
