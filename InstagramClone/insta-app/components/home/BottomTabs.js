import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/home--v1.png',
        active: 'https://img.icons8.com/fluency-systems-filled/48/home--v1.png'
    },
    {
        name: 'Search',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/search--v1.png',
        active: 'https://img.icons8.com/fluency-systems-filled/48/search--v1.png'
    },
    {
        name: 'Reels',
        inactive: 'https://img.icons8.com/ios/50/instagram-reel.png',
        active: 'https://img.icons8.com/ios-filled/50/instagram-reel.png'
    },
    {
        name: 'Shop',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png',
        active: 'https://img.icons8.com/fluency-systems-filled/48/shopping-bag.png'
    },    
    {
        name: 'Profile',
        inactive: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
        active: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },    
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
            source={{ uri: activeTab === icon.name? icon.active : icon.inactive }}
            style={[ styles.icon,
            icon.name === 'Profile' ? styles.profilePic() : null,
            activeTab === 'Profile' && icon.name === activeTab ?
            styles.profilePic(activeTab) : null ]} />
        </TouchableOpacity>
    )
    return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>   
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#fff'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },

    icon: {
        width: 30,
        height: 30
    },

    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#000'
    }),
})

export default BottomTabs