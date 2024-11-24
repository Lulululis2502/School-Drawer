import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center", 
          backgroundColor:"#FFFDD0",

        },

         text:{
            fontSize: 20,
            top: -20,
            alignItems: "center", 
            fontStyle: "italic",
            fontWeight: "black"
         },
         text1:{
            fontSize: 20,
            textAlign: "center",
            alignItems: "center", 
            fontStyle: "italic",
            fontWeight: "black"
         },

         boletim:{
            width:"100%",
            height:"65%",
           resizeMode:"contain",
           top: -50,
         }
});