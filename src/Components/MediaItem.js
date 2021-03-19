import React, { useRef, useState } from 'react';
import { Dimensions, Button, Image, ImageBackground, View, StyleSheet } from 'react-native';

import CopyLinkButton from './CopyLinkButton.js';
import DownloadButton from './DownloadButton.js';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  item: {
    padding: 6,
  },
  media: {
    width: screenWidth / 3.75,
    height: screenWidth * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 2,
    marginBottom: 5,
    borderRadius: 5,
  },
  playImage: {
    height: 52,
    width: 52,
  }
})

function MediaItem(props) {
  const [media, setMedia]= useState(props.media);
  const renderMedia = () => {
    if (media.media_type === "video") {
      return (
      <ImageBackground
        source={{ uri: media.cover_photo_url }}
        style={styles.media}
        imageStyle={{borderRadius: 6}}>
          <Image
          source={{uri: "https://img.icons8.com/metro/52/ffffff/play.png" }}
          style={styles.playImage}
          />
      </ImageBackground>

    )} else {
      return (
        <Image
        style={styles.media}
        source={{uri: media.cover_photo_url}}/>
      )
    }
  }
  return(
    <View style={styles.item}>
      {renderMedia()}


      <View style={styles.buttons}>
        <CopyLinkButton link={media.tracking_link} />
        <DownloadButton link={media.download_url} />
      </View>
    </View>
  )
}

export default MediaItem;