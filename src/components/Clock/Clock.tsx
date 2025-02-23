import { useState, useEffect } from "react";
export const Clock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-[#2cb86a] font-semibold">
			{time.toLocaleTimeString("es-ES", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
			})}
		</div>
	);
};
