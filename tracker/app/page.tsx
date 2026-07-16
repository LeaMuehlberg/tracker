import AddButton from "./components/AddButton";
import CalenderCard from "./components/CalenderCard"

export default function Home() {
  return (
    <main>
      <h1>Tracker</h1>
      <CalenderCard />
      <AddButton />
    </main>
  );
}
