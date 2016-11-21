'use strict';

import React from 'react';
import Header from './Header';
import Styles from '../../Styles/MainADR';

import {
    Text,
    View,
    Image,
}from 'react-native';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={Styles.container}>
                <Header />
                <View style={Styles.book_Bao}>
                    <View style={Styles.book_item}>
                        <View>
                            <Image style={Styles.Pic}
                                   source={{uri:'http://rm2.kingreader.com/book/1153373/m/[640]_九阴炼尸诀.jpg'}}
                            />
                        </View>
                        <View>
                            <Text style={Styles.book_text}>
                                九阴炼尸诀
                            </Text>
                            <Text>
                                尚未阅读
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.book_item}>
                        <View>
                            <Image style={Styles.Pic}
                                   source={{uri:'http://rm2.kingreader.com/book/1156578/m/[640]_超级军工科学家.jpg'}}
                            />
                        </View>
                        <View>
                            <Text style={Styles.book_text}>
                                超级军工科学家
                            </Text>
                            <Text>
                                尚未阅读
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.book_item}>
                        <View>
                            <Image style={Styles.Pic}
                                   source={{uri:'http://rm2.kingreader.com/book/1148985/m/[640]_傻王毒妃：魔女也倾城.jpg'}}
                            />
                        </View>
                        <View>
                            <Text style={Styles.book_text}>
                                傻王毒妃：魔女也倾城
                            </Text>
                            <Text>
                                尚未阅读
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
