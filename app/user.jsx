import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TelaUsuario() {
  const{nome}=useLocalSearchParams()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ddff9d" }}>
      <Text>Olá, você está na tela usuário</Text>
      <Text>Seja bem-vindo:{nome}</Text>
    </SafeAreaView>
  );
}
