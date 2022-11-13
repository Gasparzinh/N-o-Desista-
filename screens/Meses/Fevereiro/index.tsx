import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Fevereiro = () => {
    const navigation = useNavigation<propsStack>()
    return (
            <View style={style.container}>
                <Text style={{  fontWeight: 'bold',fontSize: 30 }}>Fevereiro</Text>
    
                <Image  style={style.img}   source={require('../../../assets/Meses/Fevereiro.jpeg')}/> 
    
                <Text style={style.texto}> Fevereiro Roxo é o mês de conscientização sobre as doenças: lúpus, fibromialgia e mal de alzheimer.
                 O Fevereiro Laranja, por sua vez, conscientiza sobre a leucemia.
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
          backgroundColor: '#8A2BE2',
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

export default Fevereiro