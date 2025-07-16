import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ProgressNavigator() {
  const totalSteps = 4;
  const currentStep = 1; // поменяй на состояние, если нужно

  return (
    <div className="flex items-center justify-between bg-[#1c140f] px-6 py-4 rounded-lg w-full">
      {/* Индикаторы */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 ${
              index === currentStep ? 'w-6 bg-orange-500 rounded-full' : 'w-2 bg-gray-300 rounded-full'
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Кнопки */}
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
          <FaArrowLeft size={14} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
          <FaArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
