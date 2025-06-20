"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions about DairyBot? Get in touch with our team and we'll be happy to assist you with any inquiries
          about our AI assistant for dairy farming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="border-dairy-green-200 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle className="h-16 w-16 text-dairy-green-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      className="mt-6 bg-dairy-green-600 hover:bg-dairy-green-700"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="border-dairy-green-200 focus-visible:ring-dairy-green-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="border-dairy-green-200 focus-visible:ring-dairy-green-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="border-dairy-green-200 focus-visible:ring-dairy-green-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-dairy-green-200 focus-visible:ring-dairy-green-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-dairy-green-600 hover:bg-dairy-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-dairy-green-200 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-dairy-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-dairy-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@dairybot.com</p>
                      <p className="text-gray-600">support@dairybot.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-dairy-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-dairy-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">(214) 929-5488</p>
                      <p className="text-gray-600">(214) 929-5488</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-dairy-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-dairy-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">
                        600 John Kimbrough Blvd, 2402 TAMU, College Station, TX
                        <br />
                        College Station, TX 77843
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

