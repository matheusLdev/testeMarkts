import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

export default function InputTask({ onAddTask }) {
    const [newTask, setNewTask] = useState('');
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                placeholder='Adicione uma nova tarefa...'
                placeholderTextColor='#006b5c'
                value={newTask}
                onChangeText={(task) => setNewTask(task)}
            />
            <TouchableOpacity
                style={styles.buttonAddTask}
                onPress={handleAddTask}
            >
                <Image
                    source={require('../../../assets/img/add-task.png')}
                    style={styles.imgAddTask}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 60,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        paddingHorizontal: 10,
        color: '#006B5C',
    },
    buttonAddTask: {
        backgroundColor: '#006B5C',
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgAddTask: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});
