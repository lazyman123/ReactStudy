'use strict';

import React from 'react';

import{
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// import icons from '';

class Base8 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
                style={styles.backgroundImage}>
                    <View style={styles.overlay}>
                        <Text style={styles.overlayHeader}>机器总动员</Text>
                        <Text style={styles.overlaySubheader}>Wall E (2008)</Text>
                    </View>
                </Image>
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
    overlay:{
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center'
    },
    overlayHeader:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        color:'#eae7ff',
        padding:10
    },
    overlaySubheader:{
        fontSize:16,
        fontFamily:'Helvetica Neue',
        color:'#eae7ff',
        padding:10,
        fontWeight:'200',
        paddingTop:0,
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    image:{
        width:100,
        height:100
    }
});

export { Base8 as default}