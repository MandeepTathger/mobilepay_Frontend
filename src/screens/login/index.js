import { Box, FormControl } from "native-base";
import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { login } from "../../../services/authServices";
import { useToast } from 'native-base';
import InputBox from "../../components/Input";
import CustomButton from "../../components/Button";

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
        if(data){
          setIsLoading(false)
          navigation.navigate('Home')
          toast.show({
            description: "Welcome"
          })
        }
      } catch(err){
        toast.show({
          description: err
        })
        setIsLoading(false)
      } 
    }
  }

  console.log(user, "user>>>")

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.loginCon}>
        <FormControl isInvalid={errors?.name ? true : false} mb={5}>
          <InputBox 
            placeholder="Enter User Name" 
            type="text" 
            handleChange={(e) => handleChange(e, 'userName')} 
          />
          {/* <FormControl.ErrorMessage >
            {errors.name}
          </FormControl.ErrorMessage> */}
          {/* {errors.name && <Text style={styles.error}>{errors.name}</Text>} */}
        </FormControl>
        <FormControl isInvalid={errors?.password ? true : false} mb={6}>
          <InputBox 
            placeholder="Enter Password" 
            type="password"
            handleChange={(e) =>handleChange(e, 'password')} 
          />
          {/* {errors.password && <Text style={styles.error}>{errors.password}</Text>} */}
        </FormControl>
        <CustomButton 
          isLoading={isLoading}
          onSubmit={onSubmit}
          title={"LOGIN"}
        />
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