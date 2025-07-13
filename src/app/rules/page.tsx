'use client'
import { motion } from 'framer-motion'
import PageTitle from '@/components/ui/PageTitle'

const rules = [
  {
    title: "Sikap dan Sportivitas",
    description: "Selalu menjaga sikap terhadap sesama anggota clan dan lawan. Dilarang toxic dan menggunakan cheat."
  },
  {
    title: "Partisipasi Aktif",
    description: "Anggota wajib berpartisipasi dalam kegiatan clan dan aktif bermain secara rutin."
  },
  {
    title: "Komunikasi",
    description: "Gunakan saluran komunikasi resmi clan untuk koordinasi dan bermain tim."
  },
  {
    title: "Kehadiran",
    description: "Wajib hadir minimal 3 kali dalam seminggu untuk latihan clan."
  },
  {
    title: "Turnamen",
    description: "Berpartisipasi aktif dalam turnamen yang diikuti clan."
  },
  {
    title: "Loyalitas",
    description: "Menjaga nama baik clan dan berkomitmen untuk kemajuan tim."
  }
]

export default function Rules() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle 
        title="Peraturan Clan" 
        subtitle="Panduan untuk anggota San Fortress" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-primary">
              {rule.title}
            </h3>
            <p className="text-gray-700">
              {rule.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}