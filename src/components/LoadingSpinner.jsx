const LoadingSpinner = ({
  size = 'md',
  color = 'blue',
  className = '',
  label = 'Loading...',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  }

  const colorClasses = {
    blue: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-600',
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label={label}
    >
      <div
        className={`
          animate-spin rounded-full border-2 border-t-transparent
          ${sizeClasses[size]} 
          ${colorClasses[color]}
        `}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export default LoadingSpinner
