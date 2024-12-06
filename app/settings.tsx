import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import Navigation from "@/components/Navigation";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ 
            fontFamily: "primaryBold", 
            fontSize: 24, 
            marginBottom: 24,
            color: Colors.primary[100]
          }}>
            Settings
          </Text>

          {/* Account Settings */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ 
              fontFamily: "primaryBold",
              fontSize: 16,
              color: Colors.primary[300],
              marginBottom: 16
            }}>
              Account
            </Text>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Edit Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Change Password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Privacy</Text>
            </TouchableOpacity>
          </View>

          {/* Notifications */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ 
              fontFamily: "primaryBold",
              fontSize: 16,
              color: Colors.primary[300],
              marginBottom: 16
            }}>
              Notifications
            </Text>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Push Notifications</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Email Notifications</Text>
            </TouchableOpacity>
          </View>

          {/* About */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ 
              fontFamily: "primaryBold",
              fontSize: 16,
              color: Colors.primary[300],
              marginBottom: 16
            }}>
              About
            </Text>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Help Center</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Terms of Service</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>

          {/* Danger Zone */}
          <View>
            <TouchableOpacity 
              style={[styles.settingItem, { borderColor: '#FF4444' }]}
            >
              <Text style={[styles.settingText, { color: '#FF4444' }]}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Navigation currentRoute="/settings" />
    </SafeAreaView>
  );
};

const styles = {
  settingItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary[200],
  },
  settingText: {
    fontFamily: "primaryRegular",
    fontSize: 16,
    color: Colors.primary[100]
  }
};

export default Settings;
