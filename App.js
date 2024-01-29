import {
    View,
    StyleSheet,
    FlatList,
    Text,
    KeyboardAvoidingView,
} from 'react-native';
import Header from './src/components/Header';
import InputTask from './src/components/InputTask';
import { useState } from 'react';
import Task from './src/components/Task';
import MotivationalMessage from './src/components/MotivationalMessage';
import EmptyTaskList from './src/components/EmptyTaskList';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [motivationalMessage, setMotivationalMessage] = useState(null);
    const [motivationalMessageVisible, setMotivationalMessageVisible] =
        useState(false);

    const addTask = (newTask) => {
        setTasks((prevTasks) => [
            {
                id: Date.now().toString(),
                text: newTask,
                completed: false,
            },
            ...prevTasks,
        ]);
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskIndex) => {
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            const toggledTask = newTasks.splice(taskIndex, 1)[0];
            toggledTask.completed = !toggledTask.completed;

            if (toggledTask.completed) {
                newTasks.push(toggledTask);
                setMotivationalMessage(toggledTask.text);
                setMotivationalMessageVisible(true);
            } else {
                newTasks.unshift(toggledTask);
            }
            return newTasks;
        });
    };

    const countPendingTasks = () => {
        return tasks.filter((task) => !task.completed).length;
    };

    const handleHideMotivationalMessage = () => {
        setMotivationalMessageVisible(false);
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header />
            <View style={styles.containerMain}>
                {tasks.length === 0 ? (
                    <EmptyTaskList />
                ) : (
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <Task
                                key={index}
                                task={item}
                                index={index}
                                onDeleteTask={removeTask}
                                onToggleTaskCompletion={toggleTaskCompletion}
                            />
                        )}
                    />
                )}
                <MotivationalMessage
                    visible={motivationalMessageVisible}
                    onHideMessage={handleHideMotivationalMessage}
                />
            </View>
            <Text style={styles.taskPending}>
                Tarefas Pendentes: ({countPendingTasks()})
            </Text>
            <InputTask onAddTask={addTask} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEE4',
        flex: 1,
        marginTop: 40,
    },
    containerMain: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
    },
    taskPending: {
        color: 'red',
        fontWeight: 'bold',
    },
});
