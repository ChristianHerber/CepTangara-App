import react, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, ToastAndroid, TextInput } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { MaterialCommunityIcons } from "@expo/vector-icons/"
import axios from "axios";
import styles from "./style"
import { StatusBar } from "expo-status-bar";

const Cep = () => {

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    const baseURL = "https://young-cove-70694.herokuapp.com/cep_tangras.json"

    const [cepTga, setCepTga] = useState([])
    const [searchText, setSearchText] = useState('')
    const [list, setList] = useState([])
    // const [msg, setMsg] = useState("Carregando")

    const handleOrderClick = () => {
        let sortList = [...cepTga]
        setList(sortList)
        sortList.sort((a,b) => {
            if(a.logradouro > b.logradouro) {
                return 1
            } else {
                if(b.logradouro > a.logradouro){
                    return -1
                } else {
                    return 0
                }
            }
        })
    }

    useEffect( () => {
        axios.get(baseURL).then( (response) => {
            setCepTga(response.data)
        })

        // cepTga ? console.log(`cepTga: ${cepTga}`) : ''
        // list ? console.log(`list: ${list}`) : ''
    },[])

    useEffect( () => {

        let listagem = [...cepTga]
        setList(listagem)

        if(searchText === '') {
            setList(listagem)
        } else {
            setList(
                cepTga.filter((filterItem) => {
                    if(filterItem.logradouro.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || filterItem.bairro.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || filterItem.cep.indexOf(searchText) > -1) {
                        return true
                    } else {
                        return false
                    }
                })
            )
        }

    },[searchText])

    const KEY = (item, index) => {
        return index.toString()
    }

    const ITEM = ({item}) => {
        return (
            <View style={styles.item}>
                <Text selected={true}>{item.logradouro}</Text>
                <TouchableOpacity onPress={() => {
                        Clipboard.setString(item.cep)
                        ToastAndroid.showWithGravity("CEP Copiado!", ToastAndroid.LONG, ToastAndroid.CENTER)
                    }}>
                    <Text style={styles.cep}>
                        {item.cep}
                        <MaterialCommunityIcons style={styles.icon} color="teal" name="content-copy" size={28} />
                    </Text>
                </TouchableOpacity> 
                <Text>{item.bairro}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consulta CEP</Text>

            <View style={styles.searchArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar (Logradouro, Bairro, CEP)"
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                />
                <TouchableOpacity onPress={handleOrderClick}>
                    <MaterialCommunityIcons
                        style={styles.sort}
                        name="order-alphabetical-ascending"
                        size={42}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={list}
                keyExtractor={KEY}
                renderItem={ITEM}
            />
            {/* <Text>{list === '' ? setMsg("") : msg}</Text> */}
            <StatusBar style="dark" />
        </View>
    )
}

export default Cep