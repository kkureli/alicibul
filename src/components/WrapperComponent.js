import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const WrapperComponent = ({children}) => {
  const {loading} = useSelector(state => state);

  return (
    <>
      {children}
      {loading && (
        <ActivityIndicator color="red" size="large" style={styles.loading} />
      )}
    </>
  );
};

export default WrapperComponent;

const styles = StyleSheet.create({
  loading: {
    width: 60,
    height: 60,
    color: 'red',
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
    zIndex: 999,
  },
});

WrapperComponent.propTypes = {
  children: PropTypes.node,
};
