import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home.js";
import Transactions from "./Transactions.js";
import TransactionDetails from "./TransactionDetails.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name='Home' component={Home} options={{ title: "Salespersons" }} />
                <Stack.Screen name='Transactions' component={Transactions} options={{ title: "Transactions" }} />
                <Stack.Screen name='TransactionDetails' component={TransactionDetails} options={{ title: "Transaction Details" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
