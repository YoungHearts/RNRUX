/**
 * Created by yangj on 2017/11/16.
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './common/Global'
import createStore from './store/createStore';
import AppWithNavigationState from './AppWithNavigationState';

const store = createStore();
export default class RnNavRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('RnNavReudx', () => RnNavRedux);