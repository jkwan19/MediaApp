import React, {useState} from 'react';
import { Clipboard, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
function CopyLinkButton (props) {

  const [link, setLink] = useState(props.link);

  const copyCodeToClipBoard = () => {
    Clipboard.setString(link)
    alert(`Copied to clipboard!`);
  }
  return (
    <TouchableOpacity style={styles.button} onPress={copyCodeToClipBoard}>
      <Image style={styles.svg} source={{uri:"https://img.icons8.com/android/40/000000/link.png"}}/>
    </TouchableOpacity>
  )
}

export default CopyLinkButton;