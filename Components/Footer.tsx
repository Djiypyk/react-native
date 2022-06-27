import React from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {Button} from "./Button/Button";
import {Icon} from "./Icon/Icon";

export const Footer = () => {
    return (
        <SafeAreaView style={[styles.header]}>
            <Icon source={{uri: "https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Home-256.png"}}/>
            <Icon source={{uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-256.png"}}/>
            <Icon source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-camera-outline-256.png"}}/>
            <Icon source={{uri: "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/39.Heart-512.png"}}/>
            <Icon source={{uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male4-256.png"}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        position: 'absolute',
        bottom: 0
    },
})