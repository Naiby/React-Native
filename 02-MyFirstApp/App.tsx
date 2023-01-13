import React from "react";
import { SafeAreaView } from "react-native";
import { BoxObjextModelScreen } from "./src/screens/BoxObjextModelScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { HiWordScreen } from "./src/screens/HiWordScreen";

export const App = () => {
  return (
    <>
      <SafeAreaView> 
        {/**It doesn't always catch up with the app */}
        {/* // <HiWordScreen/>
      // <CounterScreen/> */}
        <BoxObjextModelScreen />

      </SafeAreaView>
    </>
  )
}

