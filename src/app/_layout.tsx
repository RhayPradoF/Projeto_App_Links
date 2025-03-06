import {Stack} from "expo-router"; //serve para determinar qual vai ser o tipo de navegação que eu vou usar

import {colors} from "@/styles/colors";

export default function Layout() {
    const backgroundColor = colors.gray[950];

    return (
        <Stack screenOptions={{headerShown: false, //serve para não aparecer o header no app*
                              contentStyle: {backgroundColor}, // isso e uma short sintaxe para backgroundColor: backgroundColor
        }}> 
            <Stack.Screen name="index" />
        </Stack>
    );
}