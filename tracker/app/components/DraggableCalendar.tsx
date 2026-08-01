"use client";

import CalendarCard from "./CalendarCard";

type DraggableCalendarProps = {
	month: number;
	year: number;
	x: number;
	y: number;

	onMove: (x: number, y:number) => void;
};

export default function DraggableCalendar({
	month,
	year,
	x,
	y,
	onMove,
}: DraggableCalendarProps) {
	function handleMouseDown(
		event: React.MouseEvent<HTMLDivElement>
	) {
		const startX = event.clientX;
		const startY = event.clientY;

		const startPosition = {
			x,
			y,
		};

		function handleMouseMove(
			moveEvent: MouseEvent
		) {
			onMove(
				startPosition.x + (moveEvent.clientX - startX) * 0.5,
				startPosition.y + (moveEvent.clientY - startY) * 0.5
			);
		}

		function handleMouseMove(
			moveEvent: MouseEvent
		) {
			onMove(
				startPosition.x + moveEvent.clientX - startX,
				startPosition.y + moveEvent.clientY - startY
			);
		}

		function handleMouseUp() {
			
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
				left: x,
				top: y,
				cursor: "grab",
			}}
		>
			<CalendarCard
				month={month}
				year={year}
			/>
		</div>
	);
}