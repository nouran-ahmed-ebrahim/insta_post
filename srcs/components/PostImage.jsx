import React from "react";
import {Image, StyleSheet,Text, View } from 'react-native';


export default function PostImage(props){
    const assets = require('../../assets/images.js');

    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source = {assets[props.img]}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{
      // flex : 1,
      // marginTop:50
    },

    image: {
      borderWidth:1,
      height: 550,
      width: 360,
    },  
});