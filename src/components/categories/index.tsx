import { FlatList } from "react-native";

//A FlatList e um componente do React Native que permite renderizar 
//listas de elementos de forma otimizada, ela e mais performática do que o 
//ScrollView pq ela só carrega os elementos que estão visíveis na tela,
//além disso, ela tem uma propriedade chamada keyExtractor que ajuda 
//a identificar unicamente cada item da lista, e a propriedade renderItem 
//que e usada para renderizar cada item da lista.

import { Category } from "@/components/category";

import { categories } from "@/utils/categories";

import { styles } from "./styles";

export function Categories() {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (<Category name={item.name} icon={item.icon} isSelected={false} />

            )}
            horizontal
            style = {styles.container}
            contentContainerStyle = {styles.content}
            showsHorizontalScrollIndicator = {true} //serve para não aparecer barrinha de rolagem

        />
    );
}