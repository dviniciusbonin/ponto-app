import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { PointItem } from '../../components/PointItem';
import { formatCurrentDay, formatDate } from '../../helpers/date';
export function HomePage() {

    const today = new Date();


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    {formatCurrentDay(today)} - {formatDate(today)}
                </Text>

                <PointItem item={{
                    created_at: '08:00',
                    type: 'Entrada'
                }} />

                <PointItem item={{
                    created_at: '12:00',
                    type: 'Intervalo'
                }} />

                <PointItem item={{
                    created_at: '13:00',
                    type: 'Retorno'
                }} />

                <PointItem item={{
                    type: 'Saída'
                }} />
            </View>

            <View style={styles.buttons}>
                <Button title='Entrar' color='#2AA855'/>
                <Button title='Sair' color='#FF5757'/>
            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    main: {
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 20
    },
    buttons:{
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})