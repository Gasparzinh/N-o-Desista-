import React from "react";
import { View, Text, TouchableOpacity,Image,StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

const img='../../assets/Background.jpg'

const Home = () => {
    const navigation = useNavigation()
    return (
  
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor: '#836FFF'}}>
          <Image style={style.logo}   source={require('../../assets/app.png')}/>   
  
            <TouchableOpacity 
            style={style.botao}
            onPress={() => navigation.navigate("InitApp")}>
                <Text style={{color:'#FFF'}} >Iniciar Aplicativo</Text>
            </TouchableOpacity>
  
            <TouchableOpacity 
            style={style.botao}
            onPress={() => navigation.navigate("HelpScreen")}>
                <Text style={{color:'#FFF'}} > Precisa De Ajuda</Text>
            </TouchableOpacity>
        </View>
      
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#836FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logo:{
      justifyContent:'center',
      alignItems:'center',
      resizeMode:'contain',
      borderRadius:10,
      width:200,
      
    },
    botao:{
        width:'50%',
        bottom:'15%',
        margin:5, 
        padding: 8,
        backgroundColor: "#5A158B",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50 

    }
  
  });
export default Home