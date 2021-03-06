import React from 'react';
import Native from 'react-native'
import {Text,Container,Content,Form,Input,Item,Button} from 'native-base';
import axios from 'axios'
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
    inputs:{
        height:40,
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
    buttons:{
        backgroundColor:'#f57f17',borderRadius:10,justifyContent:'center',width:100,alignItems:'center',marginLeft:150,marginTop:10,
    },
    itemInput:{marginBottom:10,marginTop:0,borderBottomWidth: 0,marginRight:10,marginLeft:0},
});

class TopUpScreen extends React.Component{

    state={
        nominal:[],
    };

    topUp(num,accNum,password){
        const post = {
            account: accNum,
            balance: num,
            password:password,
        };
        axios.post('http://10.10.11.32:32321/transaction/balance',post,{timeout:500}).then(result=>{
            console.log(result.data)
            alert('Top up '+result.data.message+' success')
        }).catch((error)=>{
            alert('Please Try Again ' + '(Error status: ' + error + ')');
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {result,password} = this.props.route.params;
        return(
            <Container>
                <CustomHeader
                    icons="arrow-circle-left"
                    actions={() => {this.props.navigation.goBack();}}
                    colors='#f57f17'
                />
                <Form>
                        <Text style={css.title}>Masukkan Nominal</Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs}placeholder="" onChangeText={(nominal) => this.setState({nominal:nominal})}/>
                    </Item>
                        <Button style={css.buttons} onPress={()=> this.topUp(this.state.nominal,result.account,password)}>
                            <Text>
                                Submit
                            </Text>
                        </Button>
                </Form>
            </Container>
        );
    }
}
export default TopUpScreen
