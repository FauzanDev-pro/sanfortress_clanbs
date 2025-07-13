'use client'
import { motion } from 'framer-motion'
import PageTitle from '@/components/ui/PageTitle'
import Image from 'next/image'

const members = [
  {
    name: "Alex Gaming",
    role: "Ketua Clan",
    avatar: "/images/members/leader.jpg",
    stats: {
      kills: 1500,
      wins: 200,
      rank: "Master"
    }
  },
  {
    name: "RajaSniper",
    role: "Wakil Ketua",
    avatar: "/images/members/deputy.jpg",
    stats: {
      kills: 1200,
      wins: 180,
      rank: "Elite"
    }
  },
  {
    name: "ProGamer123",
    role: "Anggota Elite",
    avatar: "/images/members/member1.jpg",
    stats: {
      kills: 1000,
      wins: 150,
      rank: "Diamond"
    }
  },
  // Anda bisa menambahkan anggota lainnya disini
]

export default function Members() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle 
        title="Anggota Clan" 
        subtitle="Pemain Elite San Fortress" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-500">Kills</p>
                  <p className="font-bold text-primary">{member.stats.kills}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wins</p>
                  <p className="font-bold text-primary">{member.stats.wins}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rank</p>
                  <p className="font-bold text-primary">{member.stats.rank}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}