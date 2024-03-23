import { Text, View } from "native-base"
import { StyleSheet } from "react-native"
import AvatarColors from "../../../constants/avatarColors"

const Avatar = ({name, width, height}) => {

  const getChar = () => {
    return name?.substring(0,1)
  }

  const char = getChar()

  return <View style={[styles.img, {width: width, height: height, backgroundColor: AvatarColors[char] || 'grey'}]}>
          <Text style={styles.char}>{char}</Text>
        </View>
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  char: {
    color: '#fff',
    textTransform: 'capitalize'
  }
})

export default Avatar;