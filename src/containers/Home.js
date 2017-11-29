/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Platform,BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from '../component/Button';
import {Input} from '../component/GEMUI';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const routers = this.props.routes;
        if (routers.length > 1) {
            this.props.navigation.dispatch(NavigationActions.back());
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            //toastShort('再按一次退出应用');
            return true;
        }
    };
    _onPress = () => {
        console.log('点击了Button');
    };
    _usernameJudge = (text) => {
        console.log(text,'onChangeText');
    };
    InputOnFocus = (e) => {
        this.props.navigation.navigate('Search')
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home主页(按钮看流程)
                </Text>
                <TouchableOpacity style={styles.button} onPress={this._toDetail.bind(this)}>
                    <Text style={styles.instructions}>
                        To User Screen
                    </Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>
                    搜索页
                </Text>
                <Input placeholder="私募管理人名称"
                             errorColor={'#ccc'}
                             onChangeText={(text) =>this._usernameJudge(text)}
                             onFocus={(e) =>this.InputOnFocus(e)}
                             ref={(input) => this._usernameInput = input}
                             textInputRef='textInput'
                             iconName='md-search'
                />
                <Button
                    backgroundColor={COLORS.appColor}
                    raised
                    borderRadius={5}
                    title='按钮组件!'
                    animationType="bounceInLeft"
                    onPress = {this._onPress}
                />



            </View>
        );
    }

    _toDetail() {
        this.props.navigation.navigate('User')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
    },
    button: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});

export default connect(state => ({}), dispatch => ({}))(Home);

