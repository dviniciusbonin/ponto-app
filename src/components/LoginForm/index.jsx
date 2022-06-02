import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useAUth } from "../../contexts/AuthContext";
import SvgComponent from "../Logo";


export function LoginForm({ onSubmit, onRegister }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => {
      setLoading('');
      setEmail('');
      setPassword('');
    };
  }, []);

  const { login } = useAUth();

  const handleLogin = async () => {
    if (email.length < 1 || password.length < 1) {
      alert('Todos os campos são obrigatórios!')
      setLoading(false);
    } else {
      setLoading(true);
      await login(email, password);
      setLoading(false);
      setLoading('');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgComponent />
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Login" onChange={(e) => setEmail(e.nativeEvent.text)} />
        <TextInput style={styles.input} placeholder="Senha" onChange={(e) => setPassword(e.nativeEvent.text)} secureTextEntry />
        <TouchableOpacity style={styles.submit} onPress={handleLogin}>
          <Text style={styles.submitText}>{!loading ? 'Entrar' : 'Entrando ...'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onRegister()}>
          <Text style={styles.textRegister}>Sou novo aqui ?</Text>
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
    backgroundColor: "#000649",
  },
  button: {
    marginVertical: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    height: "auto",
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    //justifyContent: 'center',
    width: "90%",
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 15,
    padding: 8,
  },
  submit: {
    backgroundColor: "#0057FF",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
  },

  textRegister: {
    color: "#fff",
    marginVertical: 20,
  },
});
