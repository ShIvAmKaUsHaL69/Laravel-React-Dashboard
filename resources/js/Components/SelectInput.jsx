import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput(
    { className = '', children, ...props },
    ref,
) {
    const localRef = useRef(null);

    return (
        <select
            {...props}
            className={
                'w-full text-xs uppercase text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-0 focus:rounded-sm' +
                className
            }
            ref={localRef}
        >
            {children}
        </select>
    );
});
