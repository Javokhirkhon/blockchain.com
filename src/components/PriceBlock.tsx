const PriceBlock = ({
  title,
  price,
  color,
}: {
  title: string
  price: number
  color: string
}) => (
  <div className='bg-gray-800 p-4 rounded-lg'>
    <h2 className='text-lg font-semibold'>{title}</h2>
    <p className={`text-${color}-500`}>${price.toLocaleString()}</p>
  </div>
)

export default PriceBlock
