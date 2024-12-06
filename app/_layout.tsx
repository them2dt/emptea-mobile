import { Stack } from "expo-router";
import { useFonts } from "expo-font";

/**
 * Layout page. 
 * Configure app-specific details like Fonts. 
 * */ 
const Layout = () => {
  const [fontsLoaded] = useFonts({
    primaryRegular: require("../assets/fonts/Satoshi-Regular.otf"),
    primaryMedium: require("../assets/fonts/Satoshi-Medium.otf"),
    primaryBold: require("../assets/fonts/Satoshi-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
};

export default Layout;