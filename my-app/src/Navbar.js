import React from 'react'
import {View,Text,StyleSheet} from  'react-native '

export const Navbar = (props) => {
     return (
        <View styles={styles.navbar}>
            <Text style ={styles.text}>Todo app</Text>
        </View>
     )
}

const styles = StyleSheet.create({
    navbar : {
        color : red
    }
})