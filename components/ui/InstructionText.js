import { Text, StyleSheet } from "react-native";
import Colors from '../../constants/Colors';

function InstructionText({children, style}) {
    return <Text style={[styles.instructionText ,style]}>{children}</Text>           // birden fazla style array icinde kullanilabilir   children -> yukselt veya azalt
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
        // marginBottom: 50   array in sagindaki bilgi gecerli, yani 12 gecerli olur gameScreen deki
    },
})