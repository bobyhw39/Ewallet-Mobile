import React from 'react';
import Native from 'react-native';
import axios from 'axios';
import {Body, Button, Card, CardItem, Container, Form, Input, Item, Text} from 'native-base';
import RiwayatCard from './RiwayatCard/RiwayatCard';
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
        borderColor: '#d500f9',
        backgroundColor:'#d500f9',
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
        borderColor: '#d500f9',
        backgroundColor:'#d500f9',
        color:'white',
        borderWidth:1,
        borderRadius:10,
        padding:5,
    },
    buttons:{
        backgroundColor:'#d500f9',borderRadius:10,justifyContent:'center',width:100,alignItems:'center',marginLeft:150,marginTop:10,
    },
    itemInput:{marginBottom:10,marginTop:0,borderBottomWidth: 0,marginRight:10,marginLeft:0},
});


class RiwayatScreen extends React.Component{
    state={
        date:[],
        datas:[]
    }

    getTransaction(date) {
        const {result} = this.props.route.params;
        axios.get('http://10.10.11.32:32321/transaction/search?account=' + result.account+'&transactionDate='+date,{timeout:500})
            .then(result=>{
                console.log(result.data)
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
            <Container>
                <CustomHeader
                    icons="arrow-circle-left"
                    actions={() => {this.props.navigation.goBack();}}
                    colors='#d500f9'
                />
                <Form>
                    <Text style={css.title}>Rekam Transaksi</Text>
                    <Item style={css.itemInput}>
                        <Input style={css.inputs} placeholder="Masukkan Tanggal" onChangeText={(date) => this.setState({date:date})}/>
                    </Item>

                        <Button style={css.buttons} onPress={()=> this.getTransaction(this.state.date)}>
                            <Text>
                                Submit
                            </Text>
                        </Button>

                </Form>
                <Native.ScrollView>
                    {this.state.datas.map(result=>(
                            <RiwayatCard
                                key={result.transactionId}
                                transactionId={result.transactionId}
                                transactionDate={result.transactionDate}
                                type={result.type}
                                from={result.from}
                                to={result.to}
                                amount={result.amount}
                                description={result.description}
                            />
                        )
                    )}
                </Native.ScrollView>
            </Container>
        );
    }
}
export default RiwayatScreen
