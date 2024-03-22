import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import UserCard from "../../components/UserCard";
import { Button, Divider, FormControl, Modal, Text } from "native-base";
import Colors from "../../../color";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import InputBox from "../../components/Input";
import CustomButton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {

  const [open, setOpen] = useState(false);

  return <SafeAreaView style={styles.page}>
          <View style={styles.coloredCon}>
            <View style={styles.avatar}></View>
            <Text style={styles.avatarText}>Username</Text>
          </View>
          <View style={styles.detailCon}>
            <View style={styles.detail}>
              <View style={styles.data}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>test@gmail.com</Text>
              </View>
              <Divider />
              <View style={styles.data}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>-</Text>
              </View>
              <Divider />
              <View style={styles.data}>
                <Text style={styles.label}>Username</Text>
                <Text style={styles.value}>-</Text>
              </View>
            </View>
            <View style={[styles.detail, {paddingVertical: 0}]}>
              <TouchableOpacity style={styles.actionCard} onPress={() => setOpen(true)}>
                <View style={[styles.iconCon, {backgroundColor: '#fce1e1'}]}>
                  <FeatherIcon name="lock" color={'#f54242'} size={20}/>
                </View>
                <Text style={[styles.label, styles.passText]}>Change Password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detail} >
              <TouchableOpacity style={styles.actionCard} >
                <View style={[styles.iconCon, {backgroundColor: '#d7d7fc'}]}>
                  <Icon name="account-balance" color={'#6161fa'} size={20}/>
                </View>
                <Text style={[styles.label, styles.passText]}>Add Account</Text>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity style={styles.actionCard} >
                <View style={[styles.iconCon, {backgroundColor: '#d7fae1'}]}>
                  <Icon name="switch-account" color={'#05a635'} size={20}/>
                </View>
                <Text style={[styles.label, styles.passText]}>Switch Account</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
            <Modal.Content maxWidth="350" {...styles['center']}>
              <Modal.Header style={{borderBottomWidth: 0}}>Update Password</Modal.Header>
              <Modal.Body>
                <FormControl>
                  {/* <FormControl.Label>New Password</FormControl.Label> */}
                  <InputBox type={'password'} placeholder="Enter New Password" />
                </FormControl>
              </Modal.Body>
              <Modal.Footer style={{borderTopWidth: 0}}>
                <Button.Group space={2}>
                  <CustomButton title="Cancel" variant="ghost" colorScheme="blueGray" onSubmit={() => {
                    setOpen(false);
                  }}>
                  </CustomButton>
                  <CustomButton title="Update" onSubmit={() => {
                  setOpen(false);
                }}>
                  </CustomButton>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
      </SafeAreaView>
}

const styles = StyleSheet.create({
  page: {
    flex: 1  
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
    marginTop: 10
  }, 
  coloredCon: {
    height: '46%',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailCon: {
    height: '70%',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
    top: '46%',
    backgroundColor: Colors.secondary,
    padding: 20
  },
  detail: {
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  label: {
    color: Colors.heading,
    fontWeight: 600
  },
  value: {
    color: Colors.text
  },
  actionCard: {
    // paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passText: {
    marginLeft: 10,
    fontSize: 16
  },
  iconCon: {
    padding: 5,
    borderRadius: 10,
    
  }
});

export default Profile;