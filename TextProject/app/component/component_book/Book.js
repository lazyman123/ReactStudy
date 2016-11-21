
'use strict';

import React from 'react';

import {
    ScrollView,
    View,
    Image,
}from 'react-native';
import Header_book from './Header_book';
import Swiper from './Swiper';
import styles2 from './Book_style';
import Part from './Part_book';
import Part2 from './Part_book2';


class Book extends React.Component{
    render(){
        return(
            <View>
                <Header_book/>
                <ScrollView>
                <Swiper/>
                <View style={styles2.tio}></View>
                <View style={styles2.lunBao}>
                    <View style={styles2.lun}>
                        <Image style={styles2.n}
                               source={require('../../image/g1_02.png')}
                        />
                    </View>
                    <View style={styles2.lun}>
                        <Image style={styles2.n}
                            source={require('../../image/g2_03.png')}
                        />
                    </View>
                    <View style={styles2.lun}>
                        <Image style={styles2.n}
                            source={require('../../image/g3_03.png')}
                        />
                    </View>
                    <View style={styles2.lun}>
                    <Image style={styles2.n}
                        source={require('../../image/g4_03.png')}
                    />
                </View>
                    <View style={styles2.lun}>
                    <Image style={styles2.n}
                        source={require('../../image/g5_03.png')}
                    />
                </View>


                </View>
                <View style={styles2.lunBao}>
                    <View style={styles2.lun2}>
                        <Image style={styles2.n}
                               source={require('../../image/g6_02.png')}
                        />
                    </View>
                    <View style={styles2.lun2}>
                        <Image style={styles2.n}
                               source={require('../../image/g7_03.png')}
                        />
                    </View>
                    <View style={styles2.lun2}>
                        <Image style={styles2.n}
                               source={require('../../image/g8_03.png')}
                        />
                    </View>
                    <View style={styles2.lun2}>
                        <Image style={styles2.n}
                               source={require('../../image/g9_03.png')}
                        />
                    </View>
                    <View style={styles2.lun2}>
                        <Image style={styles2.n}
                               source={require('../../image/g10_03.png')}
                        />
                    </View>
                </View>
                <View style={styles2.tio}></View>
                    <View style={styles2.tui}>
                        <View style={styles2.tui_h}>
                            <View style={styles2.tui_h_img}>
                                <Image style={styles2.tui_h_img_a}
                                       source={require('../../image/jian_03.png')}
                                       resizeMode={'contain'}
                                />
                            </View>
                            <View style={styles2.tui_h_img}>
                                <Image style={styles2.tui_h_img_a}
                                       source={require('../../image/jian2_03.png')}
                                       resizeMode={'contain'}
                                />
                            </View>
                        </View>
                        <View style={styles2.tui_h}>
                            <View style={styles2.tui_h_img}>
                                <Image style={styles2.tui_h_img_a}
                                       source={require('../../image/jian3_03.png')}
                                       resizeMode={'contain'}
                                />
                            </View>
                            <View style={styles2.tui_h_img}>
                                <Image style={styles2.tui_h_img_a}
                                       source={require('../../image/jian4_03.png')}
                                       resizeMode={'contain'}
                                />
                            </View>
                        </View>
                    </View>
                <View style={styles2.tio}></View>
                <Part/>
                <View style={styles2.tio}></View>
                <Part2/>
                <View style={styles2.tio}></View>
                </ScrollView>
            </View>
        )
    }
}

export {Book as default}