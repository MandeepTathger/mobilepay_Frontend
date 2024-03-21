import { Button } from "native-base";
import { StyleSheet } from "react-native";

const CustomButton = ({ isLoading, onSubmit, title }) => {
  return <Button 
          isLoading={isLoading} 
          style={styles.button} 
          fontWeight={600} 
          size={"md"} 
          onPress={onSubmit}>
            {title}
        </Button>
  
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
  }
});

export default CustomButton;