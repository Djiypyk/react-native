import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Button} from "./Button/Button";

export const Header = () => {
    return (
        <SafeAreaView style={[styles.header]}>
            <Button width={150} title={'<'}/>
            <Text style={[styles.title]}>I100gram</Text>
            <Button width={150} title={"..."}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        position: 'absolute',
        top: 0
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 15,
    }
})