import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { Text, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';


function Home() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Booking.com",
        headerTitleStyle:{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#0e1111",
          height: 110,
        },
        headerRight : () => (
          <FontAwesome name="hotel" size={24} color="white" style={{ marginRight: 22 }} />
        )
      })
  },[])



  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home