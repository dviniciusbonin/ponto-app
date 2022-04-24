import { View, Text, StyleSheet, FlatList } from "react-native";
import { PointItem } from "../../components/PointItem";

const data = [
    {   
        id: 1,
        date: '20/03/2022',
        hours: 40
    },

    {   
        id: 2,
        date: '20/03/2022',
        hours: 10
    },

    {   
        id: 3,
        date: '20/03/2022',
        hours: 40
    },

    {   
        id: 4,
        date: '20/03/2022',
        hours: 50
    },

    {   
        id: 5,
        date: '20/03/2022',
        hours: 8
    },

    
]

export function PointsListPage() {
  return (
    <View style={styles.containter}>
        <Text style={styles.textInfo}>Horas trabalhadas no mês - 148 horas</Text>
        <Text style={styles.title}>Dias trabalhados</Text>
      <FlatList
        data={data}
        renderItem={PointItem}
        keyExtractor={(item) => item.id}
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
