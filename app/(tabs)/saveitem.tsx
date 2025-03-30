import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

  export default function SaveItem() {
    const Navbar = () => {
      return (
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Details</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
  
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <Navbar />
        <Text>Borntodev</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 60, // เพิ่ม paddingTop ให้มีค่าเท่ากับความสูงของ Navbar
    },
    navbar: {
      backgroundColor: "#ffffff",
      padding: 15,
      alignItems: "center",
      width: "100%",
      position: "absolute",
      top: 0,
      zIndex: 1,
      height: 'auto',
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      flex: 1,
      textAlign: "center",
    },
    backButton: {
      padding: 5,
    },
    notificationButton: {
      padding: 5,
    },
    content:{
      marginTop: 58,
    }
  });

