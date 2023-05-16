import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect, useState } from "react"
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, Button } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import { Ionicons } from "@expo/vector-icons";
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from "react-native-modals";


function Home() {

  const navigation = useNavigation()
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [showModel, setShowModel] = useState(false)


  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

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

    <>
      <View>
        <Header />
        <ScrollView>
          <View style={homeStyle.container}>
              <Pressable style={homeStyle.item} >
                  <Feather name="search" size={24} color="black" />
                  <TextInput placeholder="enter your destination" />
              </Pressable>

              <Pressable style={homeStyle.item} >
                  <Feather name="calendar" size={24} color="black" />
                  <DatePicker
                    style={homeStyle.calender}
                    customStyles={{
                    placeholderText: {
                        fontSize: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: "auto",
                      },
                    headerStyle: {
                      backgroundColor: "#003580",
                    },
                    contentText: {
                      fontSize: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                  }}
                  selectedBgColor="#0047AB"
                  customButton={(onConfirm) => customButton(onConfirm)}
                  onConfirm={(startDate, endDate) =>
                    setSelectedDates(startDate, endDate)
                  }
                  allowFontScaling={false}
                  placeholder={"Select Your Dates"}
                  mode={"range"}
                />
              </Pressable>

              <Pressable onPress={() => {setShowModel(!showModel)}} style={homeStyle.item} >
                  <Ionicons name="person-outline" size={24} color="black" />
                  <Text>
                      {` ${rooms} room • ${adults} adults • ${children} Children`}
                  </Text>
              </Pressable>

              <Pressable style={homeStyle.searchItem} >
                  <Text style={homeStyle.searchBtn} >Search</Text>
              </Pressable>

          </View>

          
          <Text style={homeStyle.contentHead}>Travel More spend less</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={homeStyle.contentItem}>
              <Text style={homeStyle.contentItemT1}>Genius</Text>
              <Text style={homeStyle.contentItemT1}>You are ate genius level one in our loyalty program</Text>
            </Pressable>
            <Pressable style={homeStyle.contentItem}>
              <Text style={homeStyle.contentItemT1}>15% Discounts</Text>
              <Text style={homeStyle.contentItemT1}>Complete 5 stays to unlock level 2</Text>
            </Pressable>
            <Pressable style={homeStyle.contentItem}>
              <Text style={homeStyle.contentItemT1}>10% Discounts</Text>
              <Text style={homeStyle.contentItemT1}>Enjoy Discounts at participating at properties worldwide</Text>
            </Pressable>
          </ScrollView>


        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackDropPress={() => setShowModel(!showModel)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
                text="Apply"
                style={{ marginBottom: 10, color: "white", backgroundColor: "black"}}
                onPress={() => setShowModel(!showModel)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        onHardwareBackPress={() => setShowModel(!showModel)}
        visible={showModel}
        onTouchOutside={() => setShowModel(!showModel)}
      >
        <ModalContent style={{width: "100%", height: 200}}>
          <View style={homeStyle.modelContainer} >
            <Text style={{fontWeight: '500'}}>Rooms</Text>
            <Pressable style={homeStyle.modelItem}>
               <Pressable onPress={() => setRooms(Math.max(1, rooms-1))} style={homeStyle.buttonItem}>
                <Text style={homeStyle.buttonIcon} >-</Text>
               </Pressable>
               <Pressable>
                <Text style={homeStyle.buttonText}>{rooms}</Text>
               </Pressable>
               <Pressable onPress={() => setRooms((r) => r+1)} style={homeStyle.buttonItem}>
                <Text style={homeStyle.buttonIcon}>+</Text>
               </Pressable>
            </Pressable>
          </View>

          <View style={homeStyle.modelContainer} >
            <Text style={{fontWeight: '500'}}>Adults</Text>
            <Pressable style={homeStyle.modelItem}>
               <Pressable onPress={() => setAdults(Math.max(1, adults-1))} style={homeStyle.buttonItem}>
                <Text style={homeStyle.buttonIcon} >-</Text>
               </Pressable>
               <Pressable>
                <Text style={homeStyle.buttonText}>{adults}</Text>
               </Pressable>
               <Pressable onPress={() => setAdults((a) => a+1)} style={homeStyle.buttonItem}>
                <Text style={homeStyle.buttonIcon}>+</Text>
               </Pressable>
            </Pressable>
          </View>

          <View style={homeStyle.modelContainer} >
            <Text style={{fontWeight: '500'}} >Children</Text>
            <Pressable style={homeStyle.modelItem}>
               <Pressable  onPress={() => setChildren(Math.max(0, children-1))} style={homeStyle.buttonItem}>
                <Text style={homeStyle.buttonIcon} >-</Text>
               </Pressable>
               <Pressable>
                <Text style={homeStyle.buttonText}>{children}</Text>
               </Pressable>
               <Pressable onPress={() => setChildren((c) => c+1)} style={homeStyle.buttonItem}>
                <Text style={homeStyle.buttonIcon}>+</Text>
               </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}

export default Home

const homeStyle = StyleSheet.create({
  container:{
      margin: 20,
      borderColor: '#003588',
      borderWidth: 3,
      borderRadius: 5
  },
  item:{
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingHorizontal: 10,
      borderColor: '#003588',
      borderWidth: 2,
      paddingVertical: 12
  },
  calender: {
    width: 350,
    height: 30,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "transparent",
  },
  searchBtn: {
    textAlign: "center",
    alignItems: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500"
  },
  searchItem: {
      paddingVertical: 10,
      backgroundColor: "black"
  },
  modelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    marginVertical: 15
  },
  modelItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10
  },
  buttonItem: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: "#BEBEBE",
    backgroundColor: "#E0E0E0",
  },
  buttonIcon: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  contentHead: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 500
  },
  contentItem:{
    width: 200,
    height: 130,
    marginTop: 10,
    backgroundColor: "#003580",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10
  },
  contentItemT1:{
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 3
  }

})