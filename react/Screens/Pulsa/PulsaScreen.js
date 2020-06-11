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
        borderColor: '#4caf50',
        backgroundColor:'#4caf50',
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
        borderColor: '#4caf50',
        backgroundColor:'#4caf50',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
    buttons:{
        backgroundColor:'#4caf50',borderRadius:10,justifyContent:'center',width:100,alignItems:'center',marginLeft:150,marginTop:10,
    },
    itemInput:{marginBottom:10,marginTop:0,borderBottomWidth: 0,marginRight:10,marginLeft:0},
});

class PulsaScreen extends React.Component{

    state={
        nominal:[],
        phone:[],
    };

    pulsa(num,accNum,phone,password){
        const post = {
            account: accNum,
            amount: num,
            password:password,
            phonenumber:phone,
        };
        axios.post('http://10.10.11.32:32321/transaction/pulsa',post,{timeout:500}).then(result=>{
            console.log(result.data)
            alert(result.data.message)
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
                    colors='#4caf50'
                />
                <Form>
                        <Text style={css.title}>Masukkan Nominal</Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs} placeholder="" onChangeText={(nominal) => this.setState({nominal:nominal})}/>
                    </Item>
                        <Text style={css.title}>
                            Masukkan No Telp
                        </Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs} placeholder="" onChangeText={(phone) => this.setState({phone:phone})}/>
                    </Item>
                        <Button style={css.buttons} onPress={()=> this.pulsa(this.state.nominal,result.account,password,this.state.phone)}>
                            <Text>
                                Submit
                            </Text>
                        </Button>
                </Form>
            </Container>
        );
    }
}
export default PulsaScreen
