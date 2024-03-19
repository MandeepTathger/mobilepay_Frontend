import { Input, Box, Button, FormControl } from "native-base";
import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { login } from "../../../services/authServices";
import { useToast } from 'native-base';

const LoginScreen = ({navigation}) => {

  const [user, setUser] = useState({
    userName: '',
    password: ''
  })
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (val, key) => {
    setUser({...user, [key]: val})
  }

  const onSubmit = async () => {
    if(user.userName === '' && user.password === ''){
      setErrors({name: 'Please fill this field', password: 'Please fill this field'})
      return
    } else if(user.userName === '' && user.password !== ''){
      setErrors({name: 'Please fill this field'})
      return
    } else if(user.userName !== '' && user.password === ''){
      setErrors({password: 'Please fill this field'})
      return
    } else {
      setErrors({})
      setIsLoading(true)
      try{
        const data = await login(user)
        console.log('13223')
        if(data){
          console.log('1')
          setIsLoading(false)
          console.log('2')
          navigation.navigate('Home')
          console.log('3')
          toast.show({
            description: "Welcome"
          })
        }
      } catch(err){
        console.log('13223err')
        toast.show({
          description: err
        })
        setIsLoading(false)
      } 
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.loginCon}>
        <FormControl isInvalid={errors?.name ? true : false} mb={5}>
          <Input variant="rounded" size="md" placeholder="Enter User Name" w="100%" h={10} pl={5} type="text" onChangeText={(e) =>handleChange(e, 'userName')}/>
          {/* <FormControl.ErrorMessage >
            {errors.name}
          </FormControl.ErrorMessage> */}
          {/* {errors.name && <Text style={styles.error}>{errors.name}</Text>} */}
        </FormControl>
        <FormControl isInvalid={errors?.password ? true : false} mb={6}>
          <Input variant="rounded" size="md" placeholder="Enter Password" w="100%" h={10} pl={5} type="password" onChangeText={(e) =>handleChange(e, 'password')}/>
          {/* {errors.password && <Text style={styles.error}>{errors.password}</Text>} */}
        </FormControl>
        <Button isLoading={isLoading} style={styles.button} fontWeight={600} size={"md"} onPress={onSubmit}>LOGIN</Button>
  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  loginCon: {
    marginHorizontal: 30,
    marginTop: '-20%'
  },
  button: {
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    fontSize: 11,
    position: 'absolute',
    bottom: -15,
    left: 15
  }
});

export default LoginScreen;