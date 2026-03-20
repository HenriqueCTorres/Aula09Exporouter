import { Tabs } from "expo-router";

export default function Layout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" options={{title:"Tela Inicial"}}/>
      <Tabs.Screen name="user" options={{title:"Tela Usuário"}}/>
      <Tabs.Screen name="produtos/[idProduto]" options={{title:"Tela de Produtos"}}/>
    </Tabs>
  )
}
