import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import i18n from "../../config/locale";
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
      alert(i18n.t('signinRequireField'))
      setLoading(false);
    } else {
      setLoading(true);
      login(email, password).then(() => {
        setEmail('');
        setPassword('');
      }).catch(err => {
        alert(i18n.t('signinError'));
        setPassword('')
      }).finally(() => {
        setLoading(false);
      })
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgComponent />
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" onChange={(e) => setEmail(e.nativeEvent.text)} value={email}/>
        <TextInput style={styles.input} placeholder={i18n.t('password')} onChange={(e) => setPassword(e.nativeEvent.text)} value={password} secureTextEntry />
        <TouchableOpacity style={styles.submit} onPress={handleLogin}>
          <Text style={styles.submitText}>{!loading ? i18n.t('signin') : `${i18n.t('entering')} ...`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onRegister()}>
          <Text style={styles.textRegister}>{i18n.t('registerUserLink')}</Text>
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
