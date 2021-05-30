import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FilterIcon from '../../../assets/icons/FilterIcon';
import RingIcon from '../../../assets/icons/RingIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import theme from '../../constants/theme/theme';
import PropTypes from 'prop-types';

const SearchBarComponent = ({value, onChangeText, placeholder, ...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarIconsContainer}>
        <View style={styles.searchIconContainer}>
          <SearchIcon />
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="black"
          placeholder={placeholder ? placeholder : 'Arama'}
          style={styles.input}
          {...props}
        />
        <TouchableOpacity style={styles.filterIconContainer}>
          <FilterIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.ringIcon}>
        <RingIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarComponent;

SearchBarComponent.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    paddingTop: 0,
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    paddingLeft: 50,
  },
  searchBarIconsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  searchIconContainer: {
    position: 'absolute',
    zIndex: 9999,
    left: 10,
    width: 24,
    height: 24,
    elevation: 2,
  },
  filterIconContainer: {
    position: 'absolute',
    zIndex: 999,
    right: 10,
  },
  ringIcon: {
    backgroundColor: theme.COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 10,
    height: responsiveHeight(5),
    width: responsiveHeight(5),
  },
});
