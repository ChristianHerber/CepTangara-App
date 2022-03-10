import react, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, ToastAndroid, Linking } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { MaterialCommunityIcons } from "@expo/vector-icons/"
import axios from "axios";
import styles from "./style"
import { StatusBar } from "expo-status-bar";
import { TextInput, Button } from 'react-native-paper';

const Cep = () => {

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    const baseURL = "https://cep-tangaradaserra.herokuapp.com/cep_tangras.json"

    const [cepTga, setCepTga] = useState([])
    const [searchText, setSearchText] = useState('')
    const [list, setList] = useState([])

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
        setSearchText('')
    }

    useEffect( () => {
        axios.get(baseURL).then( (response) => {
            setCepTga(response.data)
        }).catch(error => console.log(error))
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
                <View>

                    <Text selected={true}>{item.logradouro}</Text>

                    <TouchableOpacity onPress={() => {
                            Clipboard.setString(item.cep)
                            ToastAndroid.showWithGravity("CEP Copiado!", ToastAndroid.LONG, ToastAndroid.CENTER)
                        }}>
                        <Text style={styles.cep}>
                            {item.cep}
                            <MaterialCommunityIcons style={styles.icon} color="teal" name="content-copy" size={28} />
                        </Text>
                    </TouchableOpacity >

                    <Text>{item.bairro}</Text>

                </View>
                
                {item.map_locale ?  
                    <Button
                        style={styles.btnMap}
                        color="#FFEB3B"
                        icon="map-marker-radius"
                        mode="contained"
                        onPress={ () => {
                            Linking.openURL(`${item.map_locale}`)
                        } }
                    >
                        <Text>Ver no Mapa</Text>
                    </Button>
                    :
                    <Button
                        style={styles.btnMap}
                        color="#f4f4f4"
                        icon="block-helper"
                        mode="contained"
                    >
                        <Text>Sem Mapa</Text>
                    </Button>
                }

            </View>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.searchArea}>
                <TextInput
                    style={styles.input}
                    label="Pesquisar"
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                />
            
                <TouchableOpacity onPress={handleOrderClick}>
                    <MaterialCommunityIcons
                        style={styles.sort}
                        name="sort-alphabetical-ascending"
                        size={42}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>

            { list.length === 0 &&
                <Text style={styles.message}>
                    Para realizar a busca por <Text style={styles.highlighted}>CEP, Nome da Rua ou Bairro,</Text> digite no campo acima.
                    Se preferir <Text style={styles.highlighted}>clique no botão <MaterialCommunityIcons style={styles.sort} name="sort-alphabetical-ascending" size={24} color="#fff" /></Text> para listar todos os endereços.
                    {list}
                </Text>
            }

            { searchText !== '' && list.length === 0
                ?
                <Text style={styles.messageNotFound}>
                    Não foram encontrados resultados para a sua pesquisa por: <Text style={styles.highlighted}>{searchText}</Text>
                </Text>
                :
                <Text></Text>
            }

            <FlatList
                data={list}
                keyExtractor={KEY}
                renderItem={ITEM}
            />

            <StatusBar style="dark" />
            
        </View>
    )
}

export default Cep