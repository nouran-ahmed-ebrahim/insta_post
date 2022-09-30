import React from "react";
import {TouchableOpacity } from 'react-native';
import IonIcon from '@expo/vector-icons/Ionicons';

export default function Icon(props){
      return ( 
      <TouchableOpacity style ={{marginRight: 15, marginTop: 7}}>
          <IonIcon name={props.IconName} size={props.size} color= "white"/>
      </TouchableOpacity>
      )
  }

// share-outline
// chatbubble-outline
// ellipsis-vertical