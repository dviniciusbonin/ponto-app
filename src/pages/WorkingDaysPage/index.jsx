import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { DayWorkedItem } from "../../components/DayWorkedItem";
import api from "../../services/api";
import {useAUth} from '../../contexts/AuthContext';

export function WorkingDaysPage() {
    const {logout} = useAUth();
    const [workedDays, setWorkedDays] = useState([]);

    useEffect(() => {
        const today = new Date();
        const month = today.getMonth() + 1;
        api.get(`worked-days?month=${month}`).then(res => setWorkedDays(res.data)).catch(err => {
            if(err.response.status === 401) {
                logout()
            }
        })
    }, []);
    
    
  return (
    <View style={styles.containter}>
        <Text style={styles.textInfo}>Horas trabalhadas no mês - {workedDays.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0)} </Text>
        <Text style={styles.title}>Dias trabalhados</Text>
      <FlatList
        data={workedDays}
        renderItem={DayWorkedItem}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textInfo: {
        marginVertical: 20,
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})
