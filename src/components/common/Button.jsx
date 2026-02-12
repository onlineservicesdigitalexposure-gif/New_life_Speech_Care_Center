import { cn } from '../../utils/cn';

export default function Button({ children, variant = 'primary', className, ...props }) {
    const variants = {
        primary: 'bg-[#52B788] text-white hover:bg-[#40916C] focus:ring-[#52B788]',
        secondary: 'bg-white text-[#52B788] border-2 border-[#52B788] hover:bg-[#D8F3DC] focus:ring-[#52B788]',
        outline: 'bg-transparent text-[#52B788] hover:text-[#40916C] underline-offset-4 hover:underline',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700'
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
