import React from "react";
import { View, Text, TouchableOpacity,Image,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Marco = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={style.container}>
                <Text style={{  fontWeight: 'bold',fontSize: 30 }}>Março</Text>
    
                <Image  style={style.img}   source={require('../../../assets/Meses/Marco.jpg')}/> 
    
                <Text style={style.texto}> O Março Azul traz o debate sobre a prevenção ao câncer colorretal.
                </Text>
    
    
                <TouchableOpacity
                    style={style.botao}
                    onPress={() => navigation.goBack()}>
                    <Text adjustsFontSizeToFit style={{color:"#FFF"}}>Voltar</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    const style = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#4169E1',
          alignItems: 'center',
          justifyContent: 'center',
        },
    
        img:{
            justifyContent:'center',
            alignItems:'center',
            borderRadius:80,
            width:300,
            height: 200,
            marginTop:30
            //bottom:'200%'
        },
        texto:{
            alignItems: 'center',
            fontSize:20,
            justifyContent:'center',
            margin:40,
        },
       
        botao:{
            width:'50%',
            //bottom:'15%',
            margin:5, 
            padding: 8,
            backgroundColor: "#000000",
            justifyContent:'center',
            alignItems:'center',
            borderRadius:50 
    
        }
      
      });
export default Marco