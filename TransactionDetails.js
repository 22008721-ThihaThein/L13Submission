import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TransactionDetails = ({ route }) => {
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{transaction.salesperson_name}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.detail}>{transaction.transaction_date}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Reg Number:</Text>
                    <Text style={styles.detail}>{transaction.salesperson_reg_num}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Property Type:</Text>
                    <Text style={styles.detail}>{transaction.property_type}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Transaction Type:</Text>
                    <Text style={styles.detail}>{transaction.transaction_type}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Represented:</Text>
                    <Text style={styles.detail}>{transaction.represented}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Town:</Text>
                    <Text style={styles.detail}>{transaction.town}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkwhite',
        padding: 15,
    },
    box: {
        width: '90%',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        marginTop: -150,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
        color: 'blue',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 5,
    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        marginTop: 10
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: 'grey',
    },
    detail: {
        fontSize: 16,
        fontWeight: "500",
        color: 'darkgreen',
    }
});

export default TransactionDetails;
