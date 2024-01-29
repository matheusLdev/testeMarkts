import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/img/logo-markts.png')}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#CCCCCC',
        width: '100%',
    },
    logo: {
        width: 140,
        height: 40,
        resizeMode: 'contain',
    },
});
