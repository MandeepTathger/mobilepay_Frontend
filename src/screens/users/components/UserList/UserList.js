import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import UserCard from "../../../../components/UserCard";
import CustomButton from "../../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useRef, useState } from "react";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import { getUsers } from "../../../../../services/userServices";
import { useSelector } from "react-redux";

const UserList = ({navigation}) => {

  const [logoutModal, setLogoutModal] = useState(false)
  const [userList, setUserList] = useState([])
  const userInfo = useSelector(state => state.user.userInfo)
  // const swipeListViewRef = useRef(null);

  useEffect(() => {
    getUserList()
  }, [])

  const getUserList = async() => {
    const users = await getUsers(userInfo?.id, userInfo?.token)
    setUserList(users)
  }  

  // const updateUserAction = (item, row) => {
  //   navigation.navigate('createUser', {key: 'edit', user: item})
  //   if (swipeListViewRef?.current) {
  //     swipeListViewRef?.current?.closeRow(item.key);
  //   }
  // }

  const hiddenItems = ({item, row}) => {
    return <View style={styles.rowBack}>
            <TouchableOpacity 
              style={[styles.actionCard, {backgroundColor: '#d7fae1'}]}
              onPress={() => navigation.navigate('createUser', {key: 'edit', user: item})}
              // onPress={() => updateUserAction(item, row)}
            >
              <Icon name="edit" color={'#05a635'} size={25}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => setLogoutModal(true)}
            >
              <Icon name="delete" color={'#f54242'} size={25}/>
            </TouchableOpacity>
          </View>
  }

  const renderItem = ({item, index}) => {
    return <UserCard 
            key={index}
            title={item.userName} 
            text={item.name} 
            width={'100%'}
            amount={'100'}
          />
  }

  return <SafeAreaView style={styles.page}>
          <View style={styles.headerBar}>
            <Text style={styles.label}>All Users</Text>
            <CustomButton 
              title="Create" 
              size={'sm'} 
              onSubmit={() => navigation.navigate('createUser')}
            />
          </View>
          <View>
            <SwipeListView
              // ref={swipeListViewRef}
              data={userList}
              renderItem={renderItem}
              renderHiddenItem={hiddenItems}
              rightOpenValue={-135}
            > 
            </SwipeListView>
          </View>
          <ConfirmationModal 
            isOpen={logoutModal}
            onClose={() => setLogoutModal(false)}
            title="Delete"
            description="Are you sure you want to delete this user?"
            confirmButtonText="Delete"
          />
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

export default UserList;