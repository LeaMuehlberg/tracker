"use client";

import { useState } from "react";
import AddButton from "./components/AddButton";
import DraggableCalendar from "./components/DraggableCalendar"

type Card = {
  id: number;
  month: number;
  year: number;

  x: number;
  y: number;
};

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  function addCard() {
    const today = new Date();

    const newCard: Card = {
      id: Date.now(),
      month: today.getMonth(),
      year: today.getFullYear(),

      x: 60 + cards.length * 40,
      y: 60 + cards.length * 40,
    };

    setCards([...cards, newCard]);
  }
  return (
    <main>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            position: "absolute",
            left: card.x,
            top: card.y,
          }}
        >
          <DraggableCalendar
            month={card.month}
            year={card.year}
            x={card.x}
            y={card.y}
          />

        </div>
      ))}

      <AddButton onClick={addCard}/>
    </main>
  );
}

