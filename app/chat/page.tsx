"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, Bot, User } from "lucide-react"

// In a real application, we would use the AI SDK to handle the chat
// For this demo, we'll simulate responses
const SAMPLE_RESPONSES = [
  "The optimal temperature for storing raw milk is between 36-38°F (2-3°C). This helps prevent bacterial growth while maintaining quality.",
  "For a Holstein cow producing around 80 pounds of milk daily, you should provide approximately 110-120 pounds of total mixed ration (TMR) with 16-17% protein content.",
  "Mastitis can be prevented through proper milking procedures, maintaining clean bedding, regular teat dipping, and culling chronically infected cows. Early detection is crucial for effective treatment.",
  "The ideal body condition score for a dairy cow at calving is between 3.0 and 3.5 on a 5-point scale. This helps minimize metabolic disorders and reproductive issues.",
  "To improve milk fat content, consider adjusting the forage-to-concentrate ratio in your feed, ensuring adequate fiber length, and adding appropriate fat supplements to the diet.",
]

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm DairyBot, your AI assistant for dairy farming. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = SAMPLE_RESPONSES[Math.floor(Math.random() * SAMPLE_RESPONSES.length)]
      const botMessage: Message = { role: "assistant", content: randomResponse }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Chat with DairyBot</h1>
        <p className="text-gray-600 mb-8">
          Ask any questions about dairy farming, herd management, milk production, or sustainable practices.
        </p>

        <Card className="border-dairy-green-200 mb-4">
          <CardContent className="p-6">
            <div className="space-y-4 mb-4 max-h-[500px] overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.role === "assistant"
                        ? "bg-dairy-green-50 text-dairy-black rounded-lg p-4"
                        : "bg-dairy-green-600 text-white rounded-lg p-4"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {message.role === "assistant" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                    </div>
                    <div>{message.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dairy-green-50 text-dairy-black rounded-lg p-4 flex gap-3 max-w-[80%]">
                    <Bot className="h-5 w-5 flex-shrink-0 mt-1" />
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-dairy-green-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-dairy-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-dairy-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || input.trim() === ""}
                className="bg-dairy-green-600 hover:bg-dairy-green-700"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-dairy-green-50 rounded-lg p-6 border border-dairy-green-100">
          <h2 className="text-xl font-bold mb-4">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "How to prevent mastitis?",
              "Optimal feed ratios for lactating cows",
              "Improving milk fat content",
              "Calf nutrition guidelines",
              "Sustainable manure management",
              "Heat detection methods",
            ].map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start border-dairy-green-200 hover:bg-dairy-green-100 text-dairy-green-800"
                onClick={() => {
                  setInput(topic)
                }}
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

