/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    StatusBar,
} from 'react-native';

import Home from './app/component/component_home/Home.js';

import Book from './app/component/component_book/Book';
import User from './app/component/component_user/User';
import styles from './app/Styles/MainADR';
import icons from './app/Assets/icon';
import Header from './app/component/component_home/Header';


export default class TextProject extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      tabIndex  :0
    };
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator}  />;
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    const routes=[
      {name:'Home',component:Home},
      {name:'Book',component:Book},
      {name:'User',component:User}
    ];

    const tabBars=[
      {title:'书架',imgSrcLight:icons.books,imgSrcDark:icons.book},
      {title:'书城',imgSrcLight:icons.homes,imgSrcDark:icons.home},
      {title:'用户',imgSrcLight:icons.users,imgSrcDark:icons.user}
    ];
    let tabBarList=tabBars.map((item,index)=>{
      return(
          <View key={index} style={styles.tabBarItem}>
            <TouchableHighlight
                onPress={(route)=>{
                  this.nav.replace(routes[index]);
                }}
                key={index}
            >
                <View style={styles.tabBarThumb}>
                  <Image style={this.state.tabIndex===index?styles.iconImageLight:styles.iconImageDark} source={{uri: this.state.tabIndex === index ? item.imgSrcLight : item.imgSrcDark}}></Image>
                </View>
            </TouchableHighlight>
          </View>
      )
    })
    return (
          <Navigator
            initialRoute={routes[1]}
            configureScene={this.configureScene}
            renderScene={this.renderScene}
            ref={(navigator)=>{
                this.nav=navigator;
            }}
            onWillFocus = {(nextRoute) => {
              if(nextRoute != routes[this.state.tabIndex]){
                this.setState({
                  tabIndex: routes.indexOf(nextRoute)
                })
              }
            }}
            navigationBar = {
              <View style={styles.tabBar}>
                <View style={styles.tabBarBox}>
                  {tabBarList}
                </View>
              </View>
            }
          />
    );
  }
}

AppRegistry.registerComponent('TextProject', () => TextProject);
