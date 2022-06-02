import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { PointItem } from '../../components/PointItem';
import { formatCurrentDay, formatDate, formatDateTime} from '../../helpers/date';
import { formatPointType } from "../../helpers/point.dictionary";
import api from "../../services/api";
export function HomePage() {

    const today = new Date();
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const date = formatDateTime(new Date());
        api.get(`points?date=${date}`).then(({ data }) => setPoints(data)).finally(() => setLoading(false))
    }, [points]);

    useEffect(() => {
        return () => {
          setPoints([]);
        };
    }, []);

    const handleExitPoint = async () => {
        if(points.length == 4)
            return alert('Já foi registrado o máximo de entradas e saídas possíveis!')

        const result = points.find(point => point.type == 'RETURN');

        api.post('points', {
            type: result ? 'EXIT' : 'INTERVAL'
        }).then((res) => {
            alert('Ponto de saída registrado!')
           setPoints([])
        }).catch(error => console.log({error}))
    }

    const handleEntryPoint = () => {
        if(points.length == 4)
            return alert('Já foi registrado o máximo de entradas e saídas possíveis!')

        const result = points.find(point => point.type == 'INTERVAL');

        api.post('points', {
            type: result ? 'RETURN' : 'ENTRY'
        }).then((res) => {
            alert('Ponto de entrada registrado!')
            setPoints([])
        }).catch(error => console.log({error}))

    }

    return loading ? (
        <View style={styles.container}>
            <Text>Carregando ...</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    {formatCurrentDay(today)} - {formatDate(today)}
                </Text>

                {
                    !points ?
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
                        : points.map(point => {
                            const date = moment.tz(point.created_at, "America/Sao_Paulo");
                            return <PointItem key={point.id} item={{
                                created_at: `${date.hours() + 3}:${date.minutes()}`,
                                type: formatPointType(point.type)
                            }} />
                        })
                }

            </View>

            <View style={styles.buttons}>
                <CustomButton title='Entrar' color='#2AA855' action={handleEntryPoint} />
                <CustomButton title='Sair' color='#FF5757' action={handleExitPoint} />
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