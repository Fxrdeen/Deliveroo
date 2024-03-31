import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from "./cards/RestrauntCard";
const FeaturedRow = ({ id, title, description, category }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Yo! Shushi"
          rating="4.5"
          genre="japanese"
          address="123 Main St"
          short_desc="THis is test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Yo! Shushi"
          rating="4.5"
          genre="japanese"
          address="123 Main St"
          short_desc="THis is test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Yo! Shushi"
          rating="4.5"
          genre="japanese"
          address="123 Main St"
          short_desc="THis is test"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Yo! Shushi"
          rating="4.5"
          genre="japanese"
          address="123 Main St"
          short_desc="THis is test"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
