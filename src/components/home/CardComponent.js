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
      <TouchableOpacity
        style={[styles.container, {height: responsiveHeight(15)}]}>
        <Image style={styles.image} source={item.image} />
        <Image
          source={require('../../../assets/images/homeCards/orangeCover.png')}
          style={[
            {
              top: 15,
              left: 14,
              position: 'absolute',
              width: responsiveWidth(44),
              minHeight: responsiveHeight(20),
              zIndex: 999,
            },
          ]}
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
      <TouchableOpacity style={[styles.container]}>
        <View>
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
    marginVertical: 5,
    flex: 1,
    minHeight: responsiveHeight(20),
    width: responsiveWidth(44),
  },
  image: {
    width: responsiveWidth(44),
    zIndex: 999,
    minHeight: responsiveHeight(18),
    borderRadius: 5,
    bottom: -13,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  logo: {
    position: 'absolute',
    bottom: 5,
    left: 20,
    zIndex: 999,
    backgroundColor: 'rgba(232, 232, 232, 0.5)',
    borderRadius: 10,
  },
  bottomContainer: {
    width: responsiveWidth(42),
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
    top: 25,
    right: 25,
  },
});

CardComponent.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};
