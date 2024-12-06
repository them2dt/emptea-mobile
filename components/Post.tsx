import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { router } from "expo-router";

type PostProps = {
  title: string;
  content: string;
};
/**
 * Post component displays a single post with title, content, and interactive elements.
 * Includes a bar chart visualization and action buttons.
 * 
 * @param title - The title text of the post
 * @param content - The main content/body text of the post
 * @returns A styled post component with title, content, chart and buttons
 */
const Post = ({ title, content }: PostProps) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#F5F5F5",
        borderRadius: 12,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Text style={{ fontFamily: "primaryBold", fontSize: 18, flex: 1 }}>{title}</Text>
        <TouchableOpacity
          onPress={() => router.push("/post-details")}
          style={{
            padding: 0,
            marginLeft: 8,
          }}
        >
          <Text style={{ color:Colors.primary[200], fontSize: 16 }}>→</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: "primaryRegular", marginTop: 8 }}>
        {content}
      </Text>

      {/* Bar chart */}
      <View
        style={{
          flexDirection: "row",
          height: 10,
          marginTop: 16,
          gap: 0,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <View style={{ flex: 1, backgroundColor: Colors.primary[500] }} />
        <View style={{ flex: 1, backgroundColor: Colors.primary[300] }} />
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: "row", marginTop: 16, gap: 8 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: Colors.primary[600],
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontFamily: "primaryBold" }}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: Colors.primary[300],
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontFamily: "primaryBold" }}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
