import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

export default function DayWeekbutton({
  shortDayName,
  dayNumber,
  isSelected,
  isDisabled,
}) {
  return (
    <ThemedView
      bgColor={isDisabled ? "#D9D9D9" : isSelected ? "primary" : "white"}
      width={47}
      height={72}
      borderRadius="sm"
      justifyContent="center"
      alignItems="center"
      borderWidth={isDisabled || isSelected ? 0 : 1}
      borderColor={"#B5B5B5"}
    >
      <ThemedText color={isSelected ? "white" : "#B5B5B5"}>
        {shortDayName}
      </ThemedText>
      <ThemedText color={isSelected ? "white" : "#B5B5B5"}>
        {dayNumber}
      </ThemedText>
    </ThemedView>
  );
}
