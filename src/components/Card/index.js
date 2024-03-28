import { Text } from "native-base";
import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/color";


const Card = ({title, text, width, icon, iconBackground, height}) => {
  return <View style={[styles.card, {width, height}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.heading}>{text}</Text>
            <View style={[styles.icon, {backgroundColor: iconBackground}]}>
              {icon}
            </View>
          </View>
          <View >
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
}

const styles = StyleSheet.create({
  card: {
    // height: 100,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#d4d4d4',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
    // flexDirection: 'row',
    // alignItems: 'top'
  },
  heading: {
    fontWeight: 600,
    fontSize: 15,
    paddingBottom: 2,
    color: Colors.heading
  },
  text: {
    fontWeight: 600,
    color: Colors.text
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    alignSelf: 'flex-end'
  }                    
})

export default Card;