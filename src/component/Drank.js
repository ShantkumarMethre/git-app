import React, { Component } from 'react';
import { View, Text, Button, Image,ImageBackground } from 'react-native';

export default class Drank extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../assets/glass.png')}
                    style={{width: 22, height: 22 }}>

            </Image>
        )
    }
    render() {
        return <View style={
                    {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
        }>
                    <Image
                            source={require('../assets/beers.jpeg')} >
                        </Image>
                        <Text style={{ fontSize: 20}}>
                             this is Drank
                        </Text>
                 </View>
    }
}