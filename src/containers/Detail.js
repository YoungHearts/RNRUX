/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


class Detail extends Component {
    componentDidMount() {
    }
    render() {
        const { routes } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Detail Screen!
                </Text>
                <Text style={styles.welcome}>
                    Here are current route stack list:
                </Text>
                {routes.map((router, i) => {
                    return <Text key={i}>routeName:{router.routeName} ---- routeKey:{router.key}</Text>
                })}

                <TouchableOpacity style={styles.button} onPress={this._toDetail.bind(this)}>
                    <Text style={styles.instructions}>
                        To Detail11
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * Now you can go back to app screen with the route key!
     * @private
     */
    _toDetail() {
        this.props.navigation.navigate('Detail111')
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
export default connect(state => ({
    routes: state.nav.routes
}), dispatch => ({}))(Detail);

