import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Colors } from "../constants/Colors";
import Navigation from "@/components/Navigation";
import Post from "@/components/Post";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Profile Header Section */}
      <View style={{ padding: 16 }}>
        {/* Profile Image and Stats */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <Image 
            source={{ uri: "https://placekitten.com/100/100" }}
            style={{ 
              width: 100, 
              height: 100, 
              borderRadius: 50,
              borderWidth: 3,
              borderColor: Colors.primary[600]
            }}
          />
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginLeft: 16 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "primaryBold", fontSize: 18 }}>124</Text>
              <Text style={{ fontFamily: "primaryRegular", color: Colors.primary[300] }}>Posts</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "primaryBold", fontSize: 18 }}>1.2K</Text>
              <Text style={{ fontFamily: "primaryRegular", color: Colors.primary[300] }}>Followers</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "primaryBold", fontSize: 18 }}>890</Text>
              <Text style={{ fontFamily: "primaryRegular", color: Colors.primary[300] }}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio Section */}
        <Text style={{ fontFamily: "primaryBold", fontSize: 16 }}>John Doe</Text>
        <Text style={{ fontFamily: "primaryRegular", color: Colors.primary[300], marginTop: 4 }}>
          Digital creator | Making awesome content
        </Text>

        {/* Follow Button */}
        <View
          style={{
            backgroundColor: Colors.primary[600],
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
            marginTop: 16
          }}
        >
          <Text style={{ color: "white", fontFamily: "primaryBold" }}>Follow</Text>
        </View>
      </View>

      {/* Posts Section */}
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 16 }}>
          <Post title="My First Post" content="This is my first post on the platform!" />
          <Post title="Another Post" content="Sharing my thoughts and experiences..." />
          <Post title="Latest Update" content="Check out my latest project updates!" />
          <Post title="Latest Update" content="Check out my latest project updates!" />
          <Post title="Latest Update" content="Check out my latest project updates!" />
          <Post title="Latest Update" content="Check out my latest project updates!" />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <Navigation currentRoute="/profile" />
    </SafeAreaView>
  );
};

export default Profile;
