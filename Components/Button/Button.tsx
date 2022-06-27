import React from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

export const Button = ({
                           title,
                           variant = 'default',
                           height = styles.button.height,
                           color,
                           width,
                           ...restProps
                       }: ButtonP & TouchableOpacityProps) => {
    return (
        <>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: colors[variant], height: height,  width: width}]}
                {...restProps}>
                <Text style={[styles.button_text, {color: color}]}>{title}</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 46,
        width: 250,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 4,
    },
    button_text: {
        color: '#181818',
        fontSize: 18,
    },
});

type V = 'default' | 'error' | 'primary'

interface ButtonP {
    variant?: V
    title: string
    width?: number
    height?: number
    color?: string
}

const colors: { [Key in V]: string } = {
    primary: '#0031d4',
    default: '#e5e5e5',
    error: '#ff0202',
}
