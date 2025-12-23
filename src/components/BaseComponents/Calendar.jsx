import React from "react";
import { ChevronLeftIcon, ChevronRightIcon, IconWrapper } from "../../data/Icons";
import { FormControl } from "./FormInputs";

export default function CustomDatePicker({ selectedDate, onChange }) {
	const [currentDate, setCurrentDate] = React.useState(new Date());
	const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

	// Get the days in the current month
	const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

	// Get the first day of the month
	const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

	// Navigate to the previous month
	const goToPreviousMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
	};

	// Navigate to the next month
	const goToNextMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
	};

	// Handle date selection
	const handleDateClick = (day) => {
		const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
		onChange(newDate);
		setIsCalendarOpen(false);
	};

	// Render the calendar grid
	const renderCalendar = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const days = daysInMonth(year, month);
		const firstDay = firstDayOfMonth(year, month);

		const blanks = Array(firstDay).fill(null);
		const daysArray = Array.from({ length: days }, (_, i) => i + 1);

		return (
			<div className="grid grid-cols-7 gap-1">
				{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
					<div key={day} className="text-center font-medium text-sm text-gray-600">
						{day}
					</div>
				))}
				{blanks.map((_, index) => (
					<div key={`blank-${index}`} className="text-center" />
				))}
				{daysArray.map((day) => (
					<div
						key={day}
						className={`text-center p-2 cursor-pointer rounded-full hover:bg-blue-100 ${
							selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year
								? "bg-blue-500 text-white"
								: "text-gray-700"
						}`}
						onClick={() => handleDateClick(day)}>
						{day}
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="relative">
			{/* Input Field */}
			<input
				type="text"
				readOnly
				value={selectedDate ? selectedDate.toLocaleDateString() : ""}
				onClick={() => setIsCalendarOpen(!isCalendarOpen)}
				className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Select a date"
			/>

			{/* Calendar Popup */}
			{isCalendarOpen && (
				<div className="absolute mt-2 bg-white border rounded-lg shadow-lg p-4 z-10">
					{/* Calendar Header */}
					<div className="flex justify-between items-center mb-4">
						<button onClick={goToPreviousMonth} className="p-2 rounded-full hover:bg-gray-100">
							<IconWrapper>
								<ChevronLeftIcon />
							</IconWrapper>
						</button>
						<span className="font-semibold">
							{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
						</span>
						<button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-100">
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</button>
					</div>

					{/* Calendar Grid */}
					{renderCalendar()}
				</div>
			)}
		</div>
	);
}

export const YearPicker = () => {
	return (
		<div>
			<FormControl type="number" inputMode="numeric" onChange={(e) => console.log(e.target.value)} />
		</div>
	);
};
