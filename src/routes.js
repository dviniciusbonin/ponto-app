import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import { LoginForm } from "./components/LoginForm";
import SvgComponent from "./components/Logo";
import { useAUth } from "./contexts/AuthContext";
import { HomePage } from "./pages/HomePage";
import { PointsListPage } from "./pages/PointsListPage";

function CustomDrawerContent(props) {
  const {logout} = useAUth();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => logout()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default function Routes() {
  const { logged } = useAUth();
  return (
    <NavigationContainer>
      {
            logged ? 
            <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerStyle: {},
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#02073D",
            },
            headerTitle: () => (
             <SvgComponent />
            ),
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            options={{
              title: "Registrar ponto",
            }}
            name="Home"
            component={HomePage}
          />
          <Drawer.Screen
          options={{
              title: "Histórico de pontos"
          }}
            name="listPoints"
            component={PointsListPage}
          />
        </Drawer.Navigator>:
        <LoginForm />
        }
    </NavigationContainer>
  );
}