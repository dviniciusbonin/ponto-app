import { View, Text, Button, StyleSheet } from "react-native";

export function LoginForm({ navigation }) {
const {signin, logged} = UseLogin();
  const login = () => {
   
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={login} title="Entrar" color={"green"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: 10,
  },
});
