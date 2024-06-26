import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_APIKEY } from '@env';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          <Image style={{width:100, height:100, resizeMode: 'contain'}} source={{uri: 'https://links.papareact.com/gzs' }}/>
      
      <GooglePlacesAutocomplete
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        placeholder = 'Where From?'
        query = {{
          key: GOOGLE_APIKEY,
          language: 'en',
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          }
        }

        }
      
      /> 
      
      <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  text:{
    color: 'blue',
  }
})
