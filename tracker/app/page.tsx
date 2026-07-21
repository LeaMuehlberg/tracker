import AddButton from "./components/AddButton";
import CalendarCard from "./components/CalendarCard"

export default function Home() {
  return (
    <main>
      <h1>Tracker</h1>
      <CalendarCard month={7} year={2026}/>
      <AddButton />
    </main>
  );
}
