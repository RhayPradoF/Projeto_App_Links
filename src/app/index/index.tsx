import { Image, TouchableOpacity, View, FlatList, Modal, Text } from "react-native";

import { colors} from "@/styles/colors";

import { MaterialIcons } from "@expo/vector-icons";

import  styles  from "./styles";

import { Link } from "@/components/link";

import { Categories } from "@/components/categories";

// import { Category } from "@/components/category";

import { Option } from "@/components/option";

//para rotas usa-se o default para definir o que vai ser exportado
//para componentes usa-se o export para definir o que vai ser exportado sem o default

//entre chaves a importação e a nomeada e a sem chaves e a importação padrão (default)
//para rotas o padrão e a importação nomeada

{/*style={{
            color: 'red',
            fontSize: 22
            
        }} exemplo de utilização de estilização inline*/} 

        {/* <Text>
            Meu App
        </Text> 
        
        <Text style = {styles.title}>
        
                Hello React Native!!
        </Text>*/}

        //criando o Header do projeto

export default function Index(){
    return(
        <View style = {styles.container}>
            
            <View style = {styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>

                <TouchableOpacity activeOpacity={0.3}> 
                    {/*O TouchableOpacity faz com que o ícone do mais esteja clicável
                    e o activeOpacity faz com que a opacidade do ícone seja alterada*/}
                <MaterialIcons name ="add" size = {22} color = {colors.green[300]} />
              {/* estou usando uma biblioteca externa para usar o ícone, do expo*/} 
                </TouchableOpacity>
            </View>

            {/* // <Category name = {categories[0].name} icon = {categories[0].icon} isSelected = {true}/>
            /* //por default o isSelected vai ser true, se não colocar nada ele entende como verdadeiro,
             portanto na primeira categoria ele vai aparecer com uma cor */
            //<Category name = "Sites" icon = "language" isSelected = {false}/>
            //<Category name = "Vídeos" icon = "movie" isSelected = {false}/> 
            //comentado porque agora vou usar de forma diferente, chamando pelo components*/

            //tirei o categories e coloquei o Categories para chamar o componente 
            }

            <Categories/>

            <FlatList
                data={["1", "2", "3", "4"]}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link
                        name="Serratec"
                        url="https://serratec.org"
                        onDetails={() => console.log("Clicou")}
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />
            {/* showVerticalScrollIndicator = {false} //serve para não aparecer barrinha de rolagem */}

            <Modal transparent visible={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                Curso
                            </Text>
                            <TouchableOpacity>
                            <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            Serratec
                        </Text>

                        <Text style={styles.modalUrl}>
                            https://serratec.org
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary"/>
                            <Option name="Abrir" icon="language"/>


                        </View>

                    </View>

                </View>

            </Modal>
        </View>
    )
}

