import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const SavedItemsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Saved Items</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* ใช้ ScrollView ครอบรายการสินค้า */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.itemsGrid}>

          {/* ไอเทมที่ 1 */}
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Slogan</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          {/* ไอเทมที่ 2 */}
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Polo</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          {/* ไอเทมที่ 3 */}
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Black</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          {/* ไอเทมที่ 4 */}
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit V-Neck</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          {/* ไอเทมที่ 5 */}
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Slogan</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          {/* ไอเทมที่ 6 */}
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Slogan</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Slogan</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/Details.png')} style={styles.itemImage} />
            <Text style={styles.itemName}>Regular Fit Slogan</Text>
            <Text style={styles.itemPrice}>$1,190</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>❤️</Text>
            </TouchableOpacity>
          </View>

         

        </View>
      </ScrollView>
    </View>
  );
};

export default SavedItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  navbar: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    padding: 5,
  },
  notificationButton: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  itemsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "48%", // ทำให้แต่ละไอเทมกินพื้นที่ 48% ของแถว (เพื่อทำ Grid 2 คอลัมน์)
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
  },
  itemImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position:'absolute',
    top:10,
    right:10,
    
  },
  favoriteIcon: {
    fontSize: 20,
    color: 'red',
  },
});
