'use strict';

import React from 'react';

import {
    View,
    Text,
    Image,
}from 'react-native';
import styles from '../../Styles/MainADR';


class Header extends React.Component{
    render(){
        return(
            <View style={styles.Th}>
                <Text style={styles.Zi}>
                   书架
                </Text>
                <View style={styles.Th_r}>
                    <Image
                        style={styles.Th_img1}
                        source={require('../../image/sign_in.png')}
                    />
                    <Image
                        style={styles.Th_img2}
                        source={require('../../image/sangang.png')}
                    />
                </View>
            </View>
        )
    }

}

export {Header as default}