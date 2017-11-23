/**
 * Created by iwangx on 2017/2/27.
 * @新的header头部,只有简单的一些参数
 */


import React, {PureComponent,PropTypes} from 'react';

import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Image
} from 'react-native';

import color from "../../Colors"

import Button from "../Button/Button"
import Text from "../Text"

import leftIcon from "../images/Header/left.png"

class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.router=wesai.getRouter();
    }

    static height=46;

    static propTypes={
        //title,默认为空
        title:PropTypes.string,
        //是否显示左边的回退,默认true
        isLeft:PropTypes.bool,
        //left按钮点击回调,如果有回调就没有pop
        leftPress:PropTypes.func,
        //header里面的自定义内容,如果不想用默认的字的话可以自己传个element进来,
        headerCenter:PropTypes.element,
        //头部右边的控件
        headerRight:PropTypes.element
    };

    static defaultProps={
        title:"",
        isLeft:true
    };

    leftPress(){
        let {props} = this;
        if(props.leftPress){
            props.leftPress();
        }else{
            this.router.pop();
        }
    }

    render() {
        let {props} = this;
        return (
            <View>
                {isIos && <View style={{height:20}} />}
                <View style={[headerStyle.header]}>
                    {props.headerCenter?
                        <View style={[headerStyle.headerChildren]}>
                            {props.headerCenter}
                        </View>:
                        <View style={[headerStyle.headerTextView]}>
                            <Text style={headerStyle.headerText}>{props.title}</Text>
                        </View>
                    }
                    {props.isLeft&&<Button activeOpacity={0.5} onPress={()=>{this.leftPress()}} style={headerStyle.leftReturn}>
                        <Image resizeMode="cover" style={headerStyle.leftImage} source={leftIcon} />
                    </Button>}
                    {props.headerRight && <View style={headerStyle.rightStyle}>
                        {props.headerRight}
                    </View>}
                </View>
            </View>
        )
    }
}

const headerStyle=StyleSheet.create({
    header:{
        height:Header.height
    },
    headerTextView:{
        position:"absolute",
        right:0,
        left:0,
        top:0,
        height:Header.height,
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        color:"#fff",
        fontSize:18,
        backgroundColor:"rgba(0,0,0,0)"
    },
    headerChildren:{

    },
    leftReturn:{
        height:Header.height ,
        position:"absolute",
        left:0,
        top:0,
        paddingHorizontal:19
    },
    leftImage:{
        height:32/2,
        width:20/2,
    },
    rightStyle:{
        height:Header.height,
        position:"absolute",
        right:0,
        top:0,
        justifyContent:"center",
    }
});

export default Header
