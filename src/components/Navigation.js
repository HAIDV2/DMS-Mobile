import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

import DashBoard from '../screens/DashBoard';
import CheckinScreen from '../screens/CheckinScreen';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export default function App() {

  const { userInfo, splashLoading } = useContext(AuthContext);

  return (
      <NavigationContainer>
        <Tab.Navigator>
          {
            [undefined, null].includes(userInfo) ?
              (
                <Tab.Screen name="Login" component={LoginScreen} />
              ) :
              (
                <>
                  <Tab.Screen
                    name="Trang chủ"
                    component={DashBoard}
                    options={{
                      tabBarIcon: () => <Ionicons name="home" size={32} color="black" />
                    }}
                  />
                  <Tab.Screen
                    name="Checkin"
                    component={CheckinScreen}
                    options={{
                      tabBarIcon: () => <Ionicons name="md-camera" size={32} color="black" />
                    }}
                  />
                  <Tab.Screen
                    name="Đặt hàng"
                    component={DashBoard}
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name="post-add" size={32} color="black" />
                      ),
                    }}
                  />
                </>
              )
          }
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
