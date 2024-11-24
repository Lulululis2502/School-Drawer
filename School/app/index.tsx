import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Button } from "react-native";
import style from "../assets/style"
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>Boas Vindas</Text>
      <Text style={style.text1}> Olá Aluno Márcio, é uma honra recepcionar alguem de seu calibre em nossa humilde instituição
        sinta-se avontade para explorar toda a nossa vasta gama de acessos institucionais sobre seus dados.
      
      </Text>
    </SafeAreaView>
  );
}