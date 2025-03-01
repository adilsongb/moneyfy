import { ScrollView, type ScrollViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ScreenViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ScreenView({ style, lightColor, darkColor, ...otherProps }: ScreenViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <SafeAreaView style={[{ backgroundColor }, style]}>
      <ScrollView {...otherProps} />
    </SafeAreaView>
  );
}
