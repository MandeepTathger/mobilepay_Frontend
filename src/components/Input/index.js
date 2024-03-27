import { Input } from "native-base";

const InputBox = ({ handleChange, placeholder, type, autoCapitalize, value }) => {
    return <Input 
              variant="rounded" 
              size="md" 
              placeholder={placeholder} 
              w="100%" 
              h={10} 
              pl={5} 
              type={type} 
              onChangeText={handleChange}
              autoCapitalize={autoCapitalize}
              value={value}
            />
}

export default InputBox;