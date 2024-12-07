import { router, Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import Post from "../components/Post";
import Navigation from "@/components/Navigation";
/**
 * Start-page.
 * @returns Start screen as SafeAreaView.
 */
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header Section */}
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: Colors.primary[200] }}>
        <Text style={{ 
          fontSize: 28, 
          fontFamily: "primaryBold",
          color: Colors.primary[100],
          marginBottom: 16
        }}>
          Emptea Proposals
        </Text>

        {/* Search Bar */}
        <View style={{
          backgroundColor: "#F5F5F5",
          borderRadius: 8,
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 12
        }}>
          <TextInput
            placeholder="Search posts..."
            placeholderTextColor={Colors.primary[300]}
            style={{
              flex: 1,
              fontFamily: "primaryRegular",
              color: Colors.primary[100],
              padding: 0
            }}
          />
          <TouchableOpacity>
            <Text style={{
              marginLeft: 8,
              color: Colors.accent[600],
              fontFamily: "primaryBold"
            }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filter Button */}
        <TouchableOpacity style={{
          backgroundColor: Colors.accent[600],
          padding: 12,
          borderRadius: 8,
          alignItems: "center"
        }}>
          <Text style={{ 
            color: "white", 
            fontFamily: "primaryBold" 
          }}>
            Filter Posts
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 16 }}>
          {/* Example posts - replace with real data */}
          <Post title="Post Title" content="Post content goes here..." />
          <Post title="Post Title" content="Post content goes here..." />
          <Post title="Post Title" content="Post content goes here..." />
        </View>
      </ScrollView>

      {/* Custom bottom navigation */}
      <Navigation currentRoute="/" />
    </SafeAreaView>
  );
};


export default Home;
