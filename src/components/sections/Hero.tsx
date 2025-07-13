'use client'
import { motion } from 'framer-motion'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Hero() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6">
          Selamat Datang di San Fortress
        </h1>
        <p className="text-xl md:text-2xl text-dark/80 mb-12">
          Clan Elite BloodStrike FPS Gaming
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
            className="btn-primary flex items-center gap-2"
          >
            <FaWhatsapp size={20} />
            Gabung via WhatsApp
          </a>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="btn-primary flex items-center gap-2"
          >
            <MdEmail size={20} />
            Email Kami
          </a>
          <a
            href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD}`}
            className="btn-primary flex items-center gap-2"
          >
            <FaDiscord size={20} />
            Gabung Discord
          </a>
        </div>
      </motion.div>
    </section>
  )
}