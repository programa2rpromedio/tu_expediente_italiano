import React, { JSX } from 'react';
import Check from '../icon/Check';

type AlertVariant = 'success' | 'error';

interface AlertProps {
  message: string;
  onClose?: () => void;
  type?: AlertVariant;
  autoCloseDuration?: number;
}

const Alert: React.FC<AlertProps> = ({ type = 'success', message, onClose, autoCloseDuration }) => {
  React.useEffect(() => {
    if (autoCloseDuration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [autoCloseDuration, onClose]);

  const baseStyles = {
    container:
      'fixed top-4 h-auto inset-x-0 mx-auto z-[150] max-w-[550px] w-full md:w-[550px] sm:w-[300px] xs:w-[200px] p-4 rounded-lg shadow-lg border flex items-center', // Añadido flex items-center
    content: 'flex items-center justify-between w-full',
    text: 'text-sm text-[#4C4C4C] md:text-[28px] text-weight-400',
    button: 'ml-4 p-1 rounded-md focus:outline-none focus:ring-2',
  };

  const typeStyles: Record<
    AlertVariant,
    {
      container: string;
      text: string;
      button: string;
    }
  > = {
    success: {
      container: 'bg-[#C4F7CB] border-[#2C8337]',
      text: ' text-weight-400',
      button: 'text-green-500 hover:bg-green-100 focus:ring-green-500',
    },
    error: {
      container: 'bg-[#FFDDDD] border-[#E43838]',
      text: 'text-[#4C4C4C]  text-weight-400',
      button: 'text-red-500 hover:bg-red-100 focus:ring-red-500',
    },
  };

  const icons: Record<AlertVariant, JSX.Element> = {
    success: <Check className="pr-2" width={'24'} height={'24'} color={'black'} />,
    error: (
      <svg
        className="w-5 h-5 text-[#4C4C4C] mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <div className={`${baseStyles.container} ${typeStyles[type].container}`}>
      <div className={baseStyles.content}>
        <div className="flex items-center">
          {icons[type]}
          <p className={`${baseStyles.text} ${typeStyles[type].text}`}>{message}</p>
        </div>
        {onClose && (
          <button
            type="button"
            className={`${baseStyles.button} ${typeStyles[type].button}`}
            onClick={onClose}
            aria-label="Cerrar alerta"
          >
            <span className="sr-only">Cerrar</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
