import React, { Component } from 'react';
import { View, Text, Button, Image, ListView, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { CardSection, Card } from '../common/index.a';


export default class Beertag extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/Th-list.png')}
                style={{ width: 22, height: 22 }}>

            </Image>
        )

    }
    render() {
        const { navigate } = this.props.navigation;
        console.log('Beertag');
        return (
            <View style={{ justifyContent: 'flex-start' }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigate('BeerDetails')} >
                        <CardSection>
                            <View style={styles.thumbnailContainerStyle}>
                                <Image
                                    style={styles.thumbnailStyle}
                                    source={require('../assets/bottle.png')}

                                />
                            </View>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.headerTextStyle}>BeerTag is hereeee</Text>
                                <Text style={styles.footerTextStyle}>ABV:11.1</Text>
                            </View>
                        </CardSection>
                    </TouchableOpacity >
                    {/* <BeerList />
                            <BeerList />
                            <BeerList />
                            <BeerList />
                            <BeerList />
                            <BeerList /> */}
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '70%'
    },
    headerTextStyle: {
        fontSize: 20

    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 30

    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        // alignItem: 'center',
        marginLeft: 20,
        width: '30%'
    },
    footerTextStyle: {
        fontSize: 15
    }
};