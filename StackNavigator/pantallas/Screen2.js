import React, { useState, useEffect  } from 'react';
import { Button, View, Text } from 'react-native';

export default function Screen2({route, navigation}) { // el route contiene info sobre la ruta actual, en este caso screen2, esta informacion incluye los datos que se pasaron cuando se navego a esta, esto nos sirve especialmente para el route.params
    
    const { mensaje = '', logueado: log_en_parametro } = route.params || {};  // en esta linea destructuramos route.params para extraer la informacion de este, en este caso la informacion que traemos desde Screen1
    //si route.params no tiene ninguna propiedad para la propiedad de mensaje el valor de mensaje va a ser '', en caso de que si tenga un valor, simple mente se imprime el texto que se trae de la screen1
    // logueado: log_en_parametro  aca extraemos a logueado y le asignamos una nueva variable, en este caso log_en_parametro
    // el route.params || {} esta con los corchetes por si el valor de este es undefined o null se usa un objeto su vacio, esto meramente para los errores 
    const [logueado, asignarlogueado] = useState(null);
    useEffect(() => {
      if (log_en_parametro !== undefined) {
          asignarlogueado(log_en_parametro);  // Actualiza el estado basado en el parámetro recibido
      }
  }, [log_en_parametro]);
    return (
        <View style={styles.container}>
            <Text style={styles.estilo}>Esta es la pantalla 2</Text>
            <Text style={styles.estilo}>{mensaje}</Text>  
            {logueado === false && <Text>No tienes acceso. Por favor, inicia sesión.</Text>}
            
            <Button 
                title="Loguear"
                onPress={() => navigation.navigate("Screen3", { logueado: true })}   />
          
          
           
              <Button 
            title='Ir a Sreen3'
            on onPress={() => navigation.navigate("Screen3")}/>
            <Button 
            title='Ir atras'
            on onPress={() => navigation.goBack()}/>
             <Button 
            title='Ir a Screen3 con parametro'
            onPress={() => navigation.navigate("Screen3", { mensaje: 'Hola desde Screen2' })}/>
           

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
  