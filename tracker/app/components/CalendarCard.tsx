type CalendarCardProps = {
	month: number;
	year: number;
};

export default function CalendarCard({
	month,
	year,
}: CalendarCardProps) {
	const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "So"];
	const monthName = new Date(year, month).toLocaleString("de-DE", {
		month: "long",
	});
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	let firstDay = new Date(year, month, 1).getDay();

	// So (0) -> 6, Mo (1) -> 0, ...
	firstDay = (firstDay + 6) % 7;

	return (
		<div className="calendar-card">
			<h2>
				{monthName} {year}
			</h2>

			<div className="calendar-grid">
				{weekdays.map((day) => (
					<div key={day} className="weekday">
						{day}
					</div>
				))}

				{Array.from({ length: firstDay}).map((_, i) => (
					<div key={`empty-${i}`}>
					</div>
				))}
				{Array.from({ length: daysInMonth }, (_, i) => (
          			<div key={i} className="day">
            			{i + 1}
          			</div>
          		))}
			</div>
		</div>
	);
}