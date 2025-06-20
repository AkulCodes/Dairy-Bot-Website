import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-dairy-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-dairy-green-500 text-lg font-bold mb-4">DairyBot</h3>
            <p className="text-gray-300 text-sm">
              Your AI assistant for all dairy farming needs. Get expert advice, manage your farm efficiently, and
              optimize your dairy operations.
            </p>
          </div>
          <div>
            <h3 className="text-dairy-green-500 text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-dairy-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-gray-300 hover:text-dairy-green-400 transition-colors">
                  Chat with DairyBot
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-dairy-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-dairy-green-500 text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Email: info@dairybot.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Dairy Lane, Farmville, CA 94123</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DairyBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

