import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "native-base";
import UserCard from "../../../../components/UserCard";
import CustomButton from "../../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const UserList = ({navigation}) => {
  return <SafeAreaView style={styles.page}>
          <View style={styles.headerBar}>
            <Text style={styles.label}>All Users</Text>
            <CustomButton 
              title="Create" 
              size={'sm'} 
              onSubmit={() => navigation.navigate('createUser')}
            />
          </View>
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
      </SafeAreaView>
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'black',
    marginBottom: 20,
  },
  label: {
    fontWeight: 600,
    fontSize: 16,
    color: '#525252'
  }
});

export default UserList;