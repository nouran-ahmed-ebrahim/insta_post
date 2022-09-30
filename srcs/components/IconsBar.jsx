import React from "react";
import { StyleSheet, View } from 'react-native';
import LikeIcon from './LikeIcon';
import Icon from './Icon';

export default function IconBar(){
  const IconSize = 28;
      return ( 
       <View style={styles.container}>
        <LikeIcon/>
        <Icon IconName = "chatbubble-outline" size= {IconSize}/>  
        <Icon IconName = "share-outline" size= {IconSize}/>  
       </View>
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:4,
      flexDirection: "row",
    },
  });
