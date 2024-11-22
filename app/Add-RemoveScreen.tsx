import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

interface Course {
    id: number;
    course: string;
    name: string;
    description: string;
    price: string;
}

interface CourseDetailsProps {
    courseDetails: Course[];
    setCourseDetails: React.Dispatch<React.SetStateAction<Course[]>>;
}

const CourseDetails: React.FC<CourseDetailsProps> = () => {
    const [courseDetails, setCourseDetails] = useState<Course[]>([

        { id: 1, course: 'Appetizer', name: 'Bruschetta', description: 'Grilled bread topped with diced tomatoes, basil, garlic, and olive oil.', price: 'R150' },
        { id: 2, course: 'Appetizer', name: 'Calamari Fritti', description: 'Lightly breaded and fried calamari served with marinara sauce and lemon.', price: 'R220' },
        { id: 3, course: 'Main Courses', name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled, served with asparagus and lemon butter sauce.', price: 'R450' },
        { id: 4, course: 'Main Courses', name: 'Pasta Primavera', description: 'Seasonal vegetables sautéed with garlic and olive oil over linguine.', price: 'R350' },
        { id: 5, course: 'Desserts', name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.', price: 'R120' },
        { id: 6, course: 'Desserts', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', price: 'R160' },
        { id: 7, course: 'Beverages', name: 'House Red Wine', description: 'Smooth blend with notes of cherry and oak.', price: 'R90/glass' },
        { id: 8, course: 'Beverages', name: 'Sparkling Water', description: 'Refreshing sparkling water with a slice of lemon.', price: 'R40' },
        { id: 9, course: 'Beverages', name: 'Craft Beer', description: 'Locally brewed beer with rich flavors.', price: 'R70' },
        { id: 10, course: 'Beverages', name: 'Soft Drink', description: 'Choice of cola, lemon-lime, or ginger ale.', price: 'R30' },
    ]);

    const [selectedCourse, setSelectedCourse] = useState('All');
    const [newItem, setNewItem] = useState<Course>({ id: 0, name: '', description: '', price: '', course: 'Appetizer' });
    const router = useRouter();

    const filteredMenu = selectedCourse === 'All'
        ? courseDetails
        : courseDetails.filter((item) => item.course === selectedCourse);

    const handleAddItem = () => {
        const newId = Date.now();
        setCourseDetails([...courseDetails, { ...newItem, id: newId }]);
        setNewItem({ name: '', description: '', price: '', course: 'Appetizer', id: 0 });
    };

    const handleRemoveItem = (id: number) => {
        setCourseDetails(courseDetails.filter((item) => item.id !== id));
    };

    const handleMenuClick = (menuItem: Course) => {
        router.push({
            pathname: "/Add-RemoveScreen",
            params: {
                id: menuItem.id,
                name: menuItem.name,
                description: menuItem.description,
                price: menuItem.price,
                course: menuItem.course,
            },
        });
    };

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.header}>Christoffel's Restaurant!</Text>
            <Text style={styles.subheader}>Menu Provided By Christoffel's Restaurant</Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCourse}
                    onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="All Courses" value="All" />
                    <Picker.Item label="Appetizers" value="Appetizer" />
                    <Picker.Item label="Main Courses" value="Main Courses" />
                    <Picker.Item label="Desserts" value="Desserts" />
                    <Picker.Item label="Beverages" value="Beverages" />
                </Picker>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Dish Name"
                value={newItem.name}
                onChangeText={(text) => setNewItem({ ...newItem, name: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={newItem.description}
                onChangeText={(text) => setNewItem({ ...newItem, description: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={newItem.price}
                onChangeText={(text) => setNewItem({ ...newItem, price: text })}
            />
            <Button title="Add Item" onPress={handleAddItem} />


            <View style={{ padding: 10 }}>
                {filteredMenu.map((menu) => (
                    <TouchableOpacity key={menu.id} onPress={() => handleMenuClick(menu)}>
                        <View style={styles.menuDisplayBox}>
                            <Text style={styles.courseText}>{menu.course}</Text>
                            <Text style={styles.menuName}>{menu.name}</Text>
                            <Text style={styles.menuDescription}>{menu.description}</Text>
                            <Text style={styles.menuPrice}>{menu.price}</Text>
                            <Button title="Remove" onPress={() => handleRemoveItem(menu.id)} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        padding: 15,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF6F61',
        textAlign: 'center',
        marginVertical: 15,
    },
    subheader: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    pickerContainer: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 20,
    },
    picker: {
        color: '#333',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    menuDisplayBox: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        elevation: 5,
    },
    courseText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF6F61',
    },
    menuName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    menuDescription: {
        fontSize: 14,
        color: '#666',
    },
    menuPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6F61',
    },
});
export default CourseDetails;
