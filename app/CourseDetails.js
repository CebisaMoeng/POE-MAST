import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const menuData = [
    { id: 1, course: 'Appetizer', name: 'Bruschetta', description: 'Grilled bread topped with diced tomatoes, basil, garlic, and olive oil.', price: 'R150' },
    { id: 2, name: 'Calamari Fritti', description: 'Lightly breaded and fried calamari served with marinara sauce and lemon.', price: 'R220' },
    { id: 3, course: 'Main Courses', name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled, served with asparagus and lemon butter sauce.', price: 'R450' },
    { id: 4, name: 'Pasta Primavera', description: 'Seasonal vegetables sautéed with garlic and olive oil over linguine.', price: 'R350' },
    { id: 5, course: 'Desserts', name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.', price: 'R120' },
    { id: 6, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', price: 'R160' },
    { id: 7, course: 'Beverages', name: 'House Red Wine', description: 'Smooth blend with notes of cherry and oak.', price: 'R90/glass' },
    { id: 8, name: 'Sparkling Water', description: 'Refreshing sparkling water with a slice of lemon.', price: 'R40' },
    { id: 9, name: 'Craft Beer', description: 'Locally brewed beer with rich flavors.', price: 'R70' },
    { id: 10, name: 'Soft Drink', description: 'Choice of cola, lemon-lime, or ginger ale.', price: 'R30' },
];

const MenuCard = ({ menu, onPress }) => (
    <TouchableOpacity
        key={menu.id}
        style={styles.menuCard}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Select ${menu.name}. ${menu.description} for ${menu.price}`}
        onPress={() => onPress(menu)}
    >
        {menu.course && <Text style={styles.courseLabel}>{menu.course}</Text>}
        <Text style={styles.menuName}>{menu.name}</Text>
        <Text style={styles.menuDescription}>{menu.description}</Text>
        <Text style={styles.menuPrice}>{menu.price}</Text>
    </TouchableOpacity>
);

const CourseDetails = () => {
    const router = useRouter();

    const handleMenuPress = (menu) => {
        if (menu?.id) {
            router.push('/Add-RemoveScreen');
        } else {
            console.error('Invalid menu selection.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header} accessible={true} accessibilityLabel="Restaurant Name: Christoffel's Restaurant">
                Christoffel's Restaurant!
            </Text>
            <Text style={styles.subHeader} accessible={true} accessibilityLabel="Welcome to the home screen, menu provided by Christoffel's Restaurant">
                HomeScreen [Menu Provided By Christoffel's Restaurant]
            </Text>
            <View style={styles.menuContainer}>
                {menuData.map((menu) => (
                    <MenuCard key={menu.id} menu={menu} onPress={handleMenuPress} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#000',
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    menuContainer: {
        flex: 1,
    },
    menuCard: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
    },
    courseLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    menuName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007BFF',
    },
    menuDescription: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#555',
    },
    menuPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: 'green',
    },
});

export default CourseDetails;
