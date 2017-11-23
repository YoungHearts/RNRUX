/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Platform,BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home主页主页打算打算大是
                </Text>
                <TouchableOpacity style={styles.button} onPress={this._toDetail.bind(this)}>
                    <Text style={styles.instructions}>
                        To User Screen
                    </Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>
                    去app
                </Text>
                <TouchableOpacity style={styles.button} onPress={this._toApp.bind(this)}>
                    <Text style={styles.instructions}>
                        To App Screen
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }

    _toDetail() {
        this.props.navigation.navigate('User')
    }
    _toApp() {
        this.props.navigation.navigate('App')
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

