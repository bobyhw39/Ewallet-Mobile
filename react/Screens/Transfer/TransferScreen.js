import React from 'react';
import Native from 'react-native';
import {Body, Card, CardItem, Text, Container, Form, Item, Input, Button} from 'native-base';
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
        borderColor: '#1976d2',
        backgroundColor:'#1976d2',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
    inputs:{
        height:40,
        marginTop:3,
        marginLeft:15,
        marginRight:15,
        borderColor: '#1976d2',
        backgroundColor:'#1976d2',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
    buttons:{
        backgroundColor:'#1976d2',borderRadius:10,justifyContent:'center',width:100,alignItems:'center',marginLeft:150,marginTop:10,
    },
    itemInput:{marginBottom:10,marginTop:0,borderBottomWidth: 0,marginRight:10,marginLeft:0},
});

class TransferScreen extends React.Component{

    state={
        nominal:[],
        tos:[],
        description:[],
    };

    transferBalance(){
        const {result,password} = this.props.route.params;
        const post = {
            account:result.account,
            amount:this.state.nominal,
            description:this.state.description,
            password:password,
            to:this.state.tos,
        };
        console.log(post);
        axios.post('http://10.10.11.32:32321/transaction/transfer',post,{timeout:500}).then(result=>{
            console.log(result.data);
            alert(result.data.message);
        }).catch((error)=>{
            console.log(error);
            alert('Please Try Again ' + '(Error status: ' + error + ')');
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {result} = this.props.route.params;
        return (
            <Container>
                <CustomHeader
                    icons="arrow-circle-left"
                    actions={() => {this.props.navigation.goBack();}}
                    colors='#1976d2'
                />
                <Form>
                        <Text style={css.title}>Dari Rekening</Text>
                        <Text style={css.data}>{result.account}</Text>

                        <Text style={css.title}>Ke Rekening</Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs} placeholder="" onChangeText={(tos) => this.setState({tos:tos})}/>
                    </Item>
                        <Text style={css.title}>Nominal</Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs} placeholder="" onChangeText={(nominal) => this.setState({nominal:nominal})}/>
                    </Item>
                        <Text style={css.title}>Description</Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs} placeholder="" onChangeText={(desciption) => this.setState({description:desciption})}/>
                    </Item>
                        <Button style={css.buttons} onPress={()=> this.transferBalance()}>
                            <Text>
                                Submit
                            </Text>
                        </Button>

                </Form>
            </Container>
        );
    }
}
export default TransferScreen;
