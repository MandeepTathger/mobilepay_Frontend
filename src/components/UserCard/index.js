import { Text } from "native-base";
import { StyleSheet, View } from "react-native";


const UserCard = ({title, text, width, amount}) => {
  return <View style={[styles.card, {width: width}]}>
          <View style={styles.img}></View>
          <View style={styles.data}>
            <View style={styles.labels}>
              <Text style={styles.heading}>{title}</Text>
              <Text style={styles.text}>{text}</Text>
            </View>
            <View>
              <Text style={styles.heading}>{amount}</Text>
            </View>
          </View>
        </View>
}

const styles = StyleSheet.create({
  card: {
    height: 70,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#d4d4d4',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  img: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    overflow: 'hidden'
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labels: {
    marginLeft: 10
  },
  heading: {
    fontWeight: 600,
    fontSize: 14,
    color: '#525252'
  },
  text: {
    fontWeight: 600,
    color: '#737373',
    fontSize: 12,
  }                     
})

export default UserCard;