'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTitle from '@/components/ui/PageTitle'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/tournament1.jpg",
    title: "Turnamen BloodStrike Championship",
    category: "Turnamen"
  },
  {
    id: 2,
    image: "/images/gallery/training1.jpg",
    title: "Latihan Tim Squad A",
    category: "Latihan"
  },
  {
    id: 3,
    image: "/images/gallery/event1.jpg",
    title: "Gathering Clan 2025",
    category: "Acara"
  },
  // Tambahkan item galeri lainnya sesuai kebutuhan
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const categories = ['Semua', 'Turnamen', 'Latihan', 'Acara']

  const filteredItems = selectedCategory === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle 
        title="Galeri" 
        subtitle="Momen Berkesan San Fortress" 
      />
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}