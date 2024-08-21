import { ReactNode } from 'react';

const MaxWidthWrapper = ({ className, children }: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div className={`mx-auto w-full max-w-screen-4xl z-10 ${className || ''}`}>
            {children}
        </div>
    );
}

export default MaxWidthWrapper;
