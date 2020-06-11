import React from 'react';
import Native from 'react-native'
import {Card, CardItem, Container, Content, Body, Text, Button, Item,Row, Form} from 'native-base';
import axios from 'axios';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';

const css = Native.StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
        marginLeft:15,
        marginRight:15,
        marginTop:10,
    },
    data:{
        height:40,
        paddingTop:9,
        marginTop:3,
        marginLeft:15,
        marginRight:15,
        borderColor: '#f57f17',
        backgroundColor:'#f57f17',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
    texts:{
        height:40,
        paddingTop:9,
        marginTop:3,
        marginLeft:15,
        marginRight:15,
        padding:5,
    },
    inputs:{
        height:40,
        marginTop:3,
        marginLeft:15,
        marginRight:15,
        borderColor: '#455a64',
        backgroundColor:'#455a64',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
    buttons:{
        backgroundColor:'#455a64',borderRadius:10,justifyContent:'center',width:100,alignItems:'center',marginLeft:100,marginTop:10,
    },
    buttons2:{
        backgroundColor:'#455a64',borderRadius:10,justifyContent:'center',width:100,alignItems:'center',marginLeft:10,marginTop:10,
    },
    itemInput:{marginBottom:10,marginTop:0,borderBottomWidth: 0,marginRight:10,marginLeft:0},
});


class PoinScreen extends React.Component{

    state={
        datas:[],
    }

    componentDidMount() {
        const {result} = this.props.route.params;
        axios.get('http://10.10.11.32:32321/account/' + result.account)
            .then(result=>{
                this.setState({
                    datas: result.data,
                });
                console.log(result.data);
            }).catch((error)=>{
            alert(error);
        });
    }

    poin(accNum,password){
        const post = {
            account: accNum,
            password: password,
        };
        axios.post('http://10.10.11.32:32321/transaction/point',post ,{timeout:500}).then(result=>{
            console.log(result.data)
            alert( result.data.message)
            this.props.navigation.goBack()
        }).catch((error)=>{
            alert('Please Try Again ' + '(Error status: ' + error + ')');
        });
    }

    checkPoint(){
        const {result,password} = this.props.route.params;
        if(this.state.datas.point==0){
            return(<Text style={css.texts}>Dapatkan poin lebih banyak lagi</Text>)
        } else{
            return(
                <>

                    <Text style={css.texts}>Yakin ingin menukar poin ke balance?</Text>
                    <Row>
                        <Button style={css.buttons} onPress={()=> this.poin(result.account,password)}>
                            <Text>Yes</Text>
                        </Button>
                        <Text>&nbsp;</Text>
                        <Button style={css.buttons2} onPress={()=> this.props.navigation.goBack()}>
                            <Text>No</Text>
                        </Button>
                    </Row>
                </>
            )
        }
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {result} = this.props.route.params;
        return (
            <Container>
                <CustomHeader
                    icons="arrow-circle-left"
                    actions={() => {this.props.navigation.goBack();}}
                    colors='#455a64'
                />
                <Form>
                        <Text style={css.title}>Your Point {this.state.datas.point}</Text>
                        {this.checkPoint()}
                </Form>
            </Container>
        );
    }
}
export default PoinScreen;
