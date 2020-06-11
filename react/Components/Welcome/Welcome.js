import React from 'react';
import Native from 'react-native'
import {Card,CardItem,Body,Content,Container,Text} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const css = Native.StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: '100',
        color: Colors.black,
        margin:30,
        textAlign:'center'
    }
})

class Welcome extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
                        <Text style={css.title}>Welcome {this.props.name}</Text>
        )
    }
}
export default Welcome;
