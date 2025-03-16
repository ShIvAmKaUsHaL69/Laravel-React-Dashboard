import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function ProjectInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-1 rounded-sm dark:placeholder:text-gray-400 placeholder:text-gray-700' +
                className
            }
            ref={localRef}
        />
    );
});
