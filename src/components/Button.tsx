interface ButtonProps {
    onClick: () => {};
    className: string;
    title: string;
}

export default function Button({ onClick, className, title }: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>{title}</button>
    )
}