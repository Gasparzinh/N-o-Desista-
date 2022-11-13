import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

import Home from "../../screens/Home"
import HelpScreen from "../../screens/HelpScreen"
import InitApp from "../../screens/InitApp";
//Meses
import Janeiro from "../../screens/Meses/Janeiro"
import Fevereiro from "../../screens/Meses/Fevereiro"
import Marco from "../../screens/Meses/Marco"
import Abril from "../../screens/Meses/Abril"
import Maio from "../../screens/Meses/Maio"
import Junho from "../../screens/Meses/Junho"
import Julho from "../../screens/Meses/Julho"
import Agosto from "../../screens/Meses/Agosto"
import Setembro from "../../screens/Meses/Setembro"
import Outubro from "../../screens/Meses/Outubro"
import Novembro from "../../screens/Meses/Novembro"
import Dezembro from "../../screens/Meses/Dezembro"


const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            
            <Screen name="Home" component={Home} />
            <Screen name="HelpScreen" component={HelpScreen} />
            <Screen name="InitApp" component={InitApp} />

            <Screen name="Janeiro" component={Janeiro} />
            <Screen name="Fevereiro" component={Fevereiro} />
            <Screen name="Marco" component={Marco} />
            <Screen name="Abril" component={Abril} />
            <Screen name="Maio" component={Maio} />
            <Screen name="Junho" component={Junho} />
            <Screen name="Julho" component={Julho} />
            <Screen name="Agosto" component={Agosto} />
            <Screen name="Setembro" component={Setembro} />
            <Screen name="Outubro" component={Outubro} />
            <Screen name="Novembro" component={Novembro} />
            <Screen name="Dezembro" component={Dezembro} />
          
        </Navigator>
    )
}
