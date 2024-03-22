import { Button } from "native-base";
import { StyleSheet } from "react-native";

const CustomButton = ({ isLoading, onSubmit, title, variant, width, size }) => {
  return <Button 
          isLoading={isLoading} 
          width={width}
          style={styles.button} 
          fontWeight={600} 
          size={size || "md"} 
          variant={variant}
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