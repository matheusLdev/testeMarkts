import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MotivationalMessage({ visible, onHideMessage }) {
    const motivationalMessages = [
        'Parabéns pela conquista!',
        'Você é incrível!',
        'O sucesso é atingido duas vezes: A primeira na mente e a segunda no mundo real.',
        'Uma meta é um sonho com prazo',
        'Ter uma melhora constante é melhor que a perfeição adiada.',
        'Coloque seu coração, mente e alma até mesmo nas menores coisas que você fizer. Esse é o segredo para o sucesso.',
        'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.',
        'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo',
        'A persistência é o caminho do êxito',
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    ];
    const [randomMessage, setRandomMessage] = useState('');

    useEffect(() => {
        let timeoutId;
        if (visible) {
            const randomIndex = Math.floor(
                Math.random() * motivationalMessages.length
            );
            setRandomMessage(motivationalMessages[randomIndex]);
            timeoutId = setTimeout(() => {
                onHideMessage();
            }, 1000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [visible, onHideMessage]);

    if (!visible) {
        return null;
    }

    return (
        <View style={styles.motivationalMessageContainer}>
            <Text style={styles.motivationalMessageText}>{randomMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    motivationalMessageContainer: {
        position: 'absolute',
        top: -40,
        right: 0,
        backgroundColor: '#006B5C',
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    motivationalMessageText: {
        color: '#FFFFFF',
    },
});
