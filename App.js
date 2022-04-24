import 'react-native-gesture-handler';
import Routes from './src/routes';
import { LoginPage } from './src/pages/LoginPage';


export default function App() {
  const logged = true;

  if(!logged) return <LoginPage />
  return <Routes/>
}