import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { PointItem } from '../../components/PointItem';
import i18n from "../../config/locale";
import { useAUth } from "../../contexts/AuthContext";
import { formatCurrentDay, formatDate, formatDateTime } from '../../helpers/date';
import { formatPointType } from "../../helpers/point.dictionary";
import useBiometricAuth from "../../hooks/useBiometricAuth";
import api from "../../services/api";
export function HomePage() {
    const { logout } = useAUth();
    const { authorize } = useBiometricAuth();
    const today = new Date();
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const date = formatDateTime(new Date());
        api.get(`points?date=${date}`).then(({ data }) => setPoints(data)).catch(err => {
            if (err.response.status === 401) {
                logout()
            }
        }).finally(() => setLoading(false))
    }, [points]);

    useEffect(() => {
        return () => {
            setPoints([]);
        };
    }, []);

    const handleExitPoint = async () => {
        if (points.length == 4)
            return alert('Já foi registrado o máximo de entradas e saídas possíveis!')

        const result = points.find(point => point.type == 'RETURN');

        authorize().then((res) => {
            if (res.success) {
                api.post('points', {
                    type: result ? 'EXIT' : 'INTERVAL'
                }).then((res) => {
                    alert(i18n.t('registeredExitPoint'))
                    setPoints([])
                }).catch(error => console.log({ error }))
            }
        })

    }

    const handleEntryPoint = async () => {
        if (points.length == 4)
            return alert('Já foi registrado o máximo de entradas e saídas possíveis!')

        const result = points.find(point => point.type == 'INTERVAL');
        authorize().then(res => {
            if (res.success) {
                api.post('points', {
                    type: result ? 'RETURN' : 'ENTRY'
                }).then((res) => {
                    alert(i18n.t('registeredEntryPoint'))
                    setPoints([])
                }).catch(error => console.log({ error }))
            }
        }).catch(err => console.log({ err }))
    }

    return loading ? (
        <View style={styles.container}>
            <Text>{i18n.t('loading')} ...</Text>
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
                                created_at: `${date.hours() + 3}:${date.minutes() < 10 ? `0${date.minutes()}` : date.minutes()}`,
                                type: formatPointType(point.type)
                            }} />
                        })
                }

            </View>

            <View style={styles.buttons}>
                <CustomButton title={i18n.t('enterToWork')} color='#2AA855' action={handleEntryPoint} />
                <CustomButton title={i18n.t('leaveWork')} color='#FF5757' action={handleExitPoint} />
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
        minHeight: "60%",
        flex: 0
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