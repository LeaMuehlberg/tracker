"use client";

import { useEffect, useState } from "react";
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
  useEffect(() => {
    const savedCards = localStorage.getItem("calendar-cards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "calendar-cards",
      JSON.stringify(cards)
    );
  }, [cards]);

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
          <DraggableCalendar
            key={card.id}
            month={card.month}
            year={card.year}
            x={card.x}
            y={card.y}

            onMove={(x, y) => {
              setCards((oldCards) =>
                oldCards.map((oldCard) =>
                  oldCard.id === card.id
                    ? {
                        ...oldCard,
                        x,
                        y,
                      }
                    : oldCard
                )
              );
            }}
          />
      ))}

      <AddButton onClick={addCard} />
    </main>
  );
}