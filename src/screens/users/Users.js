import UserList from "./components/UserList";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateUser from "./components/CreateUser";

const Stack = createNativeStackNavigator();

const Users = () => {
  return <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen
            name="userList"
            component={UserList}
          />
          <Stack.Screen
            name="createUser"
            component={CreateUser}
          />
        </Stack.Navigator>
}

export default Users;