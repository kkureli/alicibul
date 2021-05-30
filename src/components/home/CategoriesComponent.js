import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {categories} from '../../constants/data';
import Typography from '../common/TextComponent';
import theme from '../../constants/theme/theme';
import PropTypes from 'prop-types';
const CategoriesComponent = ({selectedCategory, setSelectedCategory}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      horizontal>
      {categories(selectedCategory).map((category, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => setSelectedCategory(i)}
            style={styles.category}>
            {category.icon}
            {category.title && (
              <Typography
                color={
                  i === selectedCategory
                    ? theme.COLORS.categoriesOrange
                    : 'gray'
                }>
                {category.title}
              </Typography>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  category: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CategoriesComponent.propTypes = {
  selectedCategory: PropTypes.number,
  setSelectedCategory: PropTypes.func,
};
