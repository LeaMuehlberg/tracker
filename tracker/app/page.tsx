"use client";
import { useState } from "react";
import AddButton from "./components/AddButton";
import CalendarCard from "./components/CalendarCard"

type Card = {
  id: number;
  month: number;
  year: number;
};

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  function addCard() {
    const today = new Date();
    const newCard: Card = {
      id: Date.now(),
      month: today.getMonth(),
      year: today.getFullYear(),
    };
    setCards([...cards, newCard]);
  }
  return (
    <main>
      {cards.map((card) => (
        <CalendarCard
            key={card.id}
            month={card.month}
            year={card.year}
        />
      ))}
      <AddButton onClick={addCard}/>
    </main>
  );
}
