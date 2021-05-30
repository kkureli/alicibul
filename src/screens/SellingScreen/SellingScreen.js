/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ProfileIcon from '../../../assets/icons/TabNavigatorIcons/ProfileIcon';
import ButtonComponent from '../../components/common/ButtonComponent';
import CheckValueComponent from '../../components/value/CheckValueComponent';
import KMIndicator from '../../components/value/KMIndicator';
import Typography from '../../components/common/TextComponent';

const SellingScreen = ({navigation}) => {
  const [value, setValue] = useState('55000');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView />
      <View style={styles.title}>
        <Typography color="black">Değerini Öğren</Typography>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={{position: 'absolute', right: 10}}>
          <ProfileIcon width={28} height={28} />
        </TouchableOpacity>
      </View>
      <CheckValueComponent />
      <KMIndicator setValue={setValue} value={value} />
      <ButtonComponent
        onPress={() => navigation.navigate('ResultScreen')}
        buttonStyles={{
          width: responsiveWidth(80),
          height: responsiveHeight(5),
          borderRadius: 5,
          alignSelf: 'center',
          marginTop: 20,

          justifyContent: 'center',
          alignItems: 'center',
        }}
        title="Değerini Öğren"
        textStyle={{color: 'white', fontSize: 20}}
      />
    </ScrollView>
  );
};

export default SellingScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    width: responsiveWidth(100),
    justifyContent: 'center',
  },
});
