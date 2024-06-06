import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReadingCard from './ReadingCard'
import { getAllDays } from '../services/FirestoreServices'

const ReadingScreen = ({navigation}) => {

    // TODO: Get all Days
  var dummyReading = {name: "Monday", icon: "cloud", id: "123456789"}

  useEffect(() => {
    handleGettingDays()
  }, []) //<- running the get here so that it gets called when our screen loads

  const [days, setDays] = useState([])

  const handleGettingDays = async () => {
    console.log("running get days on home...")
    var daysData = await getAllDays()
    setDays(daysData) //<- setting our useState equal to the data we get from firebase
  }


  return (
    <View style={styles.container}>
      <Button title='Add Reading' onPress={() => navigation.navigate("Add")} />

{/* TODO SELF: Get all the days and display them here using the reading card (doesn't include the readings data) */}
      
      { days != [] ? (
         days.map((day) => (
          <ReadingCard day={day} key={day.id} />
        ))
      ) : <Text>No Days Logged</Text>
      }


    </View>
  )
}

export default ReadingScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})