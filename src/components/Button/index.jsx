import { View, TouchableOpacity, Text} from 'react-native';

export function Button({title, color}) {
    return(
        <View>
            <TouchableOpacity style={{
                backgroundColor: color,
                width: '100%',
                paddingHorizontal: 25,
                paddingVertical: 10
            }}>
                <Text style={{
                    color:'#FFFFFF',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'                    
                }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}