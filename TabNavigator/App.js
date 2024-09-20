import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // esto es para las iconos
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ImageScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'ImageScreen') {
              iconName = focused ? 'image' : 'image-outline';
            } else if (route.name === 'OptionsScreen') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'QuizScreen') {
              iconName = focused ? 'help-circle' : 'help-circle-outline';
            }
            //en esta parte agregamos los iconos, simplemente es buscar el que se necesite en un directorio de react-native-vector-icons/
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        
          tabBarStyle: {
            paddingBottom: 10, // Espacio en la parte inferior
            paddingTop: 10, // Espacio en la parte superior
            height: 60, // Ajusta la altura total
            justifyContent: 'space-between', // Espacio entre elementos
          },
          tabBarActiveTintColor: '#817E9F',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="ImageScreen" component={ImageScreen} />
        <Tab.Screen name="OptionsScreen" component={OptionsScreen} />
        <Tab.Screen name="QuizScreen" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
