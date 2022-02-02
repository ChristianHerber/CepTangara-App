import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
        paddingTop: 10,
        paddingHorizontal: 20,
        width: '100%',
    },
    item: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        fontSize: 28,
        borderRadius: 25,
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
        // backgroundColor: "#333",
    },
    searchArea: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 60,
        borderRadius: 15,
        padding: 10,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        width: "85%",
    },
    });

export default styles