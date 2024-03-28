import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useToast } from "native-base";
// import UserCard from "../../../../components/UserCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard";
import InputBox from "../../components/Input";

const Transactions = ({route, navigation}) => {

  const [deleteModal, setDeleteModal] = useState(false)
  const [userList, setUserList] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const userInfo = useSelector(state => state.user.userInfo)
  const toast = useToast();
  // const swipeListViewRef = useRef(null);
  
  // useEffect(() => {
  //   getUserList()
  // }, [route?.params?.newUser])

  // const getUserList = async() => {
  //   const users = await getUsers(userInfo?.id)
  //   setUserList(users)
  // }  

  return <SafeAreaView style={styles.page}>
          <View style={styles.headerBar}>
            <Text style={styles.label}>Transactions History</Text>
          </View>
          <View style={styles.headerBar} >
            <InputBox 
              placeholder={'Search Transactions'}
            />
          </View>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {[1,2,3,4,5].map(i => {
                return <UserCard 
                        key={i}
                        title={'Name'} 
                        text={'Date and Time'} 
                        width={'100%'}
                        amount={'100'}
                        transaction={true}
                      />
              })}
            </ScrollView>
          </View>
      </SafeAreaView>
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20
  },
  headerBar: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 600,
    fontSize: 16,
    color: '#525252'
  },
  rowBack: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  actionCard: {
    backgroundColor: '#fce1e1',
    padding: 22,
    borderRadius: 8
  }
});

export default Transactions;