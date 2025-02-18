import React,{useState, useEffect} from 'react';
import {StatusBar, FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const Home = ({navigation}) => {
    const [salespersonsData, setSalespersons] = useState([]);
    const [filteredData, setFiltered] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_ee7e46d3c57f7865790704632b0aef71")
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                const records = data.result.records;
                const uniqueSalespersons = [...new Set(records.map(item => item.salesperson_name))];
                setSalespersons(uniqueSalespersons);
                setFiltered(uniqueSalespersons);
            })
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text === "") {
            setFiltered(salespersonsData);
        } else {
            setFiltered(
                salespersonsData.filter(name => name.toLowerCase().includes(text.toLowerCase()))
            );
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate("Transactions", { salespersonName: item })}
        >
            <Text style={styles.userText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar />
            <TextInput
                style={styles.searchInput}
                placeholder="Search Salesperson..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15
    },
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
        backgroundColor: "white"
    },
    userText: {
        fontSize: 18,
        color: "green"
    }
});

export default Home;
