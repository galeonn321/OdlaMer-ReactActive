import { StyleSheet, Text, View } from "react-native";

export const BottomBox = () => {
  return (
    <View style={background.container}>
      <View style={background.box1}>
        <Text>1</Text>
      </View>
      <View style={background.box2}>
        <Text>2</Text>
      </View>
      <View style={background.box3}>
        <Text style={background.innerText}>3</Text>
      </View>
    </View>
  );
};

const background = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#59CE8F",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
  box1: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    width: 60,
    height: 60,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
  },
  box3: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
  },
  innerText: {
    color: "white",
  },
});
