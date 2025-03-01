import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import mobileAds from 'react-native-google-mobile-ads';

import { useColorScheme } from '@/hooks/useColorScheme';

mobileAds().initialize();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="inverted" />
    </ThemeProvider>
  );
}
