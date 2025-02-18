import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Transactions = ({ route, navigation }) => {
    const { salespersonName } = route.params;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_ee7e46d3c57f7865790704632b0aef71")
            .then(response => response.json())
            .then(data => {
                const records = data.result.records;
                const filteredTransactions = records.filter(
                    item => item.salesperson_name === salespersonName
                );
                setTransactions(filteredTransactions);
            })
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate("TransactionDetails", { transaction: item })}
        >
            <Text style={styles.userText}>{item.transaction_date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transactions for {salespersonName}</Text>
            <FlatList
                data={transactions}
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
    title: {
        fontSize: 18,
        fontWeight: "bold",
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

export default Transactions;
