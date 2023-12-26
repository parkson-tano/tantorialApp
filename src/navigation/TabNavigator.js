import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import Home from '../screens/home/Home';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={AuthStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color="black" size={35} />
                    ),
                }}
            />
            <Tab.Screen name="Lesson" component={Home}
                options={{
                    tabBarLabel: 'Lesson',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color="black" size={35} />
                    ),
                }}
            />
            <Tab.Screen name="Feed" component={Home}
                options={{
                    tabBarLabel: 'Create a Learning Request',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus" color="black" size={35} />
                    ),
                }}
            />
            <Tab.Screen name="Message" component={Home}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color="black" size={35} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Home}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color="black" size={35} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;