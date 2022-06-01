import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { PointItem } from '../../components/PointItem';
import { formatCurrentDay, formatDate, formatHour } from '../../helpers/date';
import { formatPointType, pointDictionary } from "../../helpers/point.dictionary";
import api from "../../services/api";
export function HomePage() {

    const today = new Date();

    const [points, setPoints] = useState([]);

    useEffect(() => {
        api.get('points').then(({ data }) => setPoints(data));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    {formatCurrentDay(today)} - {formatDate(today)}
                </Text>

                {
                    points.length == 0 ?
                        <>
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
                        </>
                    : points.map(point => (
                        <PointItem item={{
                            created_at: formatHour(point.created_at),
                            type: formatPointType(point.type)
                        }}/>
                    ))
                }

            </View>

            <View style={styles.buttons}>
                <CustomButton title='Entrar' color='#2AA855' action={() => alert('Ponto registrado')} />
                <CustomButton title='Sair' color='#FF5757' action={() => alert('Ponto de saida registrado')} />
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
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 20
    },
    buttons: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})