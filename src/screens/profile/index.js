import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Actionsheet, Box, Divider, FormControl, Text } from "native-base";
import Colors from "../../../constants/color";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import InputBox from "../../components/Input";
import CustomButton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarColors from "../../../constants/avatarColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import BottomDrawer from "../../components/BottomDrawer";
import UpdatePassword from "./components/UpdatePassword";
import QRCode from "./components/QRCode";

const Profile = ({navigation}) => {

  const [open, setOpen] = useState(false);
  const [qrOpen, setQROpen] = useState(false);
  const userInfo = useSelector(state => state.user.userInfo)

  const char = (userInfo?.name || userInfo?.userName)?.substring(0,1) || ''

  const logout = async() => {
    await AsyncStorage.removeItem('token')
    navigation.navigate('login')
    return true
  }

  return <SafeAreaView style={styles.page}>
          <View style={styles.coloredCon}>
            <TouchableOpacity 
              style={styles.editIcon} 
              // onPress={() => navigation.navigate('Users', {screen: 'createUser', params: {key: 'edit', backscreen: 'Profile'}})}
              >
              <FeatherIcon name="edit" color={'#fff'} size={25}/>
            </TouchableOpacity>
            <View style={[styles.avatar, {backgroundColor: AvatarColors[char]}]}>
              <Text style={styles.char}>{char}</Text>
              <TouchableOpacity 
                style={[styles.qrIcon, {backgroundColor: AvatarColors[char]}]}
                onPress={() => setQROpen(true)}
              >
                <Icon name="qr-code-2" color={'#fff'} size={25}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.avatarText}>{userInfo?.name || userInfo?.userName}</Text>
          </View>
          <View style={styles.detailCon}>
            <View style={styles.detail}>
              <View style={styles.data}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{userInfo?.email || '-'}</Text>
              </View>
              <Divider />
              <View style={styles.data}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{userInfo?.name || '-'}</Text>
              </View>
              <Divider />
              <View style={styles.data}>
                <Text style={styles.label}>Username</Text>
                <Text style={styles.value}>{userInfo?.userName || '-'}</Text>
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
                <TouchableOpacity style={styles.actionCard} onPress={logout}>
                  <View style={[styles.iconCon, {backgroundColor: Colors.lightRed}]}>
                    <Icon name="logout" color={Colors.red} size={20}/>
                  </View>
                  <Text style={[styles.label, styles.passText]}>Logout</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <BottomDrawer
            isOpen={open} 
            onClose={() => setOpen(false)}
          >
            <UpdatePassword onSubmit={() => setOpen(false)}/>
          </BottomDrawer>
          <BottomDrawer 
            isOpen={qrOpen} 
            onClose={() => setQROpen(false)}
          >
            <QRCode />
          </BottomDrawer>
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
  qrIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey'
  }
});

export default Profile;