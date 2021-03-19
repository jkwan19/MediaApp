import React from 'react';
import { Dimensions, View, StyleSheet, ScrollView } from 'react-native';
import MediaItem from './MediaItem.js';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const cardPerSlide = 4
const cardPadding = 15
const paddingAround = cardPadding * 2
const cardBetweenPadding = cardPadding * (cardPerSlide - 1)
const totalPadding = paddingAround + cardBetweenPadding
const imageWidth = (screenWidth - totalPadding) / cardPerSlide
const imageHeight = (imageWidth / (2 / 3))

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
    position: 'relative',
    alignContent: 'center',
    height: screenHeight * 0.4,
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#DCDCDC',
  },
   itemContainer: {
    width: screenWidth,
    paddingHorizontal: cardPadding,
  }
})

function MediaCarousel(props){
  const medias = props.medias
  const mediasList = medias.map((media) =>
    <MediaItem
      key={media.cover_photo_url}
      media={media}
      />
  );

  return (
    <ScrollView
      style={styles.itemContainer}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
    >
        {mediasList}

    </ScrollView>
  )
}

export default MediaCarousel;