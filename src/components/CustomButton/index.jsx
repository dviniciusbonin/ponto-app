import { View, TouchableOpacity, Text} from 'react-native';

export function CustomButton({title, color, action}) {
    const handleAction = async() => {
        action();
    }

    return(
        <View>
            <TouchableOpacity style={{
                backgroundColor: color,
                width: '100%',
                paddingHorizontal: 25,
                paddingVertical: 10
            }} onPress={handleAction}>
                <Text style={{
                    color:'#FFFFFF',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'                    
                }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}