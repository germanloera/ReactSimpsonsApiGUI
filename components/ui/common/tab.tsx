import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function SimpsonTab({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();


    return (
        <View style={{
            flexDirection: 'row',
            height: 103,
            position: 'absolute', 
            top: insets.top,               
            left: 0,
            right: 0,
        }}>
           
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isActive = state.index === index;
                const label = options.title ?? route.name;
                const themeSelected = isActive ? tabStyle.tabSelected : tabStyle.tabUnselected
                const bottomTheme = isActive ? tabStyle.bottomSelected : tabStyle.bottomUnselected



                return (
                    <View style={tabStyle.bg }>
                        <View style={tabStyle.topSeparator}></View>
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                        style={[ { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 5 }]}
                    >
                       
                        <View style={themeSelected}>
                        <Text style={{ color: '#000', textAlign:'center', marginTop:10}}>
                            {label}
                            </Text>
                                
                        </View>
                        </TouchableOpacity>
                        <View style={bottomTheme}></View>
                        <View style={tabStyle.bottomSeparator}></View>
                    </View>
                );
            })}
        </View>
    );
}
 
const tabStyle = StyleSheet.create({

    tabSelected: {
        backgroundColor: '#f9dea2',
        alignSelf: 'stretch',
        height: 40,
        
        borderTopStartRadius: 30,
        borderTopEndRadius: 30

    },
    bg: {
        flex:1, 
        backgroundColor: '#fcf1c5',
        alignSelf: 'stretch',
        height: 55,

        justifyContent: 'center'

    },

    tabUnselected: {
       
        alignSelf: 'stretch',
        height: 53,
       

    },

    topSeparator: {
        backgroundColor: '#f4b65c',
        alignSelf: 'stretch',
        height: 4
    },


    bottomSeparator: {
        backgroundColor: '#e1c988',
        alignSelf: 'stretch',
        height: 2
    },


    bottomUnselected: {
       
        alignSelf: 'stretch',
        height: 0
    },

 bottomSelected: {
     backgroundColor: '#f19e38',
        alignSelf: 'stretch',
        height: 4
    }


})
