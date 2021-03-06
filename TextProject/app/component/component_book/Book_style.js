'use strict';

import React from 'react';

import {
    StyleSheet,
    Dimensions,
}from 'react-native'

export default StyleSheet.create({
    lunBao:{
        flexDirection:'row'
    },
    lun:{
        flex:1,
        borderColor:'#eee',
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        height:56,
        justifyContent:'center',
        alignItems:'center',
    },
    lun2:{
        flex:1,
        borderColor:'#e9e9e9',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        height:56,
        justifyContent:'center',
        alignItems:'center',
    },
    n:{
        width:70,
        height:54,
    },
    tio:{
        height:10,
        backgroundColor:'#f2f2f2',
    },
    part_header:{
        height:50,
        paddingTop:8,
        borderBottomWidth:1,
        borderColor:'#f2f2f2',
        flexDirection:'row',
        alignItems:'center',
    },
    part_header_img:{
          width:3,
          height:44,
    },
    part_header_zi1:{
        paddingLeft:24,
        fontSize:20,
    },
    part_header_zi2:{
        color:'orange',
        paddingLeft:190,
        fontSize:14,
    },
    part_content1:{
        height:130,
        paddingTop:10,
        paddingRight:14,
        paddingLeft:14,
        flexDirection:'row',
    },
    part_img:{
        width:74,
        height:116,
        marginRight:10,

    },
    part_title:{
        height:30,
        fontSize:18,
        fontWeight:'bold',
        paddingRight:6,
        paddingTop:10,

    },
    part_wei:{
        marginTop:10,
        borderRadius:4,
        width:44,
        height:20,
    },
    part_type:{
        fontSize:14,

    },
    part_name:{
        color:'#8c9092',
        fontSize:14,
    },
    part_c2:{
        flexDirection:'row',
    },
    part_c3:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingRight:150,
    },
    dian:{
        width:10,
        height:10,
        marginLeft:2,
        marginRight:2,
    },
    tongji:{
        color:'orange',
        fontSize:12,
    },
    ji:{
        fontSize:12,
    },
    part_c4:{
        height:34,
        width:Dimensions.get('window').width-118,
        overflow:'hidden',
        flexDirection:'row',
    },
    part_c5:{
        height:18,
        overflow:'hidden',
        flexDirection:'row',
    },

    mi:{
        overflow:'hidden',
        fontSize:12,
    },
    xlist:{
        borderTopWidth:1,
        borderColor:'#f2f2f2',
        height:80,
        paddingRight:14,
        paddingLeft:14,
    },
    part_list:{
        paddingTop:12,
        flexDirection:'row',
        paddingLeft:10,
        paddingBottom:10,
    },
    part2:{
        height:240,
    },
    tui:{
        height:160,
        padding:10,
    },
    tui_h:{
        flexDirection:'row',
    },
    tui_h_img:{
        flex:1,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    },
    tui_h_img_a:{
        width:160,
        height:60,
    }
})
