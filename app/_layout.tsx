import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { Stack } from 'expo-router/stack';
import Theme from '@theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Rocko': require('../assets/fonts/RockoFLF.ttf'),
  });

  useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        statusBarHidden: false,
        statusBarStyle: "light",
        statusBarColor: Theme.color.primary,
        headerShown: false
      }}
    />
  )
}
