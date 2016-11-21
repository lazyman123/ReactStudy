'use strict';

import React from 'react-native';
let { StyleSheet ,Dimensions} = React;

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6,
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 6,
  },
  redText: {
    color: '#db2828',
    fontSize: 15,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  },
  image: {
    width: 99,
    height: 138,
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  movieListContainer: {
    flex: 1,
    marginTop: 64,
  },
  tabBar: {
    height: 44,
    backgroundColor: '#f7f7f7',
    borderTopWidth:1,
    borderStyle:'solid',
    borderTopColor:'#ddd',
  },
  tabBarBox: {
    flex: 1,
    flexDirection: 'row'
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImageLight: {
    width: 40,
    height: 40,
    tintColor: 'orange',
    opacity:0.8,
  },
  iconImageDark: {
    width: 40,
    height: 40,
    tintColor: 'orange',
    opacity:0.8,
  },
  tabBarThumb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Th:{
      height:44,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#f7f7f7',
      flexDirection:'row',
      borderBottomWidth:1,
      borderStyle:'solid',
      borderBottomColor:'#ddd',
},
  Zi:{
    color:'orange',
    paddingLeft:130,
    fontSize:16,
    fontWeight:'bold',
  },
  Th_img1:{
    width:26,
    height:26,
},
  Th_img2:{
    width:26,
    height:26,
    marginLeft:8,
  },
  Th_img3:{
    width:26,
    height:26,
    marginLeft:116,
    tintColor:'orange',
  },
  Th_r:{
    paddingLeft:130,
    width:70,
    height:44,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  Pic:{
    width:100,
    height:130,
    shadowColor:'#eee',
  },
  Bx:{
    color:'orange',
    fontSize:16,
  },
  Touch:{
    paddingLeft:80,
  },
  book_Bao:{
    flexDirection:'row',
  },
  book_item:{
    paddingTop:16,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  book_text:{
    fontSize:14,
    width:100,
    height:20,
    fontFamily:'Times New Roman,Georgia,Serif',
    overflow:'hidden',

  },

  wrapper: {
  },
  slide1: {
    flex: 1,
    padding:5,
    justifyContent: 'center',
    alignItems:'center',
    height:140,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height:140,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height:140,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
 l_img:{
    width:Dimensions.get('window').width-20,
    height:120,
  }
});
