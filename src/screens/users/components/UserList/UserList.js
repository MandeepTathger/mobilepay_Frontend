import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useToast } from "native-base";
import UserCard from "../../../../components/UserCard";
import CustomButton from "../../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCallback, useState } from "react";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import { deleteUser, getUsers } from "../../../../../services/userServices";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const UserList = ({route, navigation}) => {

  const [deleteModal, setDeleteModal] = useState(false)
  const [userList, setUserList] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const userInfo = useSelector(state => state.user.userInfo)
  const toast = useToast();
  const [closeAllRowsKey, setCloseAllRowsKey] = useState(0);

  const closeAllRows = () => {
    setCloseAllRowsKey((prevKey) => prevKey + 1);
  };

  useFocusEffect(
    useCallback(() => {
      getUserList()
      return;
    }, [])
  );

  const getUserList = async() => {
    const users = await getUsers(userInfo?.id)
    setUserList(users)
  }  

  const updateUserAction = (rowMap, data) => {
    navigation.navigate('createUser', {key: 'edit', user: data.item})
    closeRow(rowMap, data.index);
  }

  const handleDelete = async() => {
    try{
      const res = await deleteUser(selectedUser?._id)
      if(res){
        toast.show({
          description: 'User deleted successfully',
          placement: 'top',
          duration: 2000
        })
        setDeleteModal(false)
        closeAllRows()
        getUserList()
      } 
    } catch(err){
      console.log(err,"err>>>>")
      toast.show({
        description: err,
        placement: 'top',
        duration: 2000
      })
    }  
  }

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const hiddenItems = (data, rowMap) => {
    return <View style={styles.rowBack}>
            <TouchableOpacity 
              style={[styles.actionCard, {backgroundColor: '#d7fae1'}]}
              onPress={() => updateUserAction(rowMap, data)}
            >
              <Icon name="edit" color={'#05a635'} size={25}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => { setDeleteModal(true); setSelectedUser(data.item)}}
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
              key={closeAllRowsKey}
              data={userList}
              renderItem={renderItem}
              renderHiddenItem={hiddenItems}
              rightOpenValue={-135}
              keyExtractor={(_, index) => index.toString()}
            > 
            </SwipeListView>
          </View>
          <ConfirmationModal 
            isOpen={deleteModal}
            onClose={() => setDeleteModal(false)}
            title="Delete"
            description="Are you sure you want to delete this user?"
            confirmButtonText="Delete"
            onSubmit={handleDelete}
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