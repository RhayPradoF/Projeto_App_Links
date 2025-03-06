import {Text, Pressable, PressableProps} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

//Qual e a diferença entre o Pressable e o TouchableOpacity?
//A diferença entre eles é que o Pressable tem uma propriedade onPress enquanto o TouchableOpacity tem uma propriedade onPressIn
//ambos são componentes de toque só que o Pressable não tem feedback visual e o TouchableOpacity tem feedback visual

type Props = PressableProps & { 
    //o PressableProps e uma herança que eu estou chamando do Pressable
    //ele tem uma propriedade onPress e outras que eu posso chamar sem ter 
    //que ficar declarando todas

    name: String;
    icon: keyof typeof MaterialIcons.glyphMap; //isso e uma forma de pegar o tipo de um objeto e transformar em uma string
    isSelected: boolean; //estou usando para aplicar múltiplos estilos no meu componente
}
export function Category({name, icon, isSelected, ...rest}: Props) {
    //pode também fazer desestruturando as propriedades que e dessa forma:
    //export function Category(props: Props) essa e a default (que eu queria usar)
    // Exemplo: export function Category ({name, icon}: Props) {}
    // esse ...rest representam o restante das propriedades no meu método(spread operator)
    //tipagens reaproveitáveis são chamadas de spread operator e são muito usadas no React
    //o spread operator e usado para pegar todas as propriedades de um objeto e passar para outro objeto

    const color = isSelected ? colors.green[300] : colors.gray[400];
  //foi feito um ternário para saber se o isSelected e verdadeiro ou falso e ai mudar a cor
  return (
    <Pressable style= {styles.container} {...rest}>

        <MaterialIcons name={icon} size={16} color={color}/>
        <Text style ={[styles.name, {color}]}>{name}</Text>
        
    </Pressable>
  )
}