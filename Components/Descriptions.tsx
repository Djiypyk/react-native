import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const Descriptions = () => {
    return (
        <View style={[styles.desc_main]}>
            <Text style={[styles.name]}>Title</Text>
            <Text style={[styles.desc]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur cupiditate doloremque
                maiores nesciunt quos recusandae ut. </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    desc_main:{
        position: "absolute",
        top: 230,
        margin: 8,
        height: 60
    },
    name:{
        fontSize: 20,
        fontWeight: "700",
    },
    desc: {
        letterSpacing: 0.5,
        lineHeight: 20,
    }
})
