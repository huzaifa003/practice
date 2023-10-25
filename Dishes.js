import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
} from 'react-native';

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

const Dishes = () => (
    <SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}

            renderItem={({ section, item }) => (
                <>

                    {console.log("HELO")}
                    {console.log(section.data.length)}
                    {section.data.length > 2 ? 

                        <Text style={styles.title}>{item} </Text>

                     : ""}

                </>
            )}
            renderSectionHeader={({ section: { title, data } }) => (

                <View>

                    {data.length > 2 ? <Text style={styles.header}>{title}</Text> : ""}
                </View>

            )}
        />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});

export default Dishes;