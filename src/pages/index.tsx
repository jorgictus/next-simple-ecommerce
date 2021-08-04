import Heading from '../components/Heading'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'
type CardProps = {
  href: string
  imgSrc: string
  layoutId: string
  title: string
}
const Card = ({ href, imgSrc, layoutId, title }: CardProps) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative py-3 rounded-xl hover:bg-gray-700 hover:text-white cursor-pointer transition"
        whileHover={{
          scale: 1.1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5
          }
        }}
        initial={{ scale: 1 }}
      >
        <motion.img src={imgSrc} layoutId={layoutId} />

        <motion.div className="flex flex-col justify-center items-center w-full ">
          <p className="text-xl">Bike name</p>
          <p className="text-2xl font-extrabold">R$ 99.00</p>
        </motion.div>
      </motion.div>
    </Link>
  )
}

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}

export default function Home() {
  return (
    <>
      <div className="absolute h-screen w-1/2 -ml-20 bg-blue-500"></div>
      <div className="relative">
        <Header />
        <div className="p-12 ">
          <Heading color="text-white" weight="font-bold">
            I&apos;m looking for a bike
          </Heading>
          <div className="text-md w-96 mt-4 text-white">
            The range of Gigant on road e-bikes swells from one offering in 2018
            for 2019
          </div>
          <div className="text-md w-96 mt-4 text-white">SHOP THIS MODEL</div>
        </div>
        <div className="flex mx-10 items-center">
          <motion.div
            className="w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-4 md:grid-rows-1 "
            transition={{
              delay: 2
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
          ></motion.div>
        </div>
      </div>
    </>
  )
}
