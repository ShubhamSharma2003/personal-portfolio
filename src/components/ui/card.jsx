export function Card({ children, className }) {
    return <div className={`rounded-lg shadow ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children, className }) {
    return <div className={`p-4 border-b bg-gray-100 ${className}`}>{children}</div>;
  }
  
  export function CardTitle({ children, className }) {
    return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  