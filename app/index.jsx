import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";
import { Link, userRouter } from "expo-router";

export default function TelaInicial() {
  const navegacao = userRouter() // Hook de navegação

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ff9494" }}>
      <Text>Olá, você está na tela inicial</Text>

      <Button
        title="Navegar para tela usuário"
        onPress={()=>navegacao.push("/user")}
      />

      {/* <Link href={{pathname:"/user", params:{nome:"Prof. Fernando"}}} asChild>
        <Button title="Ir para tela usuário" />
      </Link>

      <Link href={"/produtos/20?segNumero=30"}>
        Enviar o código 20 e 30 do produto
      </Link> */}
    </SafeAreaView>
  );
}
