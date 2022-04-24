import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {Image} from 'react-native'
import { HomePage } from "./pages/HomePage";
import { PointsListPage } from "./pages/PointsListPage";

const Drawer = createDrawerNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerStyle: {},
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#02073D"
          },
          headerTitle: () => (
            <Image
              style={{  }}
              source={require('../assets/logo.png')}
            />
          ),
        }}
      >
        <Drawer.Screen options={{
            title: 'Registrar ponto'
        }} name="Home" component={HomePage} />
        <Drawer.Screen name="Histórico de pontos" component={PointsListPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
