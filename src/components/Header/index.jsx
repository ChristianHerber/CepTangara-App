import React from "react"
import { Appbar } from "react-native-paper"
import { Image } from "react-native"

const Header = () => {
    return (
        <Appbar.Header>
            <Image source={require('../../../assets/marca.youtube.webp')} style={{width: 32, height: 32, marginLeft: 10,}} />
            <Appbar.Content title="Consulta CEP" subtitle="Tangará da Serra - MT" />
            <Appbar.Action icon="map" onPress={() => {}} />
        </Appbar.Header>
    )
}

export default Header