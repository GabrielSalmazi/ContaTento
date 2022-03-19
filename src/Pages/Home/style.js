import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 5
    },

    texto: {
        color: "white",
        fontWeight: "bold"
    },

    campo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },

    containerVitorias: {
        backgroundColor: "#212121",
        height: 80,
        width: 80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },

    containerPontos: {
        backgroundColor: "#212121",
        height: 150,
        width: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    containerEspecial: {
        backgroundColor: "#121212",
        height: "90%",
        width: 70,
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    centro: {
        flexDirection: "row",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    btnReset: {
        backgroundColor: "#7460EE",
        height: 55,
        width: 55,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 2,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    hr: {
        borderBottomColor: '#2D2D2D',
        borderBottomWidth: 0.5,
        width: "60%"
    },
    textResetar:{
        color: "white",
        fontWeight: "bold",
        fontSize: 12
    },

    header:{
        width: "100%",
        height: 40,
        backgroundColor: "#7460EE",
        alignItems: "center",
        justifyContent: "center"
    },

    textTime: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },

    textPontosVitorias:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 5
    },

    textoPontos:{
        color: "white",
        fontWeight: "bold",
        fontSize: 36
    },
    maisMenos:{
        color: "#7460EE",
        fontWeight: "bold",
        fontSize: 25
    },

    especial:{
        backgroundColor: "#7460EE",
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    textEspecial:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

    modalOptions:{
        backgroundColor: "#1a1a1a",
        flex: 1,
        justifyContent: "space-between"
    },

    btnVoltar:{
        margin: 15
    },

    containerOptions:{
        padding: 20
    },

    containerTimes:{
        padding: 20
    },

    optionColors:{
        width: "100%",
        height: 85,
        backgroundColor: "#2D2D2D",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    campoTime:{
        width: "100%",
        height: 85,
        backgroundColor: "#2D2D2D",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    blocoColors:{
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#7460EE"
    },

    textCampoTime:{
        color: "silver",
        fontWeight: "bold",
        fontSize: 16
    },

    btnConfirmar:{
        width: "100%",
        height: 60,
        backgroundColor: "#7460EE",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    txtConfirmar:{
        color: "white",
        fontWeight: "bold",
        fontSize: 14
    },

    inputText:{
        width: "90%",
        height: 50,
        backgroundColor: "#242424",
        borderRadius: 8,
        paddingLeft: 20,
        color: "white",
        fontWeight: "bold"
    },

    modalVitoria:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    containerVitoria:{
        width: "75%",
        height: 250,
        borderRadius: 10,
        backgroundColor: "#2D2D2D",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textVitoria:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 20
    },

    textTimeVitoria:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#9688ed",
        marginTop: 20,
  
    },
    btnFecharVitoria:{
        width: "100%",
        height: 50,
        backgroundColor: "#7460EE",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    textFechar:{
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }

});

export default styles