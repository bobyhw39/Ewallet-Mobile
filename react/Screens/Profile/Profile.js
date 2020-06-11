import React from 'react';
import Native from 'react-native';
import {Card, CardItem, Container, Content, Body, Text, Form, Item, Header, Left, Right, Button} from 'native-base';
import axios from 'axios';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';

const css = Native.StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
        marginLeft:15,
        marginRight:15,
    },
    data:{
        marginTop:3,
        marginLeft:15,
        marginRight:15,
        borderColor: '#f50057',
        backgroundColor:'#f50057',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
});

class Profile extends React.Component{

    state={
        datas:{},
    }

    componentDidMount() {
        const {result} = this.props.route.params;
        axios.get('http://10.10.11.32:32321/account/' + result.account,{timeout:500})
            .then(result=>{
                this.setState({
                    datas: result.data,
                });
                console.log(result.data);
            }).catch((error)=>{
            alert(error);
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Container >
                <CustomHeader
                    icons="arrow-circle-left"
                    actions={() => {this.props.navigation.goBack();}}
                    colors="#f50057"
                />
                <Form style={{marginTop: 15}}>
                    <Text style={css.title}>Name</Text>
                    <Text style={css.data}>{this.state.datas.name}</Text>

                    <Text style={css.title}>Account ID</Text>
                    <Text style={css.data}>{this.state.datas.account}</Text>

                    <Text style={css.title}>Your Balance </Text>
                    <Text style={css.data}>{this.state.datas.balance}</Text>

                    <Text style={css.title}>Your Point</Text>
                    <Text style={css.data}>{this.state.datas.point}</Text>
                </Form>
            </Container>
        );
    }
}
export default Profile;
