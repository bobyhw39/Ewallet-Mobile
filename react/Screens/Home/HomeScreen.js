import React from 'react';
import Native from 'react-native'
import {Container, Content, Text, Title, Row, Col, Header, Left, Body, Right} from 'native-base';
import Welcome from '../../Components/Welcome/Welcome';
import Button from '../../Components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';


class HomeScreen extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {result,password} = this.props.route.params;
        return (
                <Container>
                    <Header {...this.props}  >
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
                            <Native.Button title="Keluar" onPress={()=>this.props.navigation.navigate("LoginScreen")}>
                            </Native.Button>
                        </Right>
                    </Header>
                    <Welcome name={result.name}/>
                    <Row style={{marginLeft:30,marginRight:30,marginBottom:-40}}>
                        <Col style={{marginRight:5}}><Button label="Info" colors='#f50057' icon="user-circle" actions={()=>this.props.navigation.navigate("ProfileScreen",{result:result,password:password})}/></Col>
                        <Col style={{marginLeft:5}}><Button label="Transfer"  colors='#1976d2' icon="money-check" actions={()=>this.props.navigation.navigate("TransferScreen",{result:result,password:password})}/></Col>
                    </Row>
                    <Row style={{marginLeft:30,marginRight:30,marginTop:-70}}>
                        <Col style={{marginRight:5}}><Button label="Pulsa" colors='#4caf50'icon="mobile" actions={()=>this.props.navigation.navigate("PulsaScreen",{result:result,password:password})}/></Col>
                        <Col style={{marginLeft:5}}><Button label="Top Up" colors='#f57f17' icon="upload" actions={()=>this.props.navigation.navigate("TopUpScreen",{result:result,password:password})}/></Col>
                    </Row>
                    <Row style={{marginLeft:30,marginRight:30,marginTop:-105}}>
                        <Col style={{marginRight:5}}><Button label="Tukar Poin" colors='#455a64' actions={()=>this.props.navigation.navigate("PoinScreen",{result:result,password:password})} icon="exchange-alt"/></Col>
                        <Col style={{marginLeft:5}}><Button label="Riwayat" colors='#d500f9' actions={()=>this.props.navigation.navigate("RiwayatScreen",{result:result,password:password})} icon="history"/></Col>
                    </Row>
                </Container>
        );
    }
}
export default HomeScreen;
