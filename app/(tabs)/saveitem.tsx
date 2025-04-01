import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from "react-native";
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
  const TabBar = () => {
    return (
      <View style={styles.tabBar}>
        <View style={styles.Line}>
            <View style={styles.divider} />
        <View style={styles.priceAndCart}>
          <Text style={styles.pricee}>price</Text>
          <View style={styles.add}>
          <Text style={styles.price}>$ 1,190</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Ionicons name="cart-outline" size={24} color="white" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          </View>
           </View>
        </View>
      </View>
          );
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <StatusBar style="auto" />
      <Image
        source={require('@/assets/images/Details.png')}
        style={styles.image}
      />
    <View style={styles.info}>
    <Text style={styles.productName}>Regular Fit Slogan</Text>
      <View style={styles.rating}>
          <Ionicons name="star" size={20} color="orange" />
          <Text style={styles.ratingText}>4.0 / 5</Text>
          <Text style={styles.reviews}>(45 reviews)</Text>
      </View>

      <Text style={styles.description}>
          The name says it all, the right size slightly snugs the body leaving
          enough room for comfort in the sleeves and waist.
      </Text>

      <Text style={styles.sizeTitle}>Choose size</Text>
        <View style={styles.sizeButtons}>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeButtonText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeButtonText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeButtonText}>L</Text>
          </TouchableOpacity>
      </View>
    </View>



      <TabBar />
      <StatusBar style="auto" />
    </View>
    
  );
};

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
  },
  imageContainer:{
    marginTop: 100,
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: 300,
    resizeMode: 'cover',
    backgroundColor: 'lightblue',
    borderRadius: 25,
  },
  tabBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: 'gray',
    padding: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,

  },
  Line: {
    width:'100%',
    height: 180,
  },
  divider: {
    width:'100%',
    backgroundColor: 'lightgray',
    height: 1,
  },
  tabItem: {
    alignItems: "center",
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 4,
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: 'gray',
  },
  sizeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sizeButtons: {
    flexDirection: 'row',
    marginBottom: 16,
    borderColor: 'gray',
  },
  sizeButton: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    margin: 3,

  },
  sizeButtonText: {
    fontSize: 20,
  },

  info: {
    paddingLeft: 10,
    paddingRight: 16,
  },

  productName:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    margin: 12,
  },
  priceAndCart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pricee: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
  add:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    width: '100%',
    paddingHorizontal: 10,
  }
});