'use strict';

import React from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
}from 'react-native';

import Swiper from 'react-native-swiper';
import styles from '../../Styles/MainADR';

class Swipers extends React.Component{
    render() {
    return (
        <Swiper height={120} style={styles.wrapper}

        >
            <View style={styles.slide1}>
                <Image style={styles.l_img}
                       source={require('../../image/lun_03.png')}
                />
            </View>
            <View style={styles.slide1}>
                <Image style={styles.l_img}
                       source={require('../../image/lun2_03.png')}
                />
            </View>
            <View style={styles.slide1}>
                <Image style={styles.l_img}
                       source={require('../../image/lun3_03.png')}
                />
            </View>
        </Swiper>
    )
}
}

export {Swipers as default}