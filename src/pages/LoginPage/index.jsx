import { StyleSheet} from 'react-native';
import { LoginForm } from '../../components/LoginForm';


export function LoginPage({navigation}) {
    const handleRegister = () => {
        navigation.navigate('register');
    }

    return <LoginForm onRegister={handleRegister}/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    text: {
        flex: 1,
        color: 'red'
    }
})