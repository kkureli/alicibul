/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import EmptyHeartIcon from '../../../assets/icons/CardIcons/EmptyHeartIcon';
import FilledHeartIcon from '../../../assets/icons/CardIcons/FilledHeartIcon';
import GasIcon from '../../../assets/icons/CardIcons/GasIcon';
import GearIcon from '../../../assets/icons/CardIcons/GearIcon';
import KmIcon from '../../../assets/icons/CardIcons/KmIcon';
import LocationIcon from '../../../assets/icons/CardIcons/LocationIcon';
import theme from '../../constants/theme/theme';
import {updateLikedCars} from '../../redux/actions';
import Typography from '..//common/TextComponent';
import PropTypes from 'prop-types';

const CardComponent = ({item, index}) => {
  const {likedCars} = useSelector(state => state);
  const dispatch = useDispatch();

  const heartPressed = id => {
    if (likedCars.includes(id)) {
      const updateLikes = likedCars.filter((e, i) => {
        return e !== id;
      });
      dispatch(updateLikedCars(updateLikes));
    } else {
      const updateLikes = [...likedCars, id];
      dispatch(updateLikedCars(updateLikes));
    }
  };
  if (item.advertisement) {
    return (
      <TouchableOpacity style={[styles.adContainer]}>
        <Image style={styles.image} source={item.image} />
        <Image
          source={require('../../../assets/images/homeCards/orangeCover.png')}
          style={styles.coverOrangeImage}
        />

        <View style={[styles.titles, {[item.titlePosition]: 30}]}>
          <Typography bold color="white">
            {item.title}
          </Typography>
          <Typography style={{textAlign: item.textAlign}} color="white">
            {item.subtitle}
          </Typography>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            top: index === 3 || index !== 0 ? -responsiveHeight(8) : 0,
          },
        ]}>
        <View style={{height: responsiveHeight(22)}}>
          <Image style={styles.image} source={item.image} />
          {item.logo && <Image style={styles.logo} source={item.logo} />}
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <View>
              <Typography size={responsiveFontSize(1.5)} bold>
                {item.modal}
              </Typography>
            </View>
            <View style={styles.infoIconContainer}>
              <KmIcon />
              <Typography
                style={{marginLeft: 5}}
                size={responsiveFontSize(1.5)}>
                {item.km}
              </Typography>
            </View>
            <View style={styles.infoIconContainer}>
              <GearIcon />
              <Typography
                style={{marginLeft: 5}}
                size={responsiveFontSize(1.5)}>
                {item.gear}
              </Typography>
            </View>
          </View>
          <View>
            <View>
              <Typography
                size={responsiveFontSize(1.5)}
                bold
                color={theme.COLORS.orange}>
                {item.price}
              </Typography>
            </View>
            <View style={styles.infoIconContainer}>
              <LocationIcon />
              <Typography
                style={{marginLeft: 5}}
                size={responsiveFontSize(1.5)}>
                {item.location}
              </Typography>
            </View>
            <View style={styles.infoIconContainer}>
              <GasIcon />
              <Typography
                style={{marginLeft: 5}}
                size={responsiveFontSize(1.5)}>
                {item.gas}
              </Typography>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => heartPressed(item.id)}
          style={styles.heartIcon}>
          {likedCars.includes(item.id) ? (
            <FilledHeartIcon width={24} height={24} />
          ) : (
            <EmptyHeartIcon width={24} height={24} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    // backgroundColor: 'red',
  },
  adContainer: {
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    height: responsiveHeight(24),
    width: responsiveWidth(45),
    // backgroundColor: 'red',
  },
  image: {
    width: responsiveWidth(45),
    zIndex: 999,
    height: responsiveHeight(22),
    borderRadius: 5,
    alignSelf: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // backgroundColor: 'red',
  },
  coverOrangeImage: {
    position: 'absolute',
    width: responsiveWidth(45),
    height: responsiveHeight(25.6),
    alignSelf: 'center',
    borderRadius: 5,
    zIndex: 999,
  },
  logo: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    zIndex: 999,
    backgroundColor: 'rgba(232, 232, 232, 0.5)',
    borderRadius: 10,
  },
  bottomContainer: {
    width: responsiveWidth(45),
    height: responsiveHeight(10),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  infoIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titles: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 5,
  },
  heartIcon: {
    position: 'absolute',
    zIndex: 99999,
    top: 15,
    right: 20,
  },
});

CardComponent.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};
