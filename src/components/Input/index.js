import { Input } from "native-base";

const InputBox = ({ handleChange, placeholder, type }) => {
    return <Input 
              variant="rounded" 
              size="md" 
              placeholder={placeholder} 
              w="100%" 
              h={10} 
              pl={5} 
              type={type} 
              onChangeText={handleChange}
            />
}

export default InputBox;