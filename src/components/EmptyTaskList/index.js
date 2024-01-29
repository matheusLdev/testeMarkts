import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function EmptyTaskList() {
    return (
        <View style={styles.emptyListContainer}>
            <Image
                source={require('../../../assets/img/notes.png')}
                style={styles.img}
            />
            <Text style={styles.emptyListText}>
                Você não tem tarefas no momento.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyListText: {
        fontSize: 16,
        color: '#CCCCCC',
    },
    img: {
        width: 60,
        height: 100,
        resizeMode: 'contain',
        opacity: 0.2,
    },
});
