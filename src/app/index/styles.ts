import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors"; 
//importação flexível de arquivos configurada no tsconfig
//o @ serve para indicar que é um arquivo da pasta src

const styles = StyleSheet.create({ //para conseguir usar isso em outra pasta tem que colocar o export
    container:{
        flex: 1,
        // justifyContent: "center", //serve para o que tiver vir para o centro da página
        //  alignItems: "center", // serve para colocar os itens no centro
        //  flexDirection: "row", //serve para colocar o texto um do lado do outro 
        paddingTop: 62, //serve para dar um espaçamento no topo

    },

    title: {
        color:colors.green[900], 
        fontSize: 22
    },

    header:{
        paddingHorizontal: 24, // significado de padding e que ele vai ter um espaçamento interno
        width: "100%", //serve para determinar que ele ocupe 100% da tela
        flexDirection: "row", //para ficar ao lado do outro
        justifyContent: "space-between", //serve para colocar um item de cada lado
        alignItems: "center", //serve para alinhar os itens no centro
        marginBottom:32, //serve para dar um espaçamento no final do header


    },

    logo:{
        height: 32, // altura
        width: 38, // largura

    },

    links:{

        borderTopWidth: 1,
        borderTopColor: colors.gray[600],

    },

    linksContent:{

        gap:20, 
        padding:24, 
        paddingBottom:100,

    },

    modal:{

        flex:1,
        justifyContent:"flex-end", 

    },

    modalContent:{

        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 32,
        padding:24


    },

    modalHeader:{
        width:"100%",
        flexDirection: "row",
        alignItems:"center", 
        marginBottom:32,
    },

    modalCategory:{
        flex: 1, 
        fontSize:16, 
        fontWeight:"500", 
        color: colors.gray[400], 
    },

    modalLinkName:{
        fontSize:18, 
        fontWeight:"600",
        color: colors.gray[200],

    },

    modalUrl:{
        fontSize:14, 
        color: colors.gray[400],
    },

    modalFooter:{
        flexDirection: "row",
        marginTop: 32, 
        width:"100%", 
        justifyContent:"space-between", 
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical:14, 
    },
});

export default styles; //exportando o styles para poder usar em outro lugar