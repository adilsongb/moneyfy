import { ScrollView, type ScrollViewProps } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export type ScreenViewProps = ScrollViewProps & {
  safeArea?: boolean;
};

export default function ScreenView({ safeArea = true, style, ...rest }: ScreenViewProps) {
  return (
    <SafeAreaView edges={safeArea ? undefined : []} style={[style, { flex: 1 }]}>
      <ScrollView {...rest} />
    </SafeAreaView>
  );
}
