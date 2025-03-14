import Bye from "./Bye";
import Hello from "./Hello";

export default function getComponentModal(modal: string, params?: any) {
  switch (modal) {
    case "hello":
      return <Hello {...params} />;
    case "bye":
      return <Bye {...params} />;
    default:
      return null;
  }
}
