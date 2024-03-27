import { FormControl, Text, View, useToast } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native";
import InputBox from "../../../../components/Input";
import Colors from "../../../../../constants/color";
import CustomButton from "../../../../components/Button";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createUser, updateUser } from "../../../../../services/userServices";
import { useSelector } from "react-redux";

const CreateUser = ({route, navigation}) => {

  const currentUser = route?.params?.user
  const [data, setData] = useState({
    userName: currentUser?.userName || '',
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    password: ''
  })
  const [errors, setErrors] = useState({});
  const userInfo = useSelector(state => state.user.userInfo) 
  const toast = useToast();

  const handleChange = (val, key) => {
    setData({...data, [key]: val})
  }

  console.log(route?.params?.user, "route?.params?.key>>")

  const handleSubmit = async() => {
    
    if(currentUser){
      if(data.userName === ''){
        setErrors({userName: 'Please fill this field'})
        return
      }
      if(currentUser._id !== userInfo.id){
        data.parentId = userInfo.id
      }
      try{
        const res = await updateUser(currentUser._id, data)
        if(res){
          toast.show({
            description: 'User updated successfully',
            placement: 'top'
          })
          navigation.navigate('userList')
        } 
      } catch(err){
        toast.show({
          description: err,
          placement: 'top',
          duration: 2000
        })
      }

    } else if(data.userName === '' && data.password === ''){
      setErrors({userName: 'Please fill this field', password: 'Please fill this field'})
      return 
    } else if(data.userName === '' && data.password !== ''){
      setErrors({name: 'Please fill this field'})
      return
    } else if(data.userName !== '' && data.password === ''){
      setErrors({password: 'Please fill this field'})
      return
    } else {
      data.parentId = userInfo.id
      try{
        const res = await createUser(data) 
        if(res){
          toast.show({
            description: 'User created successfully',
            placement: 'top'
          })
          navigation.navigate('userList')
        } 
      } catch(err){
        toast.show({
          description: err,
          placement: 'top',
          duration: 2000
        })
      }
    }
  }
  console.log(data, "sjdk")
  
  return <SafeAreaView style={styles.page}>       
          <View>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate(route?.params?.backscreen || 'userList')} >
              <Icon name="arrow-back" color={Colors.primary} size={20} />
            </TouchableOpacity>
            <Text textAlign={'center'} style={styles.heading}>{(route?.params?.key === 'edit') ? 'Edit User' : 'Create User'}</Text>
          </View>
          <FormControl isInvalid={errors?.userName ? true : false} mb={6}>
            <InputBox 
              placeholder="Enter Username" 
              type="text"
              value={data.userName}
              handleChange={(e) => handleChange(e, 'userName')} 
            />
          </FormControl>
          <FormControl mb={6}>
            <InputBox 
              placeholder="Enter Name" 
              type="text"
              value={data.name}
              handleChange={(e) => handleChange(e, 'name')} 
            />
          </FormControl>
          <FormControl mb={6}>
            <InputBox 
              placeholder="Enter Email" 
              type="email"
              value={data.email}
              handleChange={(e) => handleChange(e, 'email')} 
              autoCapitalize="none"
            />
          </FormControl>
          <FormControl isInvalid={errors?.password ? true : false} mb={6}>
            <InputBox 
              placeholder="Enter Password" 
              type="password"
              handleChange={(e) => handleChange(e, 'password')} 
              autoCapitalize="none"
            />
          </FormControl>
          <CustomButton 
            title={'Create'} 
            onSubmit={handleSubmit}
          />
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