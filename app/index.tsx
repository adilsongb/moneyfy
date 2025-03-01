import { Image, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DayWeekButton } from '@/components/DayWeekButton';
import { ADBanner } from '@/components/ADBanner';

export default function Page() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedText>Testando</ThemedText>
      <Link href="/home" style={styles.link}>
        <ThemedText type="link">Go to home screen!</ThemedText>
      </Link>

      <DayWeekButton />

      <ADBanner />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
