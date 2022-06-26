import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import i18n from "./config/locale";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import SvgComponent from "./components/Logo";
import { useAUth } from "./contexts/AuthContext";
import { HomePage } from "./pages/HomePage";
import { WorkingDaysPage } from "./pages/WorkingDaysPage";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";

function CustomDrawerContent(props) {
  const {logout} = useAUth();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={i18n.t('logout')}
        onPress={() => logout()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const NativeStack = createNativeStackNavigator();
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
              title: i18n.t('registerPoint')
            }}
            name="Home"
            component={HomePage}
          />
          <Drawer.Screen
          options={{
              title: i18n.t('pointsHistory')
          }}
            name="listPoints"
            component={WorkingDaysPage}
          />
        </Drawer.Navigator>:
       <NativeStack.Navigator screenOptions={{
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: '#0057FF',
            animation: "fade_from_bottom",
          }}>
        <NativeStack.Screen name="login" component={LoginPage} />
        <NativeStack.Screen name="register" component={RegistrationPage} />
      </NativeStack.Navigator>
        }
    </NavigationContainer>
  );
}