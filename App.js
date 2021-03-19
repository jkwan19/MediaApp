import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CampaignsList from './src/Components/CampaignsList.js'

const Stack = createStackNavigator();

function App() {
  const [campaigns, setCampaigns] = useState([]);
  //fetch JSON API
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then(res => res.json())
      .then(result => setCampaigns(result.campaigns))
      .catch(error => console.error(error))
  }, []);

  function MainScreen({navigation}) {
    return (
      <View>
        <CampaignsList campaigns={campaigns}/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Main"
          component={MainScreen}
          options={{ title: 'PLUGS'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
