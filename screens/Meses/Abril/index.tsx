import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Abril = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={style.container}>
        <Text style={{  fontWeight: 'bold',fontSize: 30 }}>Abril</Text>

        <Image  style={style.img}   source={require('../../../assets/Meses/Abril.png')}/> 

        <Text style={style.texto}> Abril Verde significa a conscientização sobre a importância da segurança no trabalho. O mês também é 
        chamado de Abril Azul para trazer o debate sobre o autismo, que tem a data 02.04 como o Dia Mundial da Conscientização do Autismo.</Text>


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
  backgroundColor: '#2E8B57',
  alignItems: 'center',
  justifyContent: 'center',
},

img:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:90,
    width:200,
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
export default Abril