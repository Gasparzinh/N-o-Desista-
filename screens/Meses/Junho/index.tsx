import React from "react";
import { View, Text, TouchableOpacity,Image,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Junho= () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={style.container}>
        <Text style={{  fontWeight: 'bold',fontSize: 30 }}>Junho</Text>

        <Image  style={style.img}   source={require('../../../assets/Meses/Junho.png')}/> 

        <Text style={style.texto}>Vermelho é a cor comemorativa do mês de junho sobre a importância da doação de sangue, que tem a data 14.06 como o 
        Dia Mundial do Doador de Sangue. 
        E o Junho Laranja é voltado para a conscientização sobre a anemia e leucemia.</Text>


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
  backgroundColor: '#FF0000',
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
export default Junho