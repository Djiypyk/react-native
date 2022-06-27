import React from 'react';
import {Image, ImageProps, StyleSheet, TouchableOpacity, TouchableOpacityProps} from "react-native";

export const Icon = ({...restProps}: TouchableOpacityProps & ImageProps) => {
    return (
        <TouchableOpacity>
            <Image style={[styles.icon]} source={restProps.source}/>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
    }
})