'use strict';
import React from 'react';
import {
    View,
    Text,
    Image,
}from 'react-native';

import styles from './Book_style';
import Styles from '../../Styles/MainADR';

class Part2 extends React.Component{
    render(){
        return(
            <View style={styles.part2}>
                <View style={styles.part_header}>
                    <View><Image style={styles.part_header_img} source={require('../../image/tiao_03.png')}/></View>
                    <Text style={styles.part_header_zi1}>包月畅读</Text>
                    <Text style={styles.part_header_zi2}>更多></Text>
                </View>

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

export {Part2 as default}