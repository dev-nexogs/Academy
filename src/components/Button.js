export default function Button({ children, variant = 'primary', className = '', onClick, ...props }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors'
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-indigo-700',
    secondary: 'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-accent hover:text-accent'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
