import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface Item {
  title: string;
  value: string;
  selected?: boolean;
}

interface RadioSelectorProps {
  items: Item[];
  onSelect?: (value: string) => void;
}

export function RadioSelector({ items, onSelect }: RadioSelectorProps) {
  const [selectorItems, setSelectorItems] = useState<Item[]>(items);

  useEffect(() => {
    onSelect(selectorItems.find((item) => item.selected).value);
  }, [selectorItems]);

  function handleSelect(selectedIndex: number) {
    const itemsSelected = selectorItems.map((item, index) => {
      return { ...item, selected: selectedIndex === index };
    });

    setSelectorItems(itemsSelected);
  }

  return (
    <View style={styles.container}>
      {selectorItems.map((item, index, arr) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => handleSelect(index)}
          activeOpacity={0.8}
          style={{
            ...styles.itemContainer,
            marginHorizontal: index !== 0 && index !== arr.length - 1 ? 10 : 0,
          }}
        >
          <Feather
            name={item.selected ? "check-circle" : "circle"}
            size={16}
            color={theme.colors.purple900}
          />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
