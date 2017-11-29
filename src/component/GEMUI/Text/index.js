/**
 * Created by iwangx on 2016/11/3.
 */
import React, {PureComponent, PropTypes} from 'react';

import {
    View,
    Text
} from 'react-native';

class index extends PureComponent {

    constructor(props) {
        super(props)
    }

    static propTypes={
        ...Text.propTypes
    };

    render() {
        let {props} = this;
        let style=iOS?{backgroundColor:"rgba(0,0,0,0)"}:null;
        return (
            <Text
                {...props}
                allowFontScaling={false}
                style={[style,props.style]}
            >{props.children}</Text>
        )
    }
}

export default index
