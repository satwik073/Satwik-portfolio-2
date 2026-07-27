const StarRating = ({
  count = 0,
  totalStars = 5,
  color = '#F59E0B',
}: {
  count?: number
  totalStars?: number
  color?: string
}) => {
  return (
    <div className='flex' aria-hidden>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1
        const filled = ratingValue <= count
        const half = ratingValue - 0.5 === count
        return (
          <svg
            key={index}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill={filled || half ? color : 'none'}
            stroke={color}
            strokeWidth='1.5'
            aria-hidden>
            {half ? (
              <defs>
                <linearGradient id={`half-${index}`}>
                  <stop offset='50%' stopColor={color} />
                  <stop offset='50%' stopColor='transparent' />
                </linearGradient>
              </defs>
            ) : null}
            <path
              fill={half ? `url(#half-${index})` : filled ? color : 'none'}
              d='M12 2.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 15.8 6.7 18.6l1-5.8L3.5 8.7l5.9-.9L12 2.5z'
            />
          </svg>
        )
      })}
    </div>
  )
}

export default StarRating
