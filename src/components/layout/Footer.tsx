import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              San Fortress
            </h3>
            <p className="text-gray-400">
              Clan gaming elite di BloodStrike FPS. 
              Bergabunglah dengan kami dan menjadi bagian dari 
              komunitas gaming terbaik.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="/rules" className="text-gray-400 hover:text-primary">
                  Peraturan
                </a>
              </li>
              <li>
                <a href="/members" className="text-gray-400 hover:text-primary">
                  Anggota
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-primary">
                  Galeri
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                className="flex items-center text-gray-400 hover:text-primary"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
              <a 
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="flex items-center text-gray-400 hover:text-primary"
              >
                <MdEmail className="mr-2" /> Email
              </a>
              <a 
                href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD}`}
                className="flex items-center text-gray-400 hover:text-primary"
              >
                <FaDiscord className="mr-2" /> Discord
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} San Fortress. 
            Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}