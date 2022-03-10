import React from "react"
import { Appbar } from "react-native-paper"
import { Image } from "react-native"

const Header = () => {
    return (
        <Appbar.Header style={{borderBottomColor: '#FFEB3B', borderBottomWidth: 4, height: 70}}>
            <Image source={require('../../../assets/header.icon.png')} style={{width: 32, height: 23, marginLeft: 10,}} />
            <Appbar.Content title="CONSULTA CEP" subtitle="TANGARÁ DA SERRA - MT" style={{alignItems: 'center'}}/>
            <Appbar.Action icon="map" onPress={() => {}} />
        </Appbar.Header>
    )
}

export default Header