'use client'
import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaGamepad, FaHeadset } from 'react-icons/fa'

const features = [
  {
    icon: <FaTrophy className="text-4xl text-primary" />,
    title: "Prestasi Clan",
    description: "Juara berbagai turnamen BloodStrike tingkat nasional"
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    title: "Komunitas Solid",
    description: "Anggota aktif yang selalu mendukung satu sama lain"
  },
  {
    icon: <FaGamepad className="text-4xl text-primary" />,
    title: "Latihan Rutin",
    description: "Jadwal latihan terstruktur untuk mengembangkan skill"
  },
  {
    icon: <FaHeadset className="text-4xl text-primary" />,
    title: "Komunikasi Tim",
    description: "Sistem komunikasi yang terorganisir via Discord"
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kenapa Bergabung dengan Kami?
          </h2>
          <p className="text-gray-600">
            San Fortress adalah tempat untuk pemain yang ingin berkembang
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}