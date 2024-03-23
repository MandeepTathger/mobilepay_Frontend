import { Button } from "native-base";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/color";

const CustomButton = ({ isLoading, onSubmit, title, variant, width, size, color }) => {
  return <Button 
          isLoading={isLoading} 
          width={width}
          style={[styles.button, color && {backgroundColor: color}]} 
          fontWeight={600} 
          size={size || "md"} 
          variant={variant}
          onPress={onSubmit}>
            {title}
        </Button>
  
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20
  }
});

export default CustomButton;