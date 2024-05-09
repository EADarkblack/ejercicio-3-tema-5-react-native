import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Img from '../../assets/reference-icon.png';

//Elements
import InfoCard from '../elements/InfoCard';

const InfoCardContainer = () => {
  const titleTxt = 'Hola Mundo';

  return (
    <View style={styles.infoCardSuperContainer}>
      <InfoCard
        title={titleTxt}
        contentTxt={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed nibh sit amet odio scelerisque fringilla quis a nisi. Maecenas non tortor diam.'
        }
        img={Img}
      />
    </View>
  );
};

export default InfoCardContainer;

const styles = StyleSheet.create({
    infoCardSuperContainer: {
        marginHorizontal: 20,
        display: "flex",
        rowGap: 32
    }
});
