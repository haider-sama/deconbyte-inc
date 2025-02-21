import { FC, useState, useEffect } from "react";
import { statsData } from "../config";


const StatsGrid: FC = () => {
    const [displayedNumbers, setDisplayedNumbers] = useState<number[]>(Array(statsData.length).fill(0));

    useEffect(() => {
        const incrementNumbers = () => {
            const duration = 2000; // Animation duration in milliseconds
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1

                setDisplayedNumbers(statsData.map((stat) => Math.floor(progress * stat.number)));

                if (progress < 1) {
                    requestAnimationFrame(animate); // Continue animating until progress reaches 1
                }
            };

            requestAnimationFrame(animate);
        };

        incrementNumbers();
    }, []);

    return (
        <div className="mx-auto py-10 relative z-10 bg-white mt-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center p-6">
                        <div className="text-blue-500 mb-4">
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                            {displayedNumbers[index]} {/* Animated number */}
                        </div>
                        <div className="text-lg font-medium text-gray-700">
                            {stat.heading}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsGrid;
