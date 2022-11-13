import React from "react";
import { useFonts } from "expo-font";
import { View, Text, TouchableOpacity, Alert,Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import AppLoading from 'expo-app-loading';

const Fonts=()=>{
    let[fontsLoaded]=useFonts({
        "BigShouldersDisplay-Regular":require("../../assets/fonts/BigShouldersDisplay-Regular.ttf"),
    });
    if (!fontsLoaded){
        return<AppLoading/>;
    }
}
    
const HelpScreen= () => {
    const navigation = useNavigation()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor: '#FBC101',flexDirection:'column' }}>
            

            <TouchableOpacity
                style={{ marginTop: 12, padding: 8,}}
                onPress={() => Alert.alert('ligando para 188')}>
                <Image style={style.logo}   source={require('../../assets/call.png')}/> 
                
            </TouchableOpacity>
            <Text style={style.texto}> 
                Precisa conversar com alguem?
            </Text>

           
            <TouchableOpacity
                style={style.botao}
                onPress={() => navigation.goBack()}>
                <Text style={{color:'#FFF'}}>Voltar</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 30,fontFamily: 'BigShouldersDisplay-Regular',bottom:'1%',marginLeft:-280}}>Toda vida</Text>
            <Text style={{ fontSize: 30,fontWeight:'bold',fontFamily:'Big Shoulders Display',bottom:'1%',marginLeft:-240}}>Importa</Text>

            <Image style={style.img} source={require('../../assets/hug.png')}></Image>
           

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
      borderRadius:90,
      width:100,
      height: 100,
      bottom:'200%'
    },
    texto:{
      width:300,
      justifyContent:'center',
      alignItems:'center',
      fontSize:12,
      marginLeft:100,
      fontWeight:'bold',
      bottom:'20%'
    },
    img:{
        flexDirection:'column',
        marginBottom:-530,
        marginRight:250,
        width:150,
        resizeMode:'contain'
    },
    botao:{
        position:'absolute',
        width:'20%',
        bottom:'10%',
        margin:0, 
        padding: 8,
        backgroundColor: "#5A158B",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20 

    }
  
  });
export default HelpScreen