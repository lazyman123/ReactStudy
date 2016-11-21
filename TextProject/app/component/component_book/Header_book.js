'use strict';

import React from 'react';

import {
    View,
    Text,
    Image,
}from 'react-native';
import styles from '../../Styles/MainADR';


class Header_book extends React.Component{
    render(){
        return(
            <View style={styles.Th}>
                <Text style={styles.Zi}>
                    开卷书城
                </Text>
                    <Image style={styles.Th_img3}
                           source={require('../../image/icon_menu_item_search_normal.png')}
                    />
            </View>
        )
    }

}

export {Header_book as default}

