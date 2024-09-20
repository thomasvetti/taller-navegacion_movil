import * as React from 'react';
import { Button, View, Text } from 'react-native';


//navigation.navigate esta es la funcion principal para moverse entre las pantallas o rutas que tenemos en el codigo, en este caso esta funcion se va usar en screen1 screen2 screen3
//navigation.replace basicamente nos permite reemplzar una pantalla con otra, de esta forma no se stackea pero no se puede volver a la pantalla anterior

export default function Screen1({navigation }) { // aca desestructuramos la prop navigation para obtener los metodos que incluye este prop y asi poder usarlos dentro del codigo
    return (
        <View style={styles.container}>
            <Text style={styles.estilo}>Esta es la pantalla 1</Text>
            
            <Button 
            title='Ir a Sreen2'
            on onPress={() => navigation.navigate("Screen2")}/>
              <Button 
            title='Ir a Sreen3'
            on onPress={() => navigation.navigate("Screen3")}/>
             <Button 
            title='Ir a Screen2 con parametro'
            onPress={() => navigation.navigate("Screen2", { mensaje: 'Hola desde Screen1' })}/>
             <Button 
            title='Reemplazar Screen1 con Screen2'
             onPress={() => navigation.replace("Screen2")}/>

            <Button 
                title='Loguearse'
                onPress={() => navigation.navigate("Screen3", { logueado: true })} 
            />

      
            <Button 
                title='No loguearse'
                onPress={() => navigation.navigate("Screen2", { logueado: false })} 
            />
        </View>
)
        
}//s

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
  