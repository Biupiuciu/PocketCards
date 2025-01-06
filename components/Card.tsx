import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
export interface CardProp {
  id: number;
  goalPoint: number;
  currentPoint: number;
  promName: string;
  isRedeemed: boolean;
}
const Card = ({ item }: { item: CardProp }) => {
  let status = "Processing";
  if (item.isRedeemed) {
    status = "Redeemed";
  } else if (item.goalPoint == item.currentPoint) {
    status = "Unredeemed";
  }
  return (
    <View
      style={[
        styles.cardContainer,
        item.goalPoint == item.currentPoint && styles.greenContainer,
        item.isRedeemed && styles.greyContainer,
      ]}
    >
      <View style={styles.cardBoday}>
        {!item.isRedeemed && (
          <View style={styles.pointContainer}>
            <Text
              style={styles.currentPointText}
            >{`${item.currentPoint}/${item.goalPoint}`}</Text>
          </View>
        )}
        <View style={styles.centerImage}>
          {item.isRedeemed ? (
            <Image
              source={require("../assets/images/coffee.png")}
              style={styles.image}
            />
          ) : (
            <TouchableOpacity style={styles.codeContainer}>
              <QRCode
                value={item.id.toString()}
                size={90}
                color="#111"
                backgroundColor="#fff"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.cardTitle}>
        <Text style={[styles.cardTitleText, styles.cardTitleLeft]}>
          {item.promName}
        </Text>
        <Text style={styles.cardTitleText}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 200,
    marginBottom: 12,
    borderRadius: 30,
    backgroundColor: "#8772CD",
    flexDirection: "column",
  },
  greenContainer: {
    backgroundColor: "#D6F08E",
  },
  greyContainer: {
    backgroundColor: "#C9C9C9",
  },
  cardBoday: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  pointContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 24,
    left: 24,
    alignItems: "flex-end",
  },
  goalPointText: {
    color: "#fff",
    fontSize: 20,
  },
  currentPointText: {
    color: "#fff",
    fontSize: 28,
  },
  centerImage: {
    height: 100,
    width: 100,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  codeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cardTitleText: {
    fontWeight: "bold",
    color: "#fff",
  },
  cardTitleLeft: {
    flex: 1,
  },
});

export default Card;
