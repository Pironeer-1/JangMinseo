import { View, Text, Image, TextInput, Button } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useState } from 'react'
import { Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'ww.browonweinraub.com/wp-content/uploads/2017/09/placeholder.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character')
})

const FormikPostUploader = () => {
    const [thubnailUrl, setThubnailUrl] =useState(PLACEHOLDER_IMG)

  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) => console.log(values)}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
        <View
          style={{
            margin: 20,
            justifyContent: 'space-between',
            flexDirection: 'row'}}
        > 
          <Image source={{ uri: thubnailUrl? thubnailUrl : PLACEHOLDER_IMG }}
          style={{width: 100, height:100}}/>

          <View style={{ flex: 1, marginLeft: 12 }}>
            <TextInput
            style={{fontSize: 20}}
            placeholder='Write a caption ...' placeholderTextColor='gray'
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}/>
          </View>
          
        </View>
        <Divider width={0.2} orientation='vertical' />
        <TextInput
          onChange={(e) => setThubnailUrl(e.nativeEvent.text)}
          style = {{ fontSize: 18 }}
          placeholder='Enter Image Url' placeholderTextColor='gray'
          onChangeText={handleChange('imageUrl')}
          onBlur={handleBlur('imageUrl')}
          value={values.imageUrl}/>
        {errors.imageUrl && (
          <Text style={{fontSize: 13, color: 'red'}}>
           {errors.imageUrl}
          </Text>
        )}

        <Button onPress={handleSubmit} title='Share' disabled={!isValid}
        />
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader