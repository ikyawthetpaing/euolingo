import { useState } from "react";
import { Modal, Pressable, StyleProp, ViewStyle } from "react-native";

import { layouts } from "@/constants/layouts";
import { useTheme } from "@/context/theme";
import { changeColorOpacity } from "@/lib/utils";

import { Text, View } from "../themed";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export function Dialog({
  children,
  trigger,
  title,
  contentContainerStyle,
}: Props) {
  const { border, background, mutedForeground } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);
  return (
    <>
      <Pressable onPress={openModal}>{trigger}</Pressable>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: changeColorOpacity(background, 0.75),
            cursor: "default",
          }}
          onPress={closeModal}
        >
          <Pressable style={{ cursor: "default" }}>
            <View
              style={{
                width: 300,
                borderWidth: layouts.borderWidth,
                borderColor: border,
                borderRadius: layouts.padding,
                overflow: "hidden",
              }}
            >
              {title && (
                <View
                  style={{
                    borderBottomWidth: layouts.borderWidth,
                    borderBottomColor: border,
                    padding: layouts.padding,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: mutedForeground,
                    }}
                  >
                    Settings
                  </Text>
                </View>
              )}
              <View
                style={[{ padding: layouts.padding }, contentContainerStyle]}
              >
                {children}
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
