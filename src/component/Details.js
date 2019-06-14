import React, { Component } from 'react';
import { View, Text, Button, Image, ListView, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { CardSection, Card } from '../common';
import BeerDetails from '../component/BeerDetails';
import Details from '../component/Details';

export default class Details extends Component {
    constructor(props){
        super(props)
        const data=require('../Data/Data.json');
        this.state={ data: data }
    }
    render() {
        const { id, title, value, image }= this.state.data;
        console.log(this.state.data);        
        return (
        <View style={{flex: 1}}>
                    <ScrollView>
                        {this.state.data.map((element,i)=>
                        <BeerDetails navigation={this.props.navigation}
                        image={element.image}
                        value={element.value}
                        title={element.title}
                         key = {element.id} />
                         )}
                    </ScrollView>
                </View>
        );
    }
}
const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        padding: 5,
        height: 80,
        backgroundColor: '#fff',
//justifycontent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
};