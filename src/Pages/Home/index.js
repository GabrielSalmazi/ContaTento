import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Modal, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVitoriaVisible, setModalVitoriaVisible] = useState(false);
    const [ganhadorRodada, setGanhadorRodada] = useState("")
    const [nomeTime1, setNomeTime1] = useState("Time");
    const [nomeTime2, setNomeTime2] = useState("Time");

    const [pontosTime1, setPontosTime1] = useState(0);
    const [pontosTime2, setPontosTime2] = useState(0);

    const [vitoriasTime1, setVitoriasTime1] = useState(0);
    const [vitoriasTime2, setVitoriasTime2] = useState(0);

    function ganhaPonto(quantidade, time) {
        if (time == 1) {
            setPontosTime1(pontosTime1 + quantidade);
            if ((pontosTime1 + quantidade >= 12)) {
                setModalVitoriaVisible(true)
                setVitoriasTime1(vitoriasTime1 + 1);
                setPontosTime1(0)
                setGanhadorRodada(nomeTime1)
            }
        }
        else {
            setPontosTime2(pontosTime2 + quantidade);
            if ((pontosTime2 + quantidade >= 12)) {
                setModalVitoriaVisible(true)
                setVitoriasTime2(vitoriasTime2 + 1)
                setPontosTime2(0)
                setGanhadorRodada(nomeTime2)
            }
        }

        vitoria(time, quantidade)       
    }
    
   
    /*function vitoria(time, quantidade){
        console.log("a")
        if ((time == 1) && (pontosTime1 + quantidade >= 12)) {
            setModalVitoriaVisible(true)
        }
        if ((time != 1) && (pontosTime2 + quantidade >= 12)) {
            setModalVitoriaVisible(true)
        }
    }*/

    function tiraPonto(quantidade, time) {
        if (time == 1) {
            setPontosTime1(pontosTime1 - quantidade);
        }
        else {
            setPontosTime2(pontosTime2 - quantidade);
        }
    }

    function reset() {
        setPontosTime1(0);
        setPontosTime2(0);

        setNomeTime1("Time 1");
        setNomeTime2("Time 2");

        setVitoriasTime1(0);
        setVitoriasTime2(0);
    }

    function vitoria(time) {
        if (time == 1 && pontosTime1 >= 12) {
            setVitoriasTime1(vitoriasTime1 + 1)
            setPontosTime1(0)
            setModalVitoriaVisible(true)
        }
        if (time != 1 && pontosTime2 >= 12) {
            setVitoriasTime2(vitoriasTime2 + 1)
            setPontosTime2(0)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTime}>{nomeTime1}</Text>
            </View>
            <View style={styles.campo}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.containerVitorias}>
                        <Icon name="star" size={25} color={"#FFF85C"} />
                        <Text style={styles.textPontosVitorias}>{vitoriasTime1}</Text>
                    </View>

                    <View style={styles.containerPontos}>
                        <TouchableOpacity onPress={() => ganhaPonto(1, 1)}>
                            <Text style={styles.maisMenos}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.textoPontos}>{pontosTime1}</Text>
                        {pontosTime1 == 0 ?
                            <TouchableOpacity>
                                <Text style={styles.maisMenos}>-</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => tiraPonto(1, 1)}>
                                <Text style={styles.maisMenos}>-</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>

                <View style={styles.containerEspecial}>
                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(3, 1)}>
                        <Text style={styles.textEspecial}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(6, 1)}>
                        <Text style={styles.textEspecial}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(9, 1)}>
                        <Text style={styles.textEspecial}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(12, 1)}>
                        <Text style={styles.textEspecial}>12</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.centro}>
                <TouchableOpacity style={styles.btnReset} onPress={reset}>
                    <Text style={styles.textResetar}>Reset</Text>
                </TouchableOpacity>

                <View style={styles.hr} />

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon name="gear" size={25} color={"white"} style={{ marginRight: 5 }} />
                </TouchableOpacity>

            </View>
            <View style={styles.campo}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.containerVitorias}>
                        <Icon name="star" size={25} color={"#FFF85C"} />
                        <Text style={styles.textPontosVitorias}>{vitoriasTime2}</Text>
                    </View>

                    <View style={styles.containerPontos}>
                        <TouchableOpacity onPress={() => ganhaPonto(1, 2)}>
                            <Text style={styles.maisMenos}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.textoPontos}>{pontosTime2}</Text>
                        {pontosTime2 == 0 ?
                            <TouchableOpacity>
                                <Text style={styles.maisMenos}>-</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => tiraPonto(1, 2)}>
                                <Text style={styles.maisMenos}>-</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>

                <View style={styles.containerEspecial}>
                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(3, 2)}>
                        <Text style={styles.textEspecial}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(6, 2)}>
                        <Text style={styles.textEspecial}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(9, 2)}>
                        <Text style={styles.textEspecial}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.especial} onPress={() => ganhaPonto(12, 2)}>
                        <Text style={styles.textEspecial}>12</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.header}>
                <Text style={styles.textTime}>{nomeTime2}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modalOptions}>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "position" : null}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}
                    >
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.btnVoltar}>
                            <Icon name="chevron-left" size={25} color={"white"} />
                        </TouchableOpacity>


                        <View style={styles.containerOptions}>
                            <View style={styles.optionColors}>
                                <View style={styles.blocoColors}>

                                </View>

                                <View style={styles.blocoColors}>

                                </View>

                                <View style={styles.blocoColors}>

                                </View>

                                <View style={styles.blocoColors}>

                                </View>
                            </View>
                        </View>


                        <View style={styles.containerTimes}>
                            <Text style={styles.textCampoTime}>Nome do time 1</Text>
                            <View style={styles.campoTime}>
                                <TextInput
                                    style={styles.inputText}
                                    value={nomeTime1}
                                    onChangeText={(texto) => setNomeTime1(texto)}
                                />
                            </View>
                        </View>

                        <View style={styles.containerTimes}>
                            <Text style={styles.textCampoTime}>Nome do time 2</Text>
                            <View style={styles.campoTime}>
                                <TextInput
                                    style={styles.inputText}
                                    value={nomeTime2}
                                    onChangeText={(texto) => setNomeTime2(texto)}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    <TouchableOpacity style={styles.btnConfirmar} onPress={() => setModalVisible(false)}>
                        <Text style={styles.txtConfirmar}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVitoriaVisible}
            >
                <View style={styles.modalVitoria}>
                    <View style={styles.containerVitoria}>
                        <Text style={styles.textVitoria}>Vitória</Text>
                        <Icon name="star" size={50} color={"#FFF85C"} />
                        <Text style={styles.textTimeVitoria}>{ganhadorRodada}</Text>
                        <TouchableOpacity onPress={() => setModalVitoriaVisible(false)} style={styles.btnFecharVitoria}>
                            <Text style={styles.textFechar}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}