import { ScrollView, StyleSheet, View } from "react-native";
import UserCard from "../../components/UserCard";
import { Text } from "native-base";


const Users = () => {
  return <View style={styles.page}>
          <Text style={styles.label}>All Users</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {[1,2,3,4,5].map(i => {
              return <UserCard 
                      key={i}
                      title={'UserName'} 
                      text={'Name'} 
                      width={'100%'}
                      amount={'100'}
                    />
            })}
        </ScrollView>
      </View>
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20
  },
  label: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 20,
    color: '#525252'
  }
});

export default Users;