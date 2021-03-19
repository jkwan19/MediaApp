import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Platform,
  PermissionsAndroid,
  Text,
  StyleSheet,
  } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  svg: {
    height: 30,
    width: 30,
  }
})

function DownloadButton (props) {
  const [link, setLink] = useState(props.link);
  const [saving, setSaving] = useState(false);

  const downloadFile = async () => {
    const fileUri: string = `${FileSystem.documentDirectory}test.mp4`;
    const downloadedFile: FileSystem.FileSystemDownloadResult = await FileSystem.downloadAsync(link, fileUri);

    if (downloadedFile.status != 200) {
      handleError();
    }

    const perm = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (perm.status != 'granted') {
      return;
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
      const album = await MediaLibrary.getAlbumAsync('Media');
      if (album === null) {
        await MediaLibrary.createAlbumAsync('Media', asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (e) {
      handleError(e);
    }
  };


  return (
    <TouchableOpacity style={styles.button} onPress={downloadFile}>
      <Image style={styles.svg} source={{uri:"https://img.icons8.com/cotton/30/000000/download.png"}}/>
    </TouchableOpacity>
  )
}

export default DownloadButton;