import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { promotions } from "../../assets/data/store";
import { cards } from "..//../assets/data/cards";
import Card from "../../components/Card";

import type { PromotionCard } from "../../assets/data/store";

const ShopPage = () => {
  const router = useRouter();
  const [chosenProm, setChosenProm] = useState(0);
  const [showTerm, setShowTerm] = useState(false);
  const { id, scrollPositionY } = useLocalSearchParams();
  const data = [
    {
      id: 0,
      title: "Buy 5 get 1 free",
      rule: `Applicable to specific categories such as beverages, snacks, or packaged goods.\nItems part of this promotion must be in stock and not part of any other ongoing offers.\nExcludes perishable items such as fresh produce or bakery items.`,
    },
    {
      id: 1,
      title: "Buy 5 get 50% Discount",
      rule: `Valid for apparel, accessories, or home goods.\nApplies to items with a value of $10 or higher.\nLimited to 2 items per transaction; additional items revert to standard pricing.
      `,
    },
  ];
  const item = promotions.filter((item) => {
    return item.id.toString() == id;
  })[0];

  const handleSwitch = (id: number) => {
    setChosenProm(id);
  };

  const renderProms = (
    { item }: any //any for now
  ) => (
    <TouchableOpacity
      style={[
        chosenProm == item.id
          ? styles.promChosenColor
          : styles.promUnchosenColor,
        styles.promContainer,
      ]}
      onPress={() => {
        handleSwitch(item.id);
      }}
    >
      <Text style={styles.subText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.shopHeader}>
          <Image source={item.background} style={styles.headerImage} />
          <TouchableOpacity
            style={styles.IconContainer}
            onPress={() => {
              router.back();
              router.setParams({ scrollPositionY: scrollPositionY });
            }}
          >
            <Icon name={"chevron-back-outline"} size={24} color={"#ffffff"} />
          </TouchableOpacity>
          <Image source={item.image} style={styles.logoImage} />
        </View>
        <View style={styles.shopInfo}>
          <Text style={styles.textTitle}>{item.shopname}</Text>
          <Text style={styles.subText}>{item.address}</Text>
        </View>

        <FlatList
          data={data}
          renderItem={renderProms}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promsContainer}
        />
        <View style={styles.CardContainer}>
          <TouchableOpacity
            style={styles.guideTitle}
            onPress={() => {
              setShowTerm(!showTerm);
            }}
          >
            <Text style={[styles.Text, styles.guideText]}>
              What you need to know
            </Text>
            <Icon
              name={showTerm ? "chevron-up-outline" : "chevron-down-outline"}
              size={24}
              color={"#111111"}
            />
          </TouchableOpacity>

          {showTerm ? (
            <Text style={styles.rulesContainer}>{data[chosenProm].rule}</Text>
          ) : (
            <View style={styles.horizontalLine}></View>
          )}
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F8F8F8",
  },
  IconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 24,
    left: 24,
  },
  textTitle: {
    fontSize: 20,
    color: "#111",
    fontWeight: "500",
  },

  subText: {
    fontSize: 14,
    color: "#111",
  },
  Text: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  shopHeader: {
    height: 180,
    position: "relative",
  },
  shopInfo: {
    marginTop: 65,
    alignItems: "center",
    marginBottom: 24,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logoImage: {
    position: "absolute",
    bottom: -50,
    alignSelf: "center",
    height: 100,
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    borderColor: "#F8F8F8",
    borderWidth: 4,
  },

  CardContainer: {
    paddingTop: 12,
    paddingHorizontal: 24,
    flexDirection: "column",
  },
  promsContainer: {
    paddingLeft: 24,
  },
  promChosenColor: {
    backgroundColor: "#8772CD",
  },
  guideTitle: {
    flexDirection: "row",
  },
  promUnchosenColor: {
    backgroundColor: "#E2E2E2",
  },
  promContainer: {
    borderRadius: 30,
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#111",
  },
  textContainer: {
    position: "relative",
  },
  textGrey: {
    color: "#E2E2E2",
  },
  guideText: {
    flex: 1,
  },
  rulesContainer: {
    // backgroundColor: "#e1e1e1",
    marginTop: 5,
    marginBottom: 24,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#111",
    marginTop: 10,
    marginBottom: 16,
  },
  line: {
    position: "absolute",
    bottom: -5,
    left: 0,
    width: "100%",
    height: 4,
    backgroundColor: "#8772CD",
    borderRadius: 2,
  },
});
export default ShopPage;
