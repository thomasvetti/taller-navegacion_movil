import * as React from 'react';
import { Button, View, Text,ScrollView,FlatList, TouchableOpacity } from 'react-native';

export default function OptionsScreen({navigation}) {
    
    const DATA = [ // Esta es la lista de elementos que se va a mostrar, se crea un arreglo y se les da a los objetos un titulo y un ID
        { id: '1', title: ' Primer opción', },
        { id: '2', title: ' Segunda opción', },
        { id: '3', title: ' Tercer opción', },
        { id: '4', title: ' Cuarta opción', },
        { id: '5', title: ' Quinta opción', },
        { id: '6', title: ' Sexta opción', },
      ];
      const renderItem = ({ item }) => ( // esta parte de aca se va a usar para renderizar cada componente de la lista, se reciben los items y se les da un view y un text 
        // los items siempre traen la info de las lista, en este caso de la lista DATA
        // TouchableOpacity esta funcion nos permite envolver otras funciones, como view y text,para que seleccionables
        <TouchableOpacity onPress={() => alert(`Has seleccionado ${item.title}`)}> 
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    return (
        
        <View style={styles.container}>
            
            <Text style={styles.header}>Esta es la OptionsScreen </Text>
            <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent} // Identificador único para cada item
      />
          
        </View>
);
        
};

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    flatListContent: {
        justifyContent: 'center', // Centra los ítems en el eje vertical
         
        flexGrow: 1, // Esto asegura que el contenido de FlatList ocupe el espacio disponible
      },
    estilo: {
        fontSize: 20,
        fontWeight : 'bold',
        
    },
    item: {
    backgroundColor: '#817E9F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    top: 15
  },
};