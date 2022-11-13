import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Janeiro = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={style.container}>
            <Text style={{  fontWeight: 'bold',fontSize: 30 }}>Janeiro</Text>

            <Image  style={style.img}   source={require('../../../assets/Meses/Janeiro.jpg')}/> 

            <Text style={style.texto}> Janeiro Branco é um alerta sobre a saúde mental. A campanha busca demonstrar a importância que cuidar 
                da saúde não significa apenas cuidar da saúde do corpo. Cuidar da mente também é fundamental para o total 
                bem-estar e equilíbrio entre corpo e mente.
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
      backgroundColor: '#FFFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },

    img:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:90,
        width:200,
        height: 200,
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
export default Janeiro