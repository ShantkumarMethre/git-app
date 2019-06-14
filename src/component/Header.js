import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Icon } from 'react-native-elements'
//import Drawer from './Drawer';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

const Header = ({ navigate }) => {
    return (
        <View style={styles.viewStyle}>
            <Icon name='dehaze' color='#000105' onPress={() => navigate('drawer')} />
            <Text style={styles.textStyle}>Beer Tag</Text>
            <Icon name='tune' color='#000105' onPress={() => navigate('Filter')} />
            <Icon name='search' color='#000105' onPress={() => navigate('Search')} />
        </View>

    );
};
const styles = {
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e9ff7c',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
}
export default Header;