import { cn } from '../../utils/cn';

export default function Card({ children, className, hover = false, ...props }) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-sm border border-gray-100 p-6',
                hover && 'hover:shadow-md transition-shadow duration-300',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
