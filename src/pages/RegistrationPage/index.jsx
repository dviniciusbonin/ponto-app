import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import SvgComponent from "../../components/Logo";
import api from "../../services/api";

export function RegistrationPage() {

  const [companySelected, setCompanySelected] = useState({});

  useEffect(() => {
    api.get('companies').then(({data}) => {
      setCompanySelected(data[0])
    })}, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgComponent />
      </View>
      <Text style={styles.title}>Registre-se</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Empresa" value={companySelected.name} focusable={false}/>
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput style={styles.input} placeholder="Senha" />
        <TouchableOpacity style={styles.submit} >
          <Text style={styles.submitText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    textAlign: 'center',
    marginVertical: 50,
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
    flex: 1,
    alignItems: "center",
    width: '80%',
    margin: 0
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
