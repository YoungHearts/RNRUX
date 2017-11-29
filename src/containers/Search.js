/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Platform,BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {Input,Header} from '../component/GEMUI';

class App extends Component {
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    _usernameJudge = (text) => {
        console.log(text,'onChangeText');
    };
    render() {
        return (
            <View>
                <Header title="yetou"/>
                <Input placeholder="搜索"
                             errorColor={'#ccc'}
                             onChangeText={(text) =>this._usernameJudge(text)}
                             ref={(input) => this._usernameInput = input}
                             textInputRef='textInput'
                             iconName='md-search'
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default connect(state => ({}), dispatch => ({}))(App);

