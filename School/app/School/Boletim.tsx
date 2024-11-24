import { Text, View, Image, StyleSheet, SafeAreaView  } from "react-native";
import { Link } from "expo-router";
import style from "@/assets/style";

export default function Index() {
  return (
    <View
    style={style.container}
    >
    
      <Image style={style.boletim} source={require('../../assets/images/boletim.png')}/>
    </View>
  );
}
