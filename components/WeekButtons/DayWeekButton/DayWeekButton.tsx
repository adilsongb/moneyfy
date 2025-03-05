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
    >
      <ThemedText color={isSelected ? "white" : "text"}>
        {shortDayName}
      </ThemedText>
      <ThemedText color={isSelected ? "white" : "text"}>{dayNumber}</ThemedText>
    </ThemedView>
  );
}
