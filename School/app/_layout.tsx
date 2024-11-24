import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";
export default function Layout() {
  return (
    <Drawer
    
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#E2BE8B',  // Cor de fundo do drawer
        width: 270,                  // Largura do drawer
      },
      drawerContentStyle: {
        paddingVertical: 10,         // Espaçamento interno entre os itens
      },
      drawerLabelStyle: {
        fontSize: 18,                // Tamanho da fonte dos labels
        color: '#fff',               // Cor dos labels
      },
      drawerActiveBackgroundColor: '#000000',  // Cor de fundo do item ativo
      drawerActiveTintColor: '#999',        // Cor do texto do item ativo
      drawerInactiveTintColor: '#999',         // Cor do texto dos itens inativos
    }}

    >
     

      <Drawer.Screen name="index" options={{ title: "Boas Vindas"
      }} />
      <Drawer.Screen name="School/Boletim" options={{ title: "Boletim Escolar" }} />
      <Drawer.Screen name="School/Calendario" options={{ title: "Calendario Escolar" }} />
      <Drawer.Screen name="School/Contatos" options={{ title: "Contatos Escolares" }} />
      <Drawer.Screen name="School/Eventos" options={{ title: "Eventos Escolares" }} />
    </Drawer>
  );
}
