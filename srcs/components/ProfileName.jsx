import React from "react";
import { StyleSheet, View, Text} from 'react-native';


export default function ProfileName(props){
      return ( 
       <View style={styles.container}>
         <Text style={styles.txt}>
            {props.name}
         </Text> 
       </View>
      )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5 ,
        marginTop: 8,
        marginRight: "53%",
    },

    txt:{
        fontStyle: "italic",
        color: "white",
        fontSize: 15
    }
});
