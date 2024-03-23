import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import UserCard from "../../../../components/UserCard";
import CustomButton from "../../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import ConfirmationModal from "../../../../components/ConfirmationModal";

const UserList = ({navigation}) => {

  const [logoutModal, setLogoutModal] = useState(false)

  const data = [{
    name: 'user1'
  }, {
    name: 'Aman'
  }, {
    name: 'Mandy'
  }, {
    name: 'Rupi'
  }, {
    userName: 'hello'
  }]
  

  const hiddenItems = () => {
    return <View style={styles.rowBack}>
            <TouchableOpacity 
              style={[styles.actionCard, {backgroundColor: '#d7fae1'}]}
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
            title={'Username'} 
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
              data={data}
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