import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { useEffect, useState } from "react";
import SvgComponent from "../../components/Logo";
import api from "../../services/api";

export function RegistrationPage({ navigation }) {

  const [companySelected, setCompanySelected] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    api.get('companies').then(({ data }) => {
      setCompanySelected(data[0])
    })
  }, []);

  useEffect(() => {
    return () => {
      setCompanySelected({});
    };
}, []);

  const handleRegister = () => {
    if (name.length < 3 || email.length < 5 || password.length < 3) {
      return alert('Todos os campos precisam de no minimo 3 caracteres');
    }

    api.post('users', {
      fullname: name,
      email,
      password,
      company_id: companySelected.id
    }).then(() => {
      const showAlert = () =>
        Alert.alert('Ponto APP', 'Você foi registrado com sucesso e será redirecionado para a página de login', [
          { text: 'OK', onPress: () => navigation.navigate('login') },
        ]);

        showAlert();
    }).catch((error) => {
      console.log(error)
      alert('Houve um erro ao realizar seu cadastro. Contate o desenvolvedor')
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgComponent />
      </View>
      <Text style={styles.title}>Registre-se</Text>
      <ScrollView style={styles.formContainer} contentContainerStyle={styles.containerScrollView} focusable>
        <TextInput style={styles.input} placeholder="Nome" onChange={(e) => setName(e.nativeEvent.text)} />
        <TextInput style={styles.input} placeholder="Empresa" value={companySelected.name} focusable={false} />
        <TextInput style={styles.input} placeholder="Email" onChange={(e) => setEmail(e.nativeEvent.text)} />
        <TextInput style={styles.input} placeholder="Senha" onChange={(e) => setPassword(e.nativeEvent.text)} secureTextEntry/>
        <TouchableOpacity style={styles.submit} onPress={handleRegister}>
          <Text style={styles.submitText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 16
  },
  button: {
    marginVertical: 10,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#000649",
    height: '30%',
    width: '100%'
  },
  formContainer: {
    width: '80%',
    margin: 10
  },
  containerScrollView: {
    alignItems: "center"
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
  }
});
