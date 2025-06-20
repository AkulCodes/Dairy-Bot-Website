import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart2, MessageSquare, Leaf, Droplet, Sun } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dairy-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Dairy Farming with <span className="text-dairy-green-500">DairyBot</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Your AI assistant for optimizing dairy operations, improving herd health, and maximizing profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-dairy-green-600 hover:bg-dairy-green-700">
                  <Link href="/chat">
                    Start Chatting <MessageSquare className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-dairy-green-600 text-dairy-green-500 hover:bg-dairy-green-950"
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full bg-dairy-green-900/30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-dairy-green-500/30 animate-pulse"></div>
                <div className="text-dairy-green-500 text-9xl font-bold">DB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              DairyBot aims to revolutionize dairy farming by providing accessible AI-powered assistance to farmers of
              all sizes, helping them make data-driven decisions and implement sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-dairy-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart2 className="h-7 w-7 text-dairy-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Transform your farm data into actionable insights to optimize milk production, feed efficiency, and
                overall farm performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-dairy-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-dairy-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                Get guidance on implementing eco-friendly farming methods that reduce environmental impact while
                maintaining profitability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-dairy-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Droplet className="h-7 w-7 text-dairy-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Herd Health Management</h3>
              <p className="text-gray-600">
                Monitor and improve the health of your herd with AI-powered recommendations for nutrition, disease
                prevention, and welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How DairyBot Helps You</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Our AI assistant is designed specifically for the unique challenges of dairy farming, providing expert
              guidance whenever you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-dairy-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-dairy-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">24/7 Expert Assistance</h3>
                <p className="text-gray-600">
                  Get immediate answers to your dairy farming questions anytime, anywhere. DairyBot is always available
                  to provide guidance based on the latest research and best practices.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-dairy-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Sun className="h-6 w-6 text-dairy-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Seasonal Planning</h3>
                <p className="text-gray-600">
                  Receive customized recommendations for managing your dairy farm throughout the year, accounting for
                  seasonal changes in weather, feed availability, and market conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-dairy-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-dairy-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Production Optimization</h3>
                <p className="text-gray-600">
                  Analyze your production data to identify opportunities for improvement and implement strategies to
                  increase milk yield and quality while controlling costs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-dairy-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-dairy-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Sustainable Solutions</h3>
                <p className="text-gray-600">
                  Discover eco-friendly farming techniques that can reduce your carbon footprint, conserve water, and
                  promote biodiversity while maintaining or improving farm productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dairy-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Dairy Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of dairy farmers who are already using DairyBot to improve their operations and increase
            profitability.
          </p>
          <Button asChild size="lg" className="bg-white text-dairy-green-900 hover:bg-gray-100">
            <Link href="/chat">
              Start Chatting with DairyBot <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

