import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

export default function Task({
    task,
    index,
    onDeleteTask,
    onToggleTaskCompletion,
}) {
    return (
        <ListItem bottomDivider style={styles.containerTask}>
            <Icon
                name='delete'
                type='material'
                onPress={() => onDeleteTask(task.id)}
            />
            <ListItem.Content>
                <ListItem.Title
                    style={[
                        styles.textTask,
                        {
                            textDecorationLine: task.completed
                                ? 'line-through'
                                : 'none',
                            color: task.completed ? '#F69D39' : '#011C18',
                        },
                    ]}
                >
                    {task.text}
                </ListItem.Title>
            </ListItem.Content>
            <Icon
                name={task.completed ? 'check-box' : 'check-box-outline-blank'}
                type='material'
                onPress={() => onToggleTaskCompletion(index)}
            />
        </ListItem>
    );
}

const styles = StyleSheet.create({
    containerTask: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
});
