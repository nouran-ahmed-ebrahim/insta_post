import React from "react";
import { StyleSheet, View, Text} from 'react-native';
import ProfileImg from './CircularImage';
import ProfileName from './ProfileName';
import Icon from './Icon';

export default function PostBar(props){
  const IconSize = 20;
      return ( 
       <View style={styles.container}>
         <ProfileImg img = {props.img} />
         <ProfileName name = {props.name}/>
         <View >
           <Icon IconName = "ellipsis-vertical" size= {IconSize}/>  
         </View>
       </View>
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      marginTop:20
    },
    
  });
