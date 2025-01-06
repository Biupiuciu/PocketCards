import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface CustomTextInputProp {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}
const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: CustomTextInputProp) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={30}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    fontSize: 17, // 字体大小
    color: "#111", // 字体颜色
  },
});

export default CustomTextInput;
