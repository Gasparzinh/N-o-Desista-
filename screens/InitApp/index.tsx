import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

const img='../../assets/Background.jpg'
const InitApp = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={style.container}>
           
            <Text style={{color:'#FFF',fontSize: 20,fontWeight:'bold'}}>Cores dos meses na prevenção de doenças e manutenção da saúde:</Text>


            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',margin:5, marginTop: 12, padding: 8, backgroundColor: "#FFF"}}
            onPress={() => navigation.navigate("Janeiro")}>
                <Text>Janeiro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8,backgroundColor: "#A020F0"}}
            onPress={() => navigation.navigate("Fevereiro")}>
                <Text>Fevereiro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#0000FF"}}
            onPress={() => navigation.navigate("Marco")}>
                <Text style={{color:"#FFF"}}>Março</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#008000"}}
            onPress={() => navigation.navigate("Abril")}>
                <Text>Abril</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#FFFF00"}}
            onPress={() => navigation.navigate("Maio")}>
                <Text>Maio</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#FF0000"}}
            onPress={() => navigation.navigate("Junho")}>
                <Text style={{color:"#FFF"}}>Junho</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#FFFF00"}}
            onPress={() => navigation.navigate("Julho")}>
                <Text>Julho</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#FFD700"}}
            onPress={() => navigation.navigate("Agosto")}>
                <Text>Agosto</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,  alignItems:'center',marginTop: 12,margin:5,  padding: 8, backgroundColor: "#228B22"}}
            onPress={() => navigation.navigate("Setembro")}>
                <Text>Setembro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,margin:5,   alignItems:'center',marginTop: 12, padding: 8, backgroundColor: "#FF69B4"}}
            onPress={() => navigation.navigate("Outubro")}>
                <Text>Outubro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ width:'40%',borderRadius:50 ,margin:5,   alignItems:'center',marginTop: 12, padding: 8, backgroundColor: "#0000CD"}}
            onPress={() => navigation.navigate("Novembro")}>
                <Text style={{color:"#FFF"}}>Novembro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{width:'40%',borderRadius:50 , alignItems:'center',marginTop: 12, padding: 8, backgroundColor: "#FF4500"}}
            onPress={() => navigation.navigate("Dezembro")}>
                <Text>Dezembro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.botao}
                onPress={() => navigation.goBack()}>
                <Text style={{color:'#FFF'}}>Voltar</Text>
            </TouchableOpacity>
           
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
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
        width:'60%',
        bottom:'-4%',
        margin:14, 
        backgroundColor: "#5A158B",
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50 

    }
  
  });

export default InitApp