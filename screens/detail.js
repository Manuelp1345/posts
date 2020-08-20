import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
    const title = navigation.getParam("title")
    const body = navigation.getParam("body")
    const name = navigation.getParam("name")

    return (
    <View style={styles.container}>
        <Text style={styles.name} >Por: {name}</Text>
        <Text style={styles.body} >{body}</Text>
    </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    },
    title:{
        padding:15,
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        height:50,
        borderBottomColor:"#bbb",
        borderBottomWidth:1,
        alignSelf: "stretch"
    },
    name:{
        fontWeight:"bold",
        paddingHorizontal: 15,
        fontSize:15,
        padding:15
    },
    body:{
        paddingHorizontal:25,
        justifyContent:"center",
        fontSize:20

    }
});  