import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'HomeScreen' }} />
      <Stack.Screen name="Login" options={{ title: 'Login' }} />
      <Stack.Screen name="CourseDetails" options={{ title: 'Course Details' }} />
      <Stack.Screen name="FoodDescription" options={{ title: 'Food Description' }} />
      <Stack.Screen name="Add-RemoveScreen" options={{ title: 'Add-RemoveScreen' }} />
      <Stack.Screen name="calculateAveragePrice" options={{ title: 'calculateAveragePrice' }} />
      <Stack.Screen name="chart" options={{ title: 'chart' }} />
    </Stack>
  )
}
