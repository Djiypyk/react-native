import React from 'react';
import {Button} from "../../Button/Button";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export const Links = ({count, description}: LinksPropsT) => {
    return (
        <TouchableOpacity style={[styles.links]}>
            <Button title={count}  width={80}/>
            <Text style={[styles.desc]}>{description}</Text>
        </TouchableOpacity>
    );
};

type LinksPropsT = {
    count: string
    description: string
}

const styles = StyleSheet.create({
    links: {
        alignItems: 'center'
    },
    desc: {
        fontSize: 12,
        marginTop: -12,
    }
})