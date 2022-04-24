import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { useAUth } from "../../contexts/AuthContext";

export function LoginForm({ onSubmit }) {
  const { login } = useAUth();
  const handleLogin = async () => {
    login("aa", "aa");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={require('../../../assets/logo.png')}/>
      </View>
      <View style={styles.formContainer}>
          <TextInput  style={styles.input} placeholder="Login"/>
          <TextInput style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={styles.submit} onPress={handleLogin}>
              <Text style={styles.submitText}>Entrar</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#000649'
  },
  button: {
    marginVertical: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  formContainer: {
      flex: 1,
      alignItems: 'center',
      //justifyContent: 'center',
      width: '90%'
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 15,
    padding: 8
  },
  submit: {
      backgroundColor: '#0057FF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
  },
  submitText: {
      color: '#fff',
      fontSize: 16
  }
});