import { Text, View } from "react-native/types_generated/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

export default function IdProduto() {
  const { idProduto, segNumero } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>ID DO PRODUTO:{idProduto}</Text>
      <Text>SEGUNDO NÚMERO:{segNumero}</Text>
    </SafeAreaView>
  );
}
