import React from 'react';
import Native from 'react-native'
import {Card,CardItem,Body,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Button extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <Native.TouchableOpacity  onPress={this.props.actions}>
                <Card style={{borderRadius:15}}>
                    <CardItem style={{backgroundColor:this.props.colors,borderRadius:15}}>
                        <Body style={{alignItems:"center"}}>
                            <Icon size={75} color="white" name={this.props.icon}/>
                            <Text style={{color:'white'}}>{this.props.label}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Native.TouchableOpacity>
        );
    }
}
export default Button
