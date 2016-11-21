'use strict';

import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
}from 'react-native';
import styles from '../../Styles/MainADR';


class Header_user extends React.Component{
    render(){
        return(
            <View style={styles.Th}>
                <Text style={styles.Zi}>
                    用户中心
                </Text>
                <TouchableHighlight style={styles.Touch}>
                    <Text style={styles.Bx}>
                        切换账号
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }

}

export {Header_user as default}
