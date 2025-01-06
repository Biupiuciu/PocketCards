import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useRouter, useLocalSearchParams, Link, Redirect } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

// import ParallaxScrollView from "@/components/ParallaxScrollView";
import CustomTextInput from "../../components/Input";
import { useState, useRef, useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { NavigationProp } from "@react-navigation/native";
import { promotions } from "../../assets/data/store";
import type { PromotionCard } from "../../assets/data/store";
const width = Dimensions.get("window").width - 48;

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const router = useRouter();
  const local = useLocalSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState(
    Number(local.scrollPositionY) ?? 0
  );

  useEffect(() => {
    if (scrollViewRef.current) {
      console.log("Scroll to:", scrollPosition);
      scrollViewRef.current.scrollTo({ y: scrollPosition, animated: false });
    }
  }, [scrollViewRef]);

  const renderItem = ({ item }: { item: PromotionCard }) => (
    <TouchableOpacity
      style={styles.promotionCard}
      onPress={() => {
        router.push({
          pathname: `/shop/${item.id}` as `/shop/[id]`,
          params: { scrollPositionY: scrollPosition },
        });
      }}
    >
      <Image source={item.image} style={styles.promotionImage} />
      <Text style={styles.promotionName}>{item.shopname}</Text>
      <Text style={styles.promotionDescription}>{item.proname}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.saveContainer}>
      <View style={styles.header}>
        {/* wait map function */}
        <View style={styles.location}>
          <Text style={styles.textTitle}>Melbourne Central</Text>
          <Icon name={"location-outline"} size={24} color={"#111111"} />
        </View>

        <View style={styles.searchBar}>
          <Icon name={"search-outline"} size={24} color={"#111111"} />
          <CustomTextInput
            placeholder="Search"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={styles.body}
        onScroll={(event) => {
          setScrollPosition(event.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
      >
        <Text style={[styles.textTitle, styles.textTitleBotton]}>
          Current Promotions
        </Text>

        <FlatList
          data={promotions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  saveContainer: {
    flex: 1,
    backgroundColor: "#D6F08E",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  header: {
    backgroundColor: "#D6F08E",
    paddingVertical: 24,
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  location: {
    flexDirection: "row",
    marginBottom: 12,
  },
  textTitle: {
    fontSize: 20,
    color: "#111",
  },
  textTitleBotton: {
    marginBottom: 12,
    fontWeight: "500",
  },
  searchBar: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    flexDirection: "row",
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 24,
  },
  promotionCard: {
    // flex: 1,
    width: width / 2 - 6,
    overflow: "hidden",
    alignItems: "flex-start",
  },
  promotionImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
    borderColor: "#E2E2E2",
    borderWidth: 1,
  },
  promotionName: {
    fontSize: 17,
    fontWeight: "black",
  },
  promotionDescription: {
    fontSize: 14,
    color: "#8772CD",
    fontWeight: "bold",
  },
});
