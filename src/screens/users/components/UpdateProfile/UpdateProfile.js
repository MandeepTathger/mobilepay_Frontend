import { FormControl, Text, View, useToast } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native";
import InputBox from "../../../../components/Input";
import Colors from "../../../../../constants/color";
import CustomButton from "../../../../components/Button";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { createUser, updateUser } from "../../../../../services/userServices";
import { useSelector } from "react-redux";

const UpdateProfile = ({route, navigation}) => {

  const [data, setData] = useState({
    userName: '',
    name: '',
    email: ''
  })
  const [errors, setErrors] = useState({});
  const userInfo = useSelector(state => state.user.userInfo) 
  const toast = useToast();

  useEffect(() => {
    setData({
      userName: userInfo?.userName,
      name: userInfo?.name,
      email: userInfo?.email
    })
  }, [])

  const handleChange = (val, key) => {
    setData({...data, [key]: val})
  }

  const handleSubmit = async() => {  
    if(data.userName === ''){
      setErrors({userName: 'Please fill this field'})
      return
    }
    try{
      const res = await updateUser(userInfo.id, data)
      if(res){
        toast.show({
          description: 'Profile updated successfully',
          placement: 'top'
        })
        navigation.popToTop()
        navigation.navigate('Profile')
        
      } 
    } catch(err){
      toast.show({
        description: err,
        placement: 'top',
        duration: 2000
      })
    }
  }
  
  return <SafeAreaView style={styles.page}>       
          <View>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Profile')} >
              <Icon name="arrow-back" color={Colors.primary} size={20} />
            </TouchableOpacity>
            <Text textAlign={'center'} style={styles.heading}>Update Profile</Text>
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
          <CustomButton 
            title={'Update'} 
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

export default UpdateProfile;