import { StatusBar } from "react-native";
import { BottomBox } from "./components/bottomBox/BottomBox";
import { TopBox } from "./components/topbox/TopBox";

export default function App() {
  return (
    <>
      <TopBox />
      <BottomBox/>
      <StatusBar style="auto" />
    </>
  );
}
