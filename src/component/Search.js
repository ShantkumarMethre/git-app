import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import SearchBar from 'react-native-searchbar';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


const items = [];

const Search = ({ navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.viewStyle}>
        <Icon name='search' color='#000105' />
        <Text style={styles.textStyle}>Search</Text>
        <View style={{ justifyContent: 'flex-end' }}>
          <Icon name='tune' color='#000105' />
        </View>
      </View>
      <View style={styles.searchBarStyle}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        />
      </View>
    </View>
  );
};
const styles = {

  containerStyle: {
    flexDirection: 'column',
    flex: 1
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#e9ff7c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    position: 'relative'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  searchBarStyle: {
    width: '100%',
    height: '20%'
  }
}
export default Search; 