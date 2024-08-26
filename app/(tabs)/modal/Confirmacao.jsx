import React, { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';


export default function Confirmacao(props) {

    const [modal, setModal] = useState(false);
    const [confirmar, setConfirmar] = useState()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal);
            }}>
            <Text>{props.mensagem}</Text>
            <View>
                <Pressable>Confirmar</Pressable>
                <Pressable>Confirmar</Pressable>
            </View>
        </Modal>
    );
};