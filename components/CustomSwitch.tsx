import React, { useState } from "react";
import { Switch, View } from "react-native";



const CustomSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
    return (
      <View>
        <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        ></Switch>
      </View>
    );
  }

export default CustomSwitch