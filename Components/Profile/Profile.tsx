import React from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity, Text} from "react-native";
import {Button} from "../Button/Button";
import {Links} from "./common/Links";

export const Profile = () => {
    return (
        <SafeAreaView style={[styles.main]}>
            <Image style={[styles.img, {borderColor: 'grey'}]}
                   source={{uri: "https://bartoshevich.by/assets/images/blog/optimizaciya-izobrajenii/kitten-small.png"}}/>
          <SafeAreaView>
            <SafeAreaView style={[styles.account_info]}>
                <Links count={'313'} description={'posts'}/>
                <Links count={'156m'} description={'followers'}/>
                <Links count={'42'} description={'following'}/>
            </SafeAreaView>
            <SafeAreaView style={[styles.follow_link__block]}>
                <Button variant={'primary'} height={26} color={'#FFF'} width={200}  title={"Follow"}/>
                <Button variant={'primary'} height={26} color={'#FFF'} width={54}  title={"more"}/>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        position: 'absolute',
        top: 120
    },
    account_info: {
        flexDirection: 'row',
        textAlign: "center",
        alignItems: "center"
    },
    img: {
        borderWidth: 2,
        borderRadius: 50,
        width: 80,
        height: 80,
    },
    follow_link__block: {
        flexDirection: "row"

    }
})