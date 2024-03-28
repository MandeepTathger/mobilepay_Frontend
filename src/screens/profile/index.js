import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "./components/ProfileScreen";
import UpdateProfile from "./components/UpdateProfile";

const Stack = createNativeStackNavigator();

const Profile = () => {
  return <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen
            name="profileScreen"
            component={ProfileScreen}
          />
          <Stack.Screen
            name="updateProfile"
            component={UpdateProfile}
          />
        </Stack.Navigator>
}

export default Profile;