import { FormControl, Text, View } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native";
import InputBox from "../../../../components/Input";
import Colors from "../../../../../constants/color";
import CustomButton from "../../../../components/Button";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-safe-area-context";

const CreateUser = ({route, navigation}) => {
  console.log(route?.params?.backscreen, "route?.params?.backscreen")
  return <SafeAreaView style={styles.page}>       
          <View>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate(route?.params?.backscreen || 'userList')} >
              <Icon name="arrow-back" color={Colors.primary} size={20} />
            </TouchableOpacity>
            <Text textAlign={'center'} style={styles.heading}>{(route?.params?.key === 'edit') ? 'Edit User' : 'Create User'}</Text>
          </View>
          <FormControl mb={6}>
            <InputBox 
              placeholder="Enter Username" 
              type="text"
              // handleChange={(e) =>handleChange(e, 'password')} 
            />
          </FormControl>
          <FormControl mb={6}>
            <InputBox 
              placeholder="Enter Name" 
              type="text"
              // handleChange={(e) =>handleChange(e, 'password')} 
            />
          </FormControl>
          <FormControl mb={6}>
            <InputBox 
              placeholder="Enter Email" 
              type="email"
              // handleChange={(e) =>handleChange(e, 'password')} 
            />
          </FormControl>
          <FormControl mb={6}>
            <InputBox 
              placeholder="Enter Password" 
              type="password"
              // handleChange={(e) =>handleChange(e, 'password')} 
            />
          </FormControl>
          <CustomButton title={'Create'} />
        </SafeAreaView>
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  }, 
  heading: {
    fontSize: 17,
    fontWeight: 600,
    color: Colors.heading,
    marginBottom: 20,
    marginLeft: 5,
    alignSelf: 'center'
  },
  icon: {
    position: 'absolute',
    top: 5
  }
});

export default CreateUser;