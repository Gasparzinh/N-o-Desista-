import React from "react";
import { View, Text, TouchableOpacity,Image,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Setembro = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={style.container}>
        <Text style={{  fontWeight: 'bold',fontSize: 30 }}>Setembro</Text>

        <Image  style={style.img}   source={require('../../../assets/Meses/Setembro.jpg')}/> 

        <Text style={style.texto}>Verde é a cor do mês de setembro para a conscientização sobre a doação de órgãos e prevenção ao câncer de intestino. 
        Neste mês, a data 27 de setembro é o Dia Nacional de Doação de Órgãos e Tecidos. Outra cor para o mês de setembro é o amarelo, 
        que tem como objetivo a prevenção ao suicídio. 
        Setembro também recebe a cor vermelha para a conscientização sobre a prevenção das doenças cardiovasculares.</Text>


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
  backgroundColor: '#FFFF00',
  alignItems: 'center',
  justifyContent: 'center',
},

img:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
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
export default Setembro