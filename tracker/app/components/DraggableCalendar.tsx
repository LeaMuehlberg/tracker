"use client";

import { useState } from "react";
import CalendarCard from "./CalendarCard";

type DraggableCalendarProps = {
	month: number;
	year: number;
	x: number;
	y: number;
};

export default function DraggableCalendar({
	month,
	year,
	x,
	y,
}: DraggableCalendarProps) {
	const [position, setPosition] = useState({
		x,
		y,
	});

	const [dragging, setDragging] = useState(false);

	function handleMouseDown(
		event: React.MouseEvent<HTMLDivElement>
	) {
		setDragging(true);

		const startX = event.clientX;
		const startY = event.clientY;

		const startPosition = position;

		function handleMouseMove(
			moveEvent: MouseEvent
		) {
			setPosition({
				x: startPosition.x + moveEvent.clientX - startX,
				y: startPosition.y + moveEvent.clientY - startY,
			});
		}

		function handleMouseUp() {
			setDragging(false);

			window.removeEventListener(
				"mousemove",
				handleMouseMove
			);

			window.removeEventListener(
				"mouseup",
				handleMouseUp
			);
		}

		window.addEventListener(
			"mousemove",
			handleMouseMove
		);

		window.addEventListener(
			"mouseup",
			handleMouseUp
		);
	}

	return (
		<div
			onMouseDown={handleMouseDown}
			style={{
				position: "absolute",
				left: position.x,
				top: position.y,

				cursor: dragging ? "grabbing" : "grab",
			}}
		>
			<CalendarCard
				month={month}
				year={year}
			/>
		</div>
	);
}