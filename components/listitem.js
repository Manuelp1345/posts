import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View,Dimensions } from 'react-native';

export default ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
    
}
const styles = StyleSheet.create({
    container: {
    height: 60,
    paddingHorizontal:15,
    justifyContent: 'center',
    borderBottomColor: "#bbb",
    borderBottomWidth:1,
    },
    text:{
        fontSize:18
    }
});  