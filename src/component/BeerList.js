import React, {Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { CardSection, Card } from '../common/index.a';
import { NavigationActions } from 'react-navigation';
import BeerDetails from '../component/BeerDetails';

export default class BeerList extends Component {
    onLearnMore1 = () => {
        this.props.navigation.navigate('BeerDetails');
    };
    static navigationOption = {
        title: 'BeerList'
    }
render() {
 
return <View style={
    {
        justifyContent: 'flex-start'
    }
}>
         <TouchableOpacity onPress={() =>this.onLearnMore1()}  >
             <CardSection>
                    <View style={styles.thumbnailContainerStyle}> 
                        <Image
                            style={styles.thumbnailStyle}
                            source={require('../assets/bottle.png')} 
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>BeerTag Beertag</Text>
                        <Text style={styles.footerTextStyle}>ABV:6.11</Text>    
                    </View> 
            </CardSection>
        </TouchableOpacity>
            
         <TouchableOpacity>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}> 
                    <Image
                      style={styles.thumbnailStyle}
                      source={require('../assets/bottle2.jpg')} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>"18" imperial IPA 2 </Text> 
                    <Text style={styles.footerTextStyle}>ABV:6.18</Text>  
                </View>
            </CardSection>
         </TouchableOpacity>
         <TouchableOpacity>
            <CardSection>
                    <View style={styles.thumbnailContainerStyle}> 
                        <Image
                            style={styles.thumbnailStyle}
                            source={require('../assets/bottle3.jpg')} 
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                            <Text style={styles.headerTextStyle}>Admiral Stache</Text>
                            <Text style={styles.footerTextStyle}>ABV:7.1</Text>   
                    </View>
             </CardSection>
        </TouchableOpacity>
        <TouchableOpacity>
            <CardSection>
                 <View style={styles.thumbnailContainerStyle}> 
                    <Image
                      style={styles.thumbnailStyle}
                      source={require('../assets/bottle4.jpg')} 
                    />
                 </View>
                 <View style={styles.headerContentStyle}>
                       <Text style={styles.headerTextStyle}>"Alternating Currant" Sour</Text>
                       <Text style={styles.footerTextStyle}>ABV:8.2</Text>   
                 </View>
            </CardSection>
        </TouchableOpacity>
</View>
};
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