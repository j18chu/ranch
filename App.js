import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Alert, Navigator, TouchableHighlight, Text, Image, TextInput } from 'react-native';
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';


function Home({ navigation }) {
  return (
    <View style={styles.title}>
      <Text>Here is the home screen.</Text>
      <Button
        title="Move to next page"
        color="blue"
        onPress={() => navigation.navigate("Second")}
      />
    </View>
  );
}

function ScreenTwo({ navigation }) {
  return (
    <View style={styles.title}>
      <Text>Second screen.</Text>
      <Button
        title="Third"
        color="green"
        onPress={() => Alert.alert("You are stupid")}
      />
    </View>
  );
}

function ScreenThree() {
  return (
    <SafeAreaView style={styles.title}>
      <View>
        <Text>This is a labradoodle.</Text>
        <Image
          source={{
            uri: "https://uptownpuppies.com/wp-content/themes/mega-theme/images/labradoodleopennew.jpg",
            }}
            style={styles.image}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 5
        }}
        defaultValue="Type here"
      />
    </SafeAreaView>
  );
}

const bottomTab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Second') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Third') {
              iconName = 'ios-baseball';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <bottomTab.Screen name="Home" component={Home} />
        <bottomTab.Screen name="Second" component={ScreenTwo} />
        <bottomTab.Screen name="Third" component={ScreenThree} />
      < /bottomTab.Navigator>
    < /NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },  
  seperator: {
    marginVertical: 8,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400
  }

})

export default App;


