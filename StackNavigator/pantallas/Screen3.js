import React, { useState, useEffect  } from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({route,navigation}) {

    const { mensaje = '', logueado: log_en_parametro } = route.params || {};  // Capturamos el parámetro mensaje
    const [logueado, asignarlogueado] = useState(null);
    useEffect(() => {
      if (log_en_parametro !== undefined) {
          asignarlogueado(log_en_parametro);  // Actualiza el estado basado en el parámetro recibido
      }
  }, [log_en_parametro]);
    return (
        <View style={styles.container}>
            <Text style={styles.estilo}>Esta es la pantalla 3</Text>
            <Text style={styles.estilo}>{mensaje}</Text>  
            {logueado === true && <Text>¡Bienvenido! Has iniciado sesión correctamente.</Text>}
            <Button title='Ir a Sreen2'
            on onPress={() => navigation.navigate("Screen2")}/>
            <Button 
            title='Ir atras'
            on onPress={() => navigation.goBack()}/>
             <Button 
                title="Restablecer y volver a Screen1"
                onPress={() => 
                    navigation.reset({
                        index: 0, // El índice 0 significa que Screen1 será la única pantalla en la pila
                        routes: [{ name: 'Screen1' }], // La nueva pila solo tendrá la pantalla Screen1
                    })
                }
                
            />
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

    estilo: {
        fontSize: 20,
        fontWeight : 'bold',
    }
  });
  