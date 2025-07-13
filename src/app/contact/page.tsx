'use client'
import { motion } from 'framer-motion'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PageTitle from '@/components/ui/PageTitle'

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle 
        title="Hubungi Kami" 
        subtitle="Bergabung dengan San Fortress sekarang!" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <FaWhatsapp className="text-6xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
          <p className="text-gray-600 mb-4">
            Respon cepat melalui WhatsApp
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Sekarang
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <MdEmail className="text-6xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600 mb-4">
            Kirim kami email
          </p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="btn-primary inline-block"
          >
            Email Kami
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <FaDiscord className="text-6xl text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Discord</h3>
          <p className="text-gray-600 mb-4">
            Gabung server Discord kami
          </p>
          <a
            href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD}`}
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabung Discord
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">
          Lokasi Latihan Offline
        </h3>
        <p className="text-gray-600">
          Warnet Gaming Center<br />
          Jl. Contoh No. 123<br />
          Kota, Provinsi<br />
          Buka: Setiap hari 10:00 - 22:00 WIB
        </p>
      </motion.div>
    </div>
  )
}