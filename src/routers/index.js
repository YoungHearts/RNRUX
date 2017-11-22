/**
 * Created by yangj on 2017/11/16.
 */
import React from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';
import { View, Text,Image } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Home from '../containers/Home';
import User from '../containers/User';
import App from '../containers/App';
import Detail from '../containers/Detail';
import Detail111 from '../containers/Detail111';

//安卓端需要加上一個headerRight讓title居中
const headerOptions = {
    headerStyle: { backgroundColor: '#fff' },
    headerTitleStyle: { color: '#333', alignSelf: 'center' },
    headerTintColor: '#999',
    headerBackTitle: null,
    headerRight: <View style={{ width: 24 }}/>
};

const MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header:null,
            tabBarLabel: '主页',
            tabBarIcon: ({ tintColor, focused }) => (
                <Text>🐶</Text>
            ),
        },
    },
    User: {
        screen: User,
        navigationOptions: {
            header:null,
            tabBarLabel: '个人中心',
            tabBarIcon: ({ tintColor, focused }) => (
                <Text>🐔</Text>
            ),
        },
    },
},{lazy:true});

/**
 * 路由配置中心
 */
const Routers = StackNavigator({
    MyTab: {
        screen: MyTab,
    },
    App: { screen: App, navigationOptions: { headerTitle: 'APP', ...headerOptions } },
    Detail: { screen: Detail, navigationOptions: { headerTitle: 'Detail', ...headerOptions} },
    Detail111: { screen: Detail111, navigationOptions: { headerTitle: 'Detail111', ...headerOptions} },
}, {
    headerMode: 'screen',
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
});
export default Routers;





