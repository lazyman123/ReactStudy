'use strict';

import React from 'react';

import {
    View,
    TouchableHighlight,
}from 'react-native';
import Header_user from './Header_user'
import styles2 from './User_style';

class User extends React.Component{
    render(){
        return(
            <View>
                <Header_user />
                <View style={styles2.user}>
                    {/*<TouchableHighlight
                        onPress
                    >

                    </TouchableHighlight>*/}
                </View>
            </View>
        )
    }
}

export {User as default}