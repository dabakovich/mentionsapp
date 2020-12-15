import React, { FC, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Mentions, MentionSuggestionsProps } from "react-native-controlled-mentions";

const users = [
  { id: "1", name: "David Tabaka" },
  { id: "2", name: "Mary" },
  { id: "3", name: "Tony" },
  { id: "4", name: "Mike" },
  { id: "5", name: "Grey" },
];

const MentionSuggestions: FC<MentionSuggestionsProps> = ({ keyword, onSuggestionPress }) => {
  if (keyword == null) {
    return null;
  }

  return (
    <View>
      {users
        .filter(one => one.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
        .map(one => (
          <Pressable
            key={one.id}
            onPress={() => onSuggestionPress(one)}

            style={{ padding: 12 }}
          >
            <Text>{one.name}</Text>
          </Pressable>
        ))}
    </View>
  );
};

const MentionsApp: FC = () => {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView>
      <Mentions
        autoFocus
        value={value}
        onChange={setValue}
        renderSuggestions={MentionSuggestions}
        style={{ padding: 12 }}
        placeholder="Type here..."
      />
    </SafeAreaView>
  );
};

export { MentionsApp };
