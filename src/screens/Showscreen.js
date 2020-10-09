import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {

    const {state} = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View>
            <Text style={styles.title}>Your blog post!</Text>
            <Text style={styles.label}>Your Title:</Text>


            <Text style={styles.input}>{blogPost.title}</Text>
            
            
            <Text style={styles.label}>Your Content:</Text>


            <Text style={styles.input}>{blogPost.content}</Text>

            
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => 
            <TouchableOpacity onPress={() => 
                navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <Feather name="edit" size={25} color="black" marginRight={10}/>        
            </TouchableOpacity>
        
        
    };
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5

    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }
});

export default ShowScreen;