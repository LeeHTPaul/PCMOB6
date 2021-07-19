import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";
import { API, API_POSTS } from "../constants/API";
import axios from "axios";
import { useSelector } from "react-redux";

export default function EditScreen({ navigation }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = useSelector((state) => state.auth.token);
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...isDark ? darkStyles : lightStyles };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title, {marginTop: 20}]}>Edit Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
