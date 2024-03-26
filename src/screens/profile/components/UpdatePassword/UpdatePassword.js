import { Box, FormControl, Text, View } from "native-base";
import InputBox from "../../../../components/Input";
import CustomButton from "../../../../components/Button";
import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/color";

const UpdatePassword = ({onSubmit}) => {
  return <>
          <Box w="100%" py={5} justifyContent="center">
            <Text style={[styles.label, styles.header]}>Update Password</Text>
            <Text style={[styles.value, {paddingTop: 10}]}>Set the new password for your account so that you can login and access all the features.</Text>
          </Box>
          <FormControl pt={2}>
            <InputBox type={'password'} placeholder="Enter New Password" />
          </FormControl>
          <View style={styles.footerBtn}>
            <CustomButton title="Cancel" variant="ghost" colorScheme="blueGray" onSubmit={onSubmit}>
            </CustomButton>
            <CustomButton title="Update" onSubmit={onSubmit}>
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