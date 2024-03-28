import { Text, View } from 'native-base';
import { ScrollView, StyleSheet } from "react-native";
import Card from '../../components/Card';
import UserCard from '../../components/UserCard';
import Colors from '../../../constants/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import UserRole from '../../../constants/userRole';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const userInfo = useSelector(state => state.user.userInfo)
  const isSuperAdmin = userInfo?.role === UserRole.superAdmin
  const getLabel = () => {
    if(userInfo?.role === UserRole.admin){
      return 'Last 5 Transactions'
    } else if(userInfo?.role === UserRole.superAdmin) {
      return 'Top 5 Users'
    } else {
      return ''
    } 
  }
  
  return <SafeAreaView style={styles.home}>
          <View style={styles.conHorizontal}>
            <Card 
              title={isSuperAdmin? `Today's Commission` : `Today's Collection`} 
              text={'2000'} 
              width={'47%'} 
              icon={<MaterialIcon name="today" color={Colors.purple} size={20} />}
              iconBackground={Colors.lightPurple}
              height={100}
            />
            <Card 
              title={isSuperAdmin ? `Total Commission` : `Total Collection`} 
              text={'30000'} 
              width={'47%'} 
              icon={<MaterialIcon name="money" color={Colors.green} size={20} />}
              iconBackground={Colors.lightGreen}
              height={100}
            />
          </View>
          <View style={styles.fullWidth}>
            <Card 
              title={isSuperAdmin ? `Total Users` : `Total Transactions`} 
              text={'20'} 
              width={'100%'} 
              icon={isSuperAdmin ? <Icon name="users" color={Colors.red} size={18} /> : <MaterialIcon name="swap-horiz" color={Colors.red} size={20} />}
              iconBackground={Colors.lightRed}
              height={80}
            />
          </View>
          <Text style={styles.label}>{getLabel()}</Text>
          <View>
            <ScrollView  showsVerticalScrollIndicator={false}>
              {userInfo?.role === UserRole.superAdmin ?
              [1,2,3,4,5].map(i => {
                return <UserCard 
                        key={i}
                        title={'UserName'} 
                        text={'Name'} 
                        width={'100%'}
                        amount={'100'}
                      />
              }) :
              [1,2,3,4,5].map(i => {
                return <UserCard 
                        key={i}
                        title={'Name'} 
                        text={'Date and Time'} 
                        width={'100%'}
                        amount={'100'}
                        transaction={true}
                      />
              })
              }
            </ScrollView>
          </View>
          
      </SafeAreaView>
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor:  Colors.secondary,
    padding: 20
  },
  conHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fullWidth: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  label: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20,
    color: Colors.heading
  }
});

export default HomeScreen;