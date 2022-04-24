import { StyleSheet} from 'react-native';
import { LoginForm } from '../../components/LoginForm';


export function LoginPage() {
    return <LoginForm />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})