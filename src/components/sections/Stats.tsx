'use client'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  {
    number: 50,
    label: "Anggota Aktif",
    suffix: "+"
  },
  {
    number: 100,
    label: "Turnamen Diikuti",
    suffix: "+"
  },
  {
    number: 25,
    label: "Prestasi Diraih",
    suffix: ""
  },
  {
    number: 3,
    label: "Tahun Berpengalaman",
    suffix: ""
  }
]

export default function Stats() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp end={stat.number} duration={2.5} />
                {stat.suffix}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}