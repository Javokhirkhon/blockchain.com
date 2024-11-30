const PriceBlock = ({
  title,
  price,
  className,
}: {
  title: string
  price: number
  className: string
}) => (
  <div className='bg-gray-800 p-4 rounded-lg'>
    <h2 className='text-lg font-semibold'>{title}</h2>
    <p className={className}>${price.toLocaleString()}</p>
  </div>
)

export default PriceBlock
