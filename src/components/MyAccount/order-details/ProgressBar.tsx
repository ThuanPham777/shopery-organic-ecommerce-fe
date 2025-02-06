import { FaCheck } from 'react-icons/fa6';

type ProgressStep = {
  number: string;
  label: string;
  completed: boolean;
};

type ProgressBarProps = {
  steps: ProgressStep[];
};

export default function ProgressBar({ steps }: ProgressBarProps) {
  return (
    <div className='mt-12 rounded-md'>
      {/* Progress circles and connectors */}
      <div className='flex items-center'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex-1 flex items-center'
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                step.completed
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-500'
              }`}
            >
              {step.completed && step.label === 'Order received' ? (
                <FaCheck />
              ) : (
                step.number
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 ${
                  steps[index + 1].completed ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      {/* Labels */}
      <div className='flex justify-between items-center mt-2'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex-1'
          >
            <span
              className={`text-sm ${
                step.completed ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
