import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Actionsheet, Box, Button, Divider, FormControl, Modal, Text, useDisclose } from "native-base";
import Colors from "../../../constants/color";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import InputBox from "../../components/Input";
import CustomButton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarColors from "../../../constants/avatarColors";
import ConfirmationModal from "../../components/ConfirmationModal";

const Profile = () => {

  const [open, setOpen] = useState(false);

  const char = "Username"?.substring(0,1)

  return <SafeAreaView style={styles.page}>
          <View style={styles.coloredCon}>
            <TouchableOpacity style={styles.editIcon}>
              <FeatherIcon name="edit" color={'#fff'} size={25}/>
            </TouchableOpacity>
            <View style={[styles.avatar, {backgroundColor: AvatarColors[char]}]}>
              <Text style={styles.char}>{char}</Text>
            </View>
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
                <View style={[styles.iconCon, {backgroundColor: Colors.lightRed}]}>
                  <FeatherIcon name="lock" color={Colors.red} size={20}/>
                </View>
                <Text style={[styles.label, styles.passText]}>Change Password</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.detail}>
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
                <Divider />
                <TouchableOpacity style={styles.actionCard} >
                  <View style={[styles.iconCon, {backgroundColor: Colors.lightRed}]}>
                    <Icon name="logout" color={Colors.red} size={20}/>
                  </View>
                  <Text style={[styles.label, styles.passText]}>Logout</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <Actionsheet isOpen={open} onClose={() => setOpen(false)} hideDragIndicator>
            <Actionsheet.Content borderTopRadius="20" px={4}>
              <Box w="100%" py={5} justifyContent="center">
                <Text style={[styles.label, styles.header]}>Update Password</Text>
                <Text style={[styles.value, {paddingTop: 10}]}>Set the new password for your account so that you can login and access all the features.</Text>
              </Box>
              <FormControl pt={2}>
                <InputBox type={'password'} placeholder="Enter New Password" />
              </FormControl>
              <View style={styles.footerBtn}>
                <CustomButton title="Cancel" variant="ghost" colorScheme="blueGray" onSubmit={() => {
                  setOpen(false);
                }}>
                </CustomButton>
                <CustomButton title="Update" onSubmit={() => {
                  setOpen(false);
                }}>
                </CustomButton>
              </View>
            </Actionsheet.Content>
          </Actionsheet>
      </SafeAreaView>
}

const styles = StyleSheet.create({
  page: {
    flex: 1  
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  char: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 600,
    textTransform: 'capitalize'
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
  },
  editIcon: {
    position: 'absolute',
    zIndex: 9,
    top: 20,
    right: 15
  },
  header: {
    fontSize: 16,
    textAlign: 'left'
  },
  footerBtn: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'flex-end',
    width: '100%'
  }
});

export default Profile;