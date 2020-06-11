import React from 'react'
import Native from 'react-native'
import {Body, Button, Container, Header, Left, Right, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomHeader extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <Header {...this.props} androidStatusBarColor={this.props.colors} style={{backgroundColor:this.props.colors}}>
                <Left>
                    <Icon
                        size={35}
                        color="white"
                        name= {this.props.icons}//'arrow-circle-left'
                        onPress={this.props.actions}/>
                </Left>
                <Body>
                    <Text> </Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text> </Text>
                    </Button>
                </Right>
            </Header>
        );
    }
}
export default CustomHeader;
