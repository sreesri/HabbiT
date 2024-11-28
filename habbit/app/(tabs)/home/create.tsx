import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, HabbitColors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Days } from "@/constants/Consts";

const create = () => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.arrow} name="arrow-back-circle-outline" />

      <Text style={styles.createHabbit}>Create Habbit</Text>
      <TextInput style={styles.textInput} placeholder="Habbit"></TextInput>

      <View style={styles.flexRow}>
        {HabbitColors.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <FontAwesome name="square" size={30} color={item} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontSize: 18, fontWeight: "500" }}>Repeat</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <Pressable style={styles.repeatPeriod}>
          <Text style={{ textAlign: "center" }}>Daily</Text>
        </Pressable>
        <Pressable style={styles.repeatPeriod}>
          <Text style={{ textAlign: "center" }}>Weekly</Text>
        </Pressable>
      </View>

      <Text style={{ fontSize: 18, fontWeight: "500" }}>On These Days</Text>
      <View style={styles.flexRow}>
        {Days.map((day, index) => (
          <Pressable style={styles.days}>
            <Text style={{ textAlign: "center" }}>{day}</Text>
          </Pressable>
        ))}
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Reminder</Text>
        <Text style={{ fontSize: 17, fontWeight: "600", color: Colors.tint }}>
          Yes
        </Text>
      </View>

      <Pressable
        style={{
          margin: 25,
          backgroundColor: Colors.tint,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "500" }}>Save</Text>
      </Pressable>
    </View>
  );
};

export default create;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.background,
    height: "100%",
  },
  arrow: {
    fontSize: 40,
    color: "black",
  },
  createHabbit: {
    marginTop: 15,
    fontWeight: "800",
    fontSize: 28,
  },
  textInput: {
    width: "100%",
    marginTop: 15,
    padding: 15,
    backgroundColor: Colors.tint,
    borderRadius: 25,
  },
  flexRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    alignItems: "center",
  },
  repeatPeriod: {
    backgroundColor: Colors.tint,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  days: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
