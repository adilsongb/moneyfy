import { useEffect } from "react";
import { BackHandler, Pressable, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  FadeIn,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { ThemedView, getComponentModal } from "@/components";

const MAX_GESTURE_PAN_MOVE = 100;
const MID_DURATION_ANIMATION = 300;
const FAST_DURATION_ANIMATION = 100;
const BACKDROP_OPACITY = 0.3;

export default function Modal() {
  const isInitialOpen = useSharedValue(false);
  const height = useSharedValue(0);
  const translationY = useSharedValue(0);
  const transitionBackDrop = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isInitialOpen.value ? 0 : 1, {
      duration: MID_DURATION_ANIMATION,
    }),
  );

  const { modal } = useLocalSearchParams();

  const modalContent = getComponentModal(modal as string);

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: isInitialOpen.value
          ? height.value * progress.value
          : translationY.value,
      },
    ],
  }));

  const backDrop = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0, 0, 0, ${transitionBackDrop.value})`,
  }));

  function handleModalStatus() {
    isInitialOpen.value = false;
    transitionBackDrop.value = withTiming(0, {
      duration: MID_DURATION_ANIMATION,
    });
    translationY.value = withTiming(
      height.value,
      { duration: MID_DURATION_ANIMATION },
      () => runOnJS(router.back)(),
    );
  }

  const panGesture = Gesture.Pan()
    .onStart(() => (isInitialOpen.value = false))
    .onUpdate((e) => {
      if (e.translationY > 0) {
        translationY.value = e.translationY;
        transitionBackDrop.value = BACKDROP_OPACITY - e.translationY / 500;
      }
    })
    .onEnd((e) => {
      if (e.translationY > MAX_GESTURE_PAN_MOVE) {
        translationY.value = withTiming(
          height.value,
          { duration: FAST_DURATION_ANIMATION },
          () => {
            runOnJS(handleModalStatus)();
          },
        );
      } else {
        translationY.value = withTiming(0, {
          duration: FAST_DURATION_ANIMATION,
        });
        transitionBackDrop.value = withTiming(BACKDROP_OPACITY, {
          duration: FAST_DURATION_ANIMATION,
        });
      }
    });

  useEffect(() => {
    isInitialOpen.value = true;

    transitionBackDrop.value = withTiming(BACKDROP_OPACITY, {
      duration: MID_DURATION_ANIMATION,
    });

    const backAction = () => {
      handleModalStatus();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View entering={FadeIn} style={[styles.fullScreen, backDrop]}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={handleModalStatus}
        />

        <Animated.View
          onLayout={(e) => {
            height.value = e.nativeEvent.layout.height;
          }}
          style={[styles.modal, sheetStyle, { backgroundColor: "white" }]}
        >
          <ThemedView
            width={50}
            height={8}
            borderRadius="lg"
            mb="md"
            bgColor="#e4e4e4"
          />

          {modalContent}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  modal: {
    padding: 16,
    minHeight: 450,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
  },
});
