import React from 'react';
import Native from 'react-native';
import {Text, Container, Content, Form, Input, Item, Button, Card, Left} from 'native-base';
import axios from 'axios';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const css = Native.StyleSheet.create({
    title:{
        fontSize: 27,
        fontWeight: '600',
        color: Colors.black,
        alignItems:'center',
        textAlign: "center",
    },
    cards:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft:50,marginRight:50,padding:25,marginTop:100
    }
})
class LoginScreen extends React.Component{
    state={
        password:[],
        account:[],
        loading:false,
    };
    login(accNum,password){
        const post = {
            account:accNum,
            password:password,
        }
         axios.post('http://10.10.11.32:32321/account/login',post,{timeout:500})
            .then(result=>{
                this.setState({loading:true})
                new Promise(resolve => setTimeout(resolve, 1000)).then(() =>{
                    if(result.data.details="200"){
                        this.setState({loading:false})
                        axios.get('http://10.10.11.32:32321/account/'+accNum,{timeout:500})
                            .then(result=>{
                                this.props.navigation.navigate("HomeScreen",
                                    {result:result.data,password:password})
                            })
                    }
                    }
                );

            }).catch((error)=>{
             this.setState({loading:true})
             new Promise(resolve => setTimeout(resolve, 1000)).then(()=>{
                 this.setState({
                     login:false,
                     loading:false
                 })
                 alert('Account not Found, Please Try Again');
             })
         });
    }

    loading(){
        if(this.state.loading==true) {
            return (
                <Icon
                    size={500}
                    color="white"
                    name="spinner"//'arrow-circle-left'
                />
            )
        }
        else return(
            <Card style={css.cards}>
                <Form>
                    <Text style={css.title}>Input Your Account</Text>
                    <Item style={{marginBottom:45,marginTop:40}}>
                        <Input underlined="true" placeholder="" onChangeText={(accNum) => this.setState({account:accNum})}/>
                    </Item>
                    <Button style={{backgroundColor:"#ae52d4",justifyContent:'center',width:100,alignItems:'center',marginLeft:60}} onPress={()=> this.login(this.state.account)}>
                        <Text>
                            Login
                        </Text>
                    </Button>
                </Form>
            </Card>
        )
     }
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <Container style={{backgroundColor:"#ff7961"}}>
                    <Content>
                        {this.state.loading==true?(
                            <>
                            {/*<Icon style={{justifyContent: 'center',alignItems:'center'}}*/}
                            {/*size={100}*/}
                            {/*color="white"*/}
                            {/*name="spinner"/>*/}
                            </>
                            ) : (
                            <Card style={css.cards}>
                                <Form>
                                    <Text style={css.title}>Input Your Account</Text>
                                    <Item style={{marginBottom:45,marginTop:40}}>
                                        <Input underlined="true" placeholder="Account Number" onChangeText={(accNum) => this.setState({account:accNum})}/>
                                    </Item>
                                    <Item style={{marginBottom:45}}>
                                        <Input underlined="true" placeholder="password" onChangeText={(password) => this.setState({password:password})}/>
                                    </Item>
                                    <Button style={{backgroundColor:"#f50057",justifyContent:'center',width:100,alignItems:'center',marginLeft:60}} onPress={()=> this.login(this.state.account,this.state.password)}>
                                        <Text>
                                            Login
                                        </Text>
                                    </Button>
                                </Form>
                            </Card>
                        )
                        }
                    </Content>
                </Container>
            </React.Fragment>
        );
    }
}
export default LoginScreen;
