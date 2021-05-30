import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import CardComponent from '../../components/home/CardComponent';
import CategoriesComponent from '../../components/home/CategoriesComponent';
import PromotedCard from '../../components/home/PromotedCard';
import SearchBarComponent from '../../components/home/SearchBarComponent';
import {homeData} from '../../constants/data';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <SearchBarComponent value={searchText} onChangeText={setSearchText} />
      <FlatList
        ListHeaderComponent={
          <>
            <CategoriesComponent
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <PromotedCard />
          </>
        }
        data={homeData}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <CardComponent item={item} index={index} />
        )}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
