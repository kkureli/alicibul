import React from 'react';
import {StyleSheet, View} from 'react-native';
import CameraIcon from '../../assets/icons/TabNavigatorIcons/CameraIcon';
import CarIcon from '../../assets/icons/TabNavigatorIcons/CarIcon';
import MessagesIcon from '../../assets/icons/TabNavigatorIcons/MessagesIcon';
import ProfileIcon from '../../assets/icons/TabNavigatorIcons/ProfileIcon';
import SearchCarIcon from '../../assets/icons/TabNavigatorIcons/SearchCarIcon';
import Typography from '../components/common/TextComponent';
import theme from '../constants/theme/theme';

export const tabBarGenerator = (route, focused) => {
  return route.name === 'HomeScreen' ? (
    focused ? (
      <View style={styles.tabIconContaner}>
        <CarIcon fill="white" color="white" width={24} height={24} />
        <View style={styles.label}>
          <Typography color="white">Vitrin</Typography>
        </View>
      </View>
    ) : (
      <CarIcon width={24} height={24} />
    )
  ) : route.name === 'SearchScreen' ? (
    focused ? (
      <View style={styles.tabIconContaner}>
        <SearchCarIcon fill="white" color="white" width={24} height={24} />
        <View style={styles.label}>
          <Typography color="white">Ara</Typography>
        </View>
      </View>
    ) : (
      <SearchCarIcon width={24} height={24} />
    )
  ) : route.name === 'SellingScreen' ? (
    focused ? (
      <View style={styles.tabIconContaner}>
        <CameraIcon color="gray" width={24} height={24} />
        <View style={styles.label}>
          <Typography color="white">Sat</Typography>
        </View>
      </View>
    ) : (
      <CameraIcon fill="gray" width={24} height={24} />
    )
  ) : route.name === 'MessagesScreen' ? (
    focused ? (
      <View style={styles.tabIconContaner}>
        <MessagesIcon color="white" width={24} height={24} />
        <View style={styles.label}>
          <Typography color="white">Mesaj</Typography>
        </View>
      </View>
    ) : (
      <MessagesIcon fill="white" width={24} height={24} />
    )
  ) : route.name === 'ProfileScreen' ? (
    focused ? (
      <View style={styles.tabIconContaner}>
        <ProfileIcon color="white" width={24} height={24} />
        <View style={styles.label}>
          <Typography color="white">Profil</Typography>
        </View>
      </View>
    ) : (
      <ProfileIcon fill="white" width={24} height={24} />
    )
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  tabIconContaner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.orange,
    padding: 5,
    borderRadius: 10,
  },
  label: {
    marginLeft: 5,
  },
});
