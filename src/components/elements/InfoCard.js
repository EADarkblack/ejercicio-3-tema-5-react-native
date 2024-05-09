import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoCard = ({title, contentTxt, img}) => {
  return (
    <View style={styles.infoCardContainer}>
      <Text style={styles.infoCardTitle}>{title}</Text>
      <Text>{contentTxt}</Text>
      <Image source={img} />
    </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
    infoCardContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 25,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "gray"
    },
    infoCardTitle: {
        fontSize: 30,
        alignSelf: "flex-start"
    }
})