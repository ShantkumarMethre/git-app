 import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import{ CardSection, Card } from '../common/index.a';
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';


export default class BeerDetails extends Component {

    
    static navigationOptions = {
        header: null
    }
     render() {
        const { navigate } = this.props.navigation;      
        console.log('BeerDetails');
          return(
            <View style={styles.containerStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Beer Tag</Text>
                    <Icon name='search'  color='#000105' />
                </View>
                <View>
                    <ScrollView>
                        <ImageBackground
                            style={styles.imageStyle}
                            source={require('../assets/beers.jpeg')} >
                            <View style={styles.onImageStyle}>
                                <Text style={styles.textStyle}>Details</Text>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </View>
                <View style={styles.iconStyle}>
                    <Icon name='bookmark'  color='#000105' />
                    <Icon name='local-drink'  color='#000105' />
                </View>
                <View style={styles.secondViewStyle}>  
                   <CardSection>
                        <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>Ship Bottom Brewery</Text>   
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.headerTextStyle}>ABV</Text>   
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.headerTextStyle}>ABV</Text>   
                        </View>
                    </CardSection>                   
                </View>
                <View style={styles.viewStyle}>
                    <Icon name='send'  color='#000105' />     
                    <Icon name='bookmark'  color='#000105' />
                    <Icon name='local-drink'  color='#000105' />
                </View>
            </View>
        );
    }
}

const styles= {
    
    containerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    imageStyle: {
        width: '100%'

    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e9ff7c',
        shadowColor: '#000',
        height: 50,
        shadowOffset: { width: 0, height: 2 },
        position: 'relative'
     },
     onImageStyle: {
         alignItems: 'flex-start',
         backgroundColor:'#820e0e',
         marginTop: '30%',
         opacity: 0.7
     },
     textStyle: {
        fontWeight: 'bold',
        fontSize: 18
     },
     headerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },
    headerTextStyle: {
        fontSize: 20
    },
    secondViewStyle:{
        flex: 1,
        alignItems: 'flex-start'
    },
    iconStyle: {
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
    }
}