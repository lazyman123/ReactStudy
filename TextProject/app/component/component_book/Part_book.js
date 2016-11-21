'use strict';

import React from 'react';

import {
    View,
    Image,
    Text,
}from 'react-native';

import styles from './Book_style';

class Part extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.part_header}>
                    <View><Image style={styles.part_header_img} source={require('../../image/tiao_03.png')}/></View>
                    <Text style={styles.part_header_zi1}>本周热门</Text>
                    <Text style={styles.part_header_zi2}>更多></Text>
                </View>
                <View style={styles.part_content1}>
                    <View style={styles.part_img}>
                        <Image style={styles.part_img} resizeMode={'contain'} source={{uri:'http://rm2.kingreader.com/book/1156589/m/[640]_超级生存.jpg'}} />
                    </View>
                    <View  >
                        <View style={styles.part_c2}>
                           <Text style={styles.part_title}>超级生存</Text>
                            <View><Image style={styles.part_wei} source={require('../../image/shelf_reconmend.png')}/></View>
                        </View>
                        <View style={styles.part_c2}>
                            <Text style={styles.part_type}>异术超能&nbsp;|&nbsp;</Text>
                            <Text style={styles.part_name}>叶天南</Text>
                        </View>
                        <View style={styles.part_c3}>
                            <View>
                                <Image style={styles.dian} source={require('../../image/screen_indictor_on.png')}/>
                            </View>
                            <Text style={styles.tongji}>1.6万</Text>
                            <Text style={styles.ji}>人阅读过</Text>
                            <View>
                                <Image style={styles.dian} source={require('../../image/screen_indictor_on.png')}/>
                            </View>
                            <Text style={styles.tongji}>66.45%</Text>
                            <Text style={styles.ji}>读者留存</Text>
                        </View>
                    <Text style={styles.part_c4}>读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存</Text>
                    </View>

                </View>
                <View style={styles.xlist}>
                    <View style={styles.part_c2}>
                        <Text style={styles.part_title}>超级生存</Text>
                        <View style={styles.part_list}>
                            <Text style={styles.part_type}>异术超能&nbsp;|&nbsp;</Text>
                            <Text style={styles.part_name}>叶天南</Text>
                        </View>
                    </View>
                    <Text style={styles.part_c5}>读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存</Text>
                </View>
                <View style={styles.xlist}>
                    <View style={styles.part_c2}>
                        <Text style={styles.part_title}>超级生存</Text>
                        <View style={styles.part_list}>
                            <Text style={styles.part_type}>异术超能&nbsp;|&nbsp;</Text>
                            <Text style={styles.part_name}>叶天南</Text>
                        </View>
                    </View>
                    <Text style={styles.part_c5}>读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存</Text>
                </View>
                <View style={styles.xlist}>
                    <View style={styles.part_c2}>
                        <Text style={styles.part_title}>超级生存</Text>
                        <View style={styles.part_list}>
                            <Text style={styles.part_type}>异术超能&nbsp;|&nbsp;</Text>
                            <Text style={styles.part_name}>叶天南</Text>
                        </View>
                    </View>
                    <Text style={styles.part_c5}>读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存读者留存</Text>
                </View>
            </View>
        )
    }
}

export {Part as default}