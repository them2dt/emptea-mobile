import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Colors } from "../constants/Colors";

type NavigationProps = {
  currentRoute?: string;
};

const Navigation = ({ currentRoute = "/" }: NavigationProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 16,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#F0F0F0",
      }}
    >
      <Text 
        onPress={() => router.replace("/")}
        style={{ 
          fontFamily: "primaryBold",
          color: currentRoute === "/" ? Colors.primary[600] : Colors.primary[300]
        }}
      >
        Home
      </Text>
      <TouchableOpacity
        onPress={() => router.replace("/settings")}
        style={{
          position: 'absolute',
          left: '50%',
          transform: [{ translateX: -25 }],
          top: -25,
          width: 50,
          height: 50,
          backgroundColor: Colors.primary[600],
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 4,
          borderColor: 'white'
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontFamily: 'primaryBold'
          }}
        >
          +
        </Text>
      </TouchableOpacity>
      <Text
        onPress={() => router.replace("/profile")} 
        style={{
          fontFamily: "primaryBold",
          color: currentRoute === "/profile" ? Colors.primary[600] : Colors.primary[300]
        }}
      >
        Profile
      </Text>
    </View>
  );
};

export default Navigation;
