import { Text } from '@chakra-ui/react'
import { easeIn } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
  const [vanish, setVanish] = useState(false)

  const ADS = 'WELCOME TO YEMSAYS PROPERTIES AND INVESTMENT.'

  useEffect(() => {
    setTimeout(() => {
      setVanish(true)
    }, 20000)
  }, [])
  return (
    <Marquee
      speed={60}
      gradient={false}
      style={{
        position: `absolute`,
        opacity: `${vanish ? 0 : 1}`,
        backgroundColor: '#f78214',
        color: '#ffffff',
        height: '3rem',
        transition: `opacity 3s ease`,
        zIndex: 1,
      }}
    >
      <Text fontSize={`sm`} letterSpacing={`2px`}>
        {ADS}
      </Text>
    </Marquee>
  )
}

export default Marque
