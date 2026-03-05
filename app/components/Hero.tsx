'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          All Comercial
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl mb-8"
        >
          <TypeAnimation
            sequence={[
              'Transformamos ideas en realidad',
              2000,
              'Potenciamos tu negocio con IA',
              2000,
              'Desarrollo web profesional',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Comenzamos?
        </motion.button>
      </div>
    </section>
  )
}