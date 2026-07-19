export default function CalenderCard() {
	const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "So"];
	return (
		<div className="calender-card">
			<h2>July 2026</h2>

			<div className="calender-grid">
				{weekdays.map((day) => (
					<div key={day} className="weekday">
						{day}
					</div>
				))}

				{Array.from({ length: 31}, (_, i) => (
					<div key={i} className="day">
						{i + 1}
					</div>
				))}
			</div>
		</div>
	);
}