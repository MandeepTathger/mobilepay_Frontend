import { Box, FormControl, Text, View, useToast } from "native-base";
import InputBox from "../../../../components/Input";
import CustomButton from "../../../../components/Button";
import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/color";
import { useEffect, useState } from "react";
import { updateUser } from "../../../../../services/userServices";
import { useSelector } from "react-redux";

const UpdatePassword = ({onSubmit, isOpen}) => {

  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const userInfo = useSelector(state => state.user.userInfo) 
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setError(false)
  }, [isOpen])

  const updatePassword = async() => {
    if(password === ''){
      setError(true)
      return
    }
    setError(false)
    setIsLoading(true)
    try{
      const res = await updateUser(userInfo.id, {password})
      if(res){
        setIsLoading(false)
        setPassword('')
        onSubmit()
        toast.show({
          description: 'Password updated successfully',
          placement: 'bottom',
          duration: 2000
        })
        
      } 
    } catch(err){
      setIsLoading(false)
      toast.show({
        description: err,
        placement: 'bottom',
        duration: 2000
      })
    }
  }

  const cancel = () => {
    setPassword('')
    onSubmit()
  }

  return <>
          <Box w="100%" py={5} justifyContent="center">
            <Text style={[styles.label, styles.header]}>Update Password</Text>
            <Text style={[styles.value, {paddingTop: 10}]}>Set the new password for your account so that you can login and access all the features.</Text>
          </Box>
          <FormControl isInvalid={error} pt={2}>
            <InputBox 
              type={'password'} 
              placeholder="Enter New Password" 
              handleChange={(e) => setPassword(e)}
              value={password}
            />
          </FormControl>
          <View style={styles.footerBtn}>
            <CustomButton title="Cancel" variant="ghost" colorScheme="blueGray" onSubmit={cancel}>
            </CustomButton>
            <CustomButton 
              title="Update" 
              onSubmit={updatePassword}
              isLoading={isLoading}
            >
            </CustomButton>
          </View>    
        </>  
}

const styles = StyleSheet.create({
  label: {
    color: Colors.heading,
    fontWeight: 600
  },
  header: {
    fontSize: 16,
    textAlign: 'left'
  },
  value: {
    color: Colors.text
  },
  footerBtn: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'flex-end',
    width: '100%'
  },
})

export default UpdatePassword