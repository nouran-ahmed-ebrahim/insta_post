import React from "react";
import {Image, StyleSheet,Text, View } from 'react-native';


export default function CircularImage(props){
    const assets = require('../../assets/images.js');
    return (
      <View>
        <Image style={styles.image}
        source = {assets[props.img]}
        />
      </View>
    )
  }

const styles = StyleSheet.create({

    image: {
      width:35,
      height: 35,
      borderRadius: "50%",
      borderWidth:1
    },  
});