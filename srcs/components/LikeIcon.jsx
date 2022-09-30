import React from "react";
import {TouchableOpacity } from 'react-native';
import IonIcon from '@expo/vector-icons/Ionicons';


export default function IconBar(){
     const [state, setState] = React.useState({LikeColor: 0, iconName: 0});
     const iconColors= ["white", "red"];
     const icons= ["heart-outline", "heart" ];

     const like = () => {
        setState((prevState) => {
              let currentColor = ((prevState.LikeColor +1) % 2) ;
              return {...prevState, 
                LikeColor : currentColor,
                iconName :currentColor};
          
        }); 
        }
        
      return ( 
      <TouchableOpacity style ={{marginRight: 15, marginTop:7 }}>
          <IonIcon name= {icons[state.iconName]}
          size={30}
          color = {iconColors[state.LikeColor]}
          onPress = {like}
          />
      </TouchableOpacity>
      )
  }
