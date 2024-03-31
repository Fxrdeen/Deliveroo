import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#00CCBB" />
          <TextInput
            placeholder="Restraunts and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>
      <ScrollView className="bg-gray-100" contentContainerStyle={{}}>
        <Categories />
        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our Partners"
          category="Featured"
        />
        <FeaturedRow
          id={2}
          title="Tasty Discounts"
          description="Everyone likes discounts don't they?"
          category="Featured"
        />
        <FeaturedRow
          id={3}
          title="Offers near you!"
          description="Why not order from your local restraunts?"
          category="Featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
