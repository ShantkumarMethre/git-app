import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Saved extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/bookmark.png')}
                    style={{width: 22, height: 22}}>

            </Image>
        )
    }
    render() {
        return <View style={
                    {
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginTop: '10%'
                    }
        }>
        <Text style={{ fontSize: 18}}>
            There are lot of beer out thaere!

            Use this Space to remember those crazy named beer your friends keep telling you about. 
        </Text>
            </View>
    }
}