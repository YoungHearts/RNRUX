/**
 * Created by yangj on 2017/11/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Routers from './routers';

class AppWithNavigationState extends Component {
    render() {
        const { dispatch, nav } = this.props;
        return (
            <Routers navigation={addNavigationHelpers({
                dispatch: dispatch,
                state: nav
            })}
            />
        );
    }
}

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);