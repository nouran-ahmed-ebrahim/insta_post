import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IconsBar from "./IconsBar";
import PostBar from './PostBar';
import PostImage from './PostImage';

export default function Post() {
  return (
    <View style={styles.container}>
     <PostBar img = "profileImg" name = "Nouran Ahmed" />
     <PostImage img = "postImg"/>
     <IconsBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: "black",
     borderColor: "#fffff",
     borderWidth:1,
     height:"80%",
     marginTop:40,
     width: 361.5

    //  alignItems: 'center',
    //  justifyContent: 'center',
  },
});
