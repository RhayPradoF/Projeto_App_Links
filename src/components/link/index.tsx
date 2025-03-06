import { Text, View, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

import { colors } from '@/styles/colors';

type Props = {

    name:String;
    url: String;
    onDetails: () => void;
}

export function Link({name, url, onDetails}: Props) {

    return (
       <View style={styles.container}>
        <View style={styles.details}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            {/*numberOfLines={1} serve para quebrar a linha em apenas uma linha,
            se o texto for muito grande, ele vai quebrar a linha e mostrar
            reticências no final */ }

            <Text style={styles.url} numberOfLines={1}>{url}</Text>

            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]}/> 
            </TouchableOpacity>       
        
            </View>
        </View>


    );
}