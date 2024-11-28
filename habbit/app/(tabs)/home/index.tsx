import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const index = () => {
  const [option, setOption] = useState("Today");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <MaterialCommunityIcons
          name="alpha-h-circle"
          size={48}
          color={Colors.icon}
        />
        <Text style={styles.appName}>HabbiT</Text>
        <AntDesign
          onPress={() => router.push("/home/create")}
          name="pluscircleo"
          size={40}
          color={Colors.icon}
        />
      </View>
      <Text style={{ margin: 5, fontSize: 25, fontWeight: "500" }}>Habits</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={[
            styles.pressable,
            {
              backgroundColor: option == "Today" ? Colors.tint : "transparent",
            },
          ]}
          onPress={() => {
            setOption("Today");
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 14 }}>Today</Text>
        </Pressable>

        <Pressable
          style={[
            styles.pressable,
            {
              backgroundColor: option == "Weekly" ? Colors.tint : "transparent",
            },
          ]}
          onPress={() => setOption("Weekly")}
        >
          <Text style={{ textAlign: "center", fontSize: 14 }}>Weekly</Text>
        </Pressable>

        <Pressable
          style={[
            styles.pressable,
            {
              backgroundColor:
                option == "Overview" ? Colors.tint : "transparent",
            },
          ]}
          onPress={() => setOption("Overview")}
        >
          <Text style={{ textAlign: "center", fontSize: 14 }}>Overview</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  appName: {
    fontSize: 35,
    fontWeight: "900",
    color: "black",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressable: {
    padding: 10,
    borderRadius: 25,
  },
});
