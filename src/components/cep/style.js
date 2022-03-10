import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
        paddingHorizontal: 15,
        width: '100%',
    },
    item: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        fontSize: 28,
        borderRadius: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#6200EE',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
    },  
    cep: {
        fontWeight: 'bold',
        fontSize: 24,
        display: 'flex',
        justifyContent: 'space-around',
    },
    icon: {
        marginLeft: 55,
    },
    sort: {
        backgroundColor: "#6200EE",
        paddingHorizontal: 9,
        paddingVertical: 10,
        borderBottomRightRadius: 2,
        borderTopRightRadius: 2,
        right: 1,
        top: 0,
    },
    searchArea: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: "85%",
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    btnMap: {
        marginTop: 15,
        padding: 5,
        letterSpacing: 0,
    },
    message: {
        padding: 15,
        backgroundColor: "#FDD835",
        marginTop: 15,
        borderRadius: 2,
        color: "#000",
        textAlign: "justify",
        fontSize: 18,
    },
    highlighted: {
        fontWeight: "bold",
    },
    messageNotFound : {
        padding: 15,
        backgroundColor: "tomato",
        marginTop: 15,
        borderRadius: 2,
        color: "#fff",
        textAlign: "justify",
        fontSize: 18,
    }

    });

export default styles