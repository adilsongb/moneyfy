import ThemedView from "../ThemedView";
import DayWeekbutton from "./DayWeekButton";
import { weekDays } from "./mock";

export default function WeekButtons() {
  return (
    <ThemedView flexDirection="row" justifyContent="space-between" mb="lg">
      {weekDays.map((data) => (
        <DayWeekbutton {...data} key={data.shortDayName} />
      ))}
    </ThemedView>
  );
}
