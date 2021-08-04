export type HeadingProps = {
  children: React.ReactNode
  color?: 'text-white' | 'text-black'
  lineLeft?: boolean
  lineColor?: 'border-red-400' | 'border-blue-600'
  weight?: 'font-light' | 'font-medium' | 'font-bold' | 'font-normal'
}
const Heading = ({
  children,
  color = 'text-black',
  lineLeft,
  lineColor = 'border-blue-600',
  weight = 'font-normal'
}: HeadingProps) => (
  <h2
    className={`text-4xl md:text-5xl 
    ${color} ${lineLeft && 'pl-3 py-3 border-l-8'} ${lineColor} ${weight}`}
  >
    {children}
  </h2>
)

export default Heading
