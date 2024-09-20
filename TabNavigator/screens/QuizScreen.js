import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function QuizScreen({navigation}) {

     // aca definimos las preguntas y las opciones, asi como creamos la lista en en options la creamos para este cuestionario, la diferencia es que va a tener 3 objetos
     // este contiene el identificador de la pregunta, el texto que se muestra al usuario y las posibles respuestas
  const preguntas = [
    {
      id: '1',
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
    },
    {
      id: '2',
      pregunta: '¿Cuál es tu animal favorito?',
      opciones: ['Perro', 'Gato', 'Pájaro', 'Pez'],
    },
    {
      id: '3',
      pregunta: '¿Qué estación del año prefieres?',
      opciones: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    },
  ];

  // aca definimos el estado de las preguntas con el usestate, al ser 3 objetos se tiene que definir 3 estados, esto luego nos va a servir para imprimir la respuestas finales
  // todas se les establece el null hasta que el usuario responda  
  const [respuestas, asignarRespuestas] = useState({
    1: null,  // respuesta para la pregunta 1
    2: null,  // respuesta para la pregunta 2
    3: null,  // respuesta para la pregunta 3
  });

  // aca definimos la seleccion de la opcion por parte del usuario, esto cuenta con dos parametros preguntaId= es el identificador de la pregunta opcion= pos la opcion seleccionada por el usuario 
  // usamos el asignarRespuestas que actualiza el estado de la anterior funcion cuando el usuario selecciona un pregunta
  // como lo hace, la pregunta ID trae el estado actual que seria null, una vez el usuario selecciona una opcion, la opcion se actualiza y actualiza el estado respuestas
  // si el usuario responde la opcion con el ID 1, se actualiza la respuestas 1
  const seleccionRespuesta = (preguntaId, opcion) => {
    asignarRespuestas({
      ...respuestas,
      [preguntaId]: opcion,
    });
  };

  return (
    <ScrollView > 
    <View style={styles.contenedor}>
      <Text style={styles.header}>Cuestionario</Text>
      
   
      {preguntas.map((q) => (
        <View key={q.id} style={styles.preguntacontenedor}>
          <Text style={styles.pregunta}>{q.pregunta}</Text>
          
         
          {q.opciones.map((opcion) => (
            <TouchableOpacity
              key={opcion}
              style={[
                styles.opcionButton,
                respuestas[q.id] === opcion && styles.selectedopcion,  // Estilo para la opción seleccionada
              ]}
              onPress={() => seleccionRespuesta(q.id, opcion)}
            >
              <Text style={styles.opcionText}>{opcion}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      
    
      <Text style={styles.result}>Respuestas seleccionadas:</Text>
      <Text>{`Pregunta 1: ${respuestas[1] || 'Sin respuesta'}`}</Text>
      <Text>{`Pregunta 2: ${respuestas[2] || 'Sin respuesta'}`}</Text>
      <Text>{`Pregunta 3: ${respuestas[3] || 'Sin respuesta'}`}</Text>
    </View>
    </ScrollView>
  );
  
}

const styles = {
    contenedor: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    preguntacontenedor: {
      marginBottom: 30,
    },
    pregunta: {
      fontSize: 18,
      marginBottom: 10,
    },
    opcionButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 5,
      backgroundColor: '#f9f9f9',
    },
    selectedopcion: {
      backgroundColor: '#cceeff',  // Cambiar color si está seleccionada
    },
    opcionText: {
      fontSize: 16,
    },
    result: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    scrollViewContent: {
        flex: 1,
        justifyContent: 'center', // Esto alinea el contenido del ScrollView verticalmente
        alignItems: 'center',
    },
  };