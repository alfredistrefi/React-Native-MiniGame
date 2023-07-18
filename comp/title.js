import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function Title({children,}){
return(
    <Text style={styles.title}>{children}</Text>
)
}

export default Title;


const styles = StyleSheet.create({
   
    title:{
      fontSize:28,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      borderWidth:2,
      borderColor: 'black',
      padding:12,
      borderRadius:29,
    }
  });
  