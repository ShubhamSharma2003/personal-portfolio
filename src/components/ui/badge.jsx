export function Badge({ children, variant }) {
    const baseClasses = "px-3 py-1 text-sm font-medium rounded";
    const variants = {
      success: "bg-green-100 text-green-800",
      destructive: "bg-red-100 text-red-800",
    };
  
    return <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>;
  }
  