import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
const styles = {
    containerStyle: {
        // alignItems: 'center',
        // justifyContent: 'center',
        borderBottomWidth: 1,
        padding: 5,
        // height: 80,
        backgroundColor: '#fff',
        justifycontent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
};

export { CardSection };
