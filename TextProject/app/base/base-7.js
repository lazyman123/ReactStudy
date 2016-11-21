'use strict';

import React from 'react';

import{
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// import icons from '';

class Base7 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
                style={styles.image}></Image>
                <Text>DDD</Text>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:100,
        height:100
    }
});