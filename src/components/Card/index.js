import { Text } from "native-base";
import { StyleSheet, View } from "react-native";


const Card = ({title, text, width}) => {
  return <View style={[styles.card, {width: width}]}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#d4d4d4',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20
  },
  heading: {
    fontWeight: 600,
    fontSize: 18,
    paddingBottom: 2,
    color: '#525252'
  },
  text: {
    fontWeight: 600,
    color: '#737373'
  }                     
})

export default Card;