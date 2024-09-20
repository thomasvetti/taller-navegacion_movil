import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';//usamoes esta libreria para poder navegar en stack 
import Screen1 from './pantallas/Screen1'; 
import Screen2 from './pantallas/Screen2';
import Screen3 from './pantallas/Screen3';
const Stack = createNativeStackNavigator();
// con createNativeStackNavigator se crea todo lo nesario para usar la navegacion con stack
// const Stack con eso simplemente creamos una variable que guarda el objeto createNativeStackNavigator, con esto conifiguramos las pantallas 
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Screen1'> 
        <Stack.Screen name ="Screen1" component={Screen1}/>
        <Stack.Screen name ="Screen2" component={Screen2}/>
        <Stack.Screen name ="Screen3" component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// el NavigationContainer es el contenedor inicial el cual vamos a usar para organizar todos los elementos los cuales vamos a usar para navegar
// el Stack.Navigator va  actuar como contenedor para las pantallas en stack durante la navegacion 
// el Stack.Screen simplemente define la pantalla que en este caso la llamamos desde la carpeta pantalla 
const styles = ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
