// import { View, Text, Image } from 'react-native'
// import React from 'react'
// // import { Divider } from 'react-native-elements'

// const Post = ({post}) => {
//   return (
//     <View style={{ marginBottom: 30 }}>
//         {/* <Divider width={1} orientation='vertical'/> */}
//         <PostHeader post={post} />
//     </View>
//   )
// }

// const PostHeader = ({post}) => (
//     <View
//         style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             margin: 5,
//             alignItems: 'center',
//             }}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <Image source={{ uri: post.profile_picture }} style={ styles.story } />
//             <Text style={{ marginleft: 5, fontWeight: 400 }}>{post.username}</Text>
//         </View>
//     </View>
// )

// const styles = StyleSheet.create({
//     story: {
//         width: 35,
//         height: 35,
//         borderRadius: 50,
//         marginleft: 6,
//         borderwidth: 1.6,
//         borderColor: '##ff8501'
//     }
// })
// export default Post