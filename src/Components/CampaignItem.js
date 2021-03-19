import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import MediaCarousel from './MediaCarousel.js';

const styles = StyleSheet.create({
  icon: {
    borderRadius: 15,
    height: 80,
    width: 80,
  },
  items: {
    flexDirection: 'row',
    flex: 2,
    marginLeft: 10,
    padding: 20,
  },
  header: {
    backgroundColor: 'white',
    height: '10%',
  },
  info: {
    flexDirection: 'column',
    width: '40%',
    paddingLeft: 10,
    paddingTop: 10,
    justifyContent: 'space-evenly',
  },
  install: {
    color: 'green',
  },
  emphasizeText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})

function CampaignItem(props){
  const campaign = props.campaign;
  const avatar_url = campaign.campaign_icon_url;
  const medias = campaign.medias;
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.items}>
          <Image source={{uri: avatar_url}} style={styles.icon} />
          <View style={styles.info}>
            <View style={styles.name}>
              <Text style={styles.emphasizeText}>{campaign.campaign_name}</Text>
            </View>
            <Text style={styles.install}>
              <Text style={styles.emphasizeText}>{campaign.pay_per_install}</Text> per install
            </Text>
          </View>
        </View>
        <MediaCarousel medias={medias}/>
      </View>
    </View>
  )
}

export default CampaignItem;