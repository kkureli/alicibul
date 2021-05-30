import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GiftIcon from '../../../assets/icons/GiftIcon';
import PromotedCarIcon from '../../../assets/icons/PromotedCarIcon';
import theme from '../../constants/theme/theme';
import Typography from '.././common/TextComponent';

const PromotedCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Typography style={styles.text}>Stüdyo özelliği ile</Typography>
        <Typography style={[styles.text, {fontWeight: 'bold'}]}>
          aracınızı en iyi şekilde
        </Typography>
        <Typography style={[styles.text, {fontWeight: 'bold'}]}>
          sergileyin.
        </Typography>
      </View>
      <View style={[styles.wave, {...theme.SHADOW}]}>
        <Image
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(10),
            borderBottomLeftRadius: theme.SIZES.cardBorderRadius,
            borderBottomRightRadius: theme.SIZES.cardBorderRadius,
          }}
          source={require('../../../assets/images/wave.png')}
        />
      </View>
      <View style={styles.car}>
        <PromotedCarIcon
          width={responsiveWidth(70)}
          height={responsiveHeight(12)}
        />
      </View>
      <View style={[styles.gift, {...theme.SHADOW}]}>
        <GiftIcon />
      </View>
    </View>
  );
};

export default PromotedCard;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    backgroundColor: theme.COLORS.lightGray,
    alignSelf: 'center',
    borderRadius: theme.SIZES.cardBorderRadius,
  },
  wave: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: responsiveWidth(90),
    height: responsiveHeight(10),
  },
  car: {
    justifyContent: 'center',
    alignItems: 'center',
    top: responsiveHeight(0),
  },
  gift: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    top: -20,
    right: -20,
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
  },
});
