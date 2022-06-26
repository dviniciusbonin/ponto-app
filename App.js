import "react-native-gesture-handler";
import Routes from "./src/routes";
import { AuthProvider} from "./src/contexts/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function App() {

  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="light"/>
    </AuthProvider>
  );
}
