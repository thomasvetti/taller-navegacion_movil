import * as React from 'react';
import { Button, View, Text,ScrollView } from 'react-native';

export default function ImageScreen({navigation}) {
    return (
       
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}> 
            <Text style={styles.estilo}>Esta es la ImageScreen </Text>
            </ScrollView>
        </View>
        
)
        
}


const styles = ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollViewContent: {
        flex: 1,
        justifyContent: 'center', // Esto alinea el contenido del ScrollView verticalmente
        alignItems: 'center',
    },
    estilo: {
        fontSize: 20,
        fontWeight : 'bold',
    }
  });