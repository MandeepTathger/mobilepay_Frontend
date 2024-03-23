import { Text, View } from 'native-base';
import { ScrollView, StyleSheet } from "react-native";
import Card from '../../components/Card';
import UserCard from '../../components/UserCard';
import Colors from '../../../constants/color';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return <SafeAreaView style={styles.home}>
          <View style={styles.conHorizontal}>
            <Card title={'Heading'} text={'12123123'} width={'47%'} />
            <Card title={'Heading'} text={'12123123'} width={'47%'} />
          </View>
          <View style={styles.fullWidth}>
            <Card title={'Heading'} text={'12123123'} width={'100%'} />
          </View>
          <Text style={styles.label}>Top 5 Users</Text>
          <View>
            <ScrollView  showsVerticalScrollIndicator={false}>
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