import React from 'react'
import Native from 'react-native'
import {Card,CardItem,Body,Text} from 'native-base';

const css = Native.StyleSheet.create({
    cards:{
        backgroundColor:'#d500f9',
        borderRadius:10,
        marginLeft:25,
        marginRight:25,
        marginTop:25,
        marginBottom:11,
        padding:10
    },
    text:{
        color:'white',
    }
})

class RiwayatCard extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Card style={css.cards}>
                    <Body>
                        <Text style={css.text}>Transaction ID : {this.props.transactionId}</Text>
                        <Text style={css.text}>Date : {this.props.transactionDate}</Text>
                        <Text style={css.text}>Type : {this.props.type}</Text>
                        <Text style={css.text}>From : {this.props.from}</Text>
                        {
                            this.props.to ? (<Text style={css.text}>To : {this.props.to}</Text>):(<></>)
                        }
                        <Text style={css.text}>Amount : {this.props.amount}</Text>
                        <Text style={css.text}>Description : {this.props.description}</Text>
                    </Body>
            </Card>
        );
    }
}
export default RiwayatCard
