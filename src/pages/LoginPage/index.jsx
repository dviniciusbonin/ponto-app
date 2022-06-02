import { StyleSheet} from 'react-native';
import { LoginForm } from '../../components/LoginForm';


export function LoginPage({navigation}) {
    const handleRegister = () => {
        navigation.navigate('register');
    }

    return <LoginForm onRegister={handleRegister}/>
}