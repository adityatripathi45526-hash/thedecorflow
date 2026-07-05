type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        px-8 py-3
        rounded-full
        bg-yellow-600
        text-white
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:bg-yellow-700
        hover:scale-105
        hover:shadow-xl
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}