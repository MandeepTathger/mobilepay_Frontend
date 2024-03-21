import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../homeScreen';
import Users from '../users';
// import Icon from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';


// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const Tab = createBottomTabNavigator();

const MainHomeScreen = ({navigation}) => {
  return <Tab.Navigator 
          screenOptions={{ 
            tabBarShowLabel: false,
          }}
        >
					<Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              // tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size }) => (
                <FeatherIcon name="home" color={focused ? "#0891b2": color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={HomeScreen} 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon name="user" color={focused ? "#0891b2": color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Users" 
            component={Users} 
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <FeatherIcon name="list" color={focused ? "#0891b2": color} size={size} />
              ),
            }}
          />
					{/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
				</Tab.Navigator>
}

export default MainHomeScreen;