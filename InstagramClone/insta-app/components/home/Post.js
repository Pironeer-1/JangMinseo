import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl:
            'https://icons8.com/icon/87/heart',
        likedImageUrl: 'https://icons8.com/icon/tSeDcCGva4Wj/heart'
    },
    {
        name: 'Comment',
        imageUrl:
            'https://icons8.com/icon/93386/speech',
    },
    {
        name: 'Share',
        imageUrl:
            'https://icons8.com/icon/2837/sent',
    },
    {
        name: 'Save',
        imageUrl:
            'https://icons8.com/icon/59740/bookmark',
        savedImageUrl: 'https://icons8.com/icon/82805/bookmark'
    },
]

const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post} />
        <PostImage post={post} />
    </View>
  )
}

const PostHeader = ({post}) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center',
            }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{ uri: post.profile_picture }} style={ styles.story } />
            <Text style={{ marginLeft: 5, fontWeight: 400 }}>{post.user}</Text>
        </View>

        <Text style={{ fontWeight: '900' }}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View>
    
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginleft: 6,
        borderwidth: 1.6,
        borderColor: '##ff8501'
    }
})
export default Post