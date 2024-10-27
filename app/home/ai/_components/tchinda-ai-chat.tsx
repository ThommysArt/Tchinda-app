'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { IconSend, IconRobot, IconUser } from '@tabler/icons-react'

type Message = {
  id: number;
  role: 'user' | 'ai';
  content: string;
}

export default function TchindaAIChat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const { toast } = useToast()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const newMessage: Message = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, newMessage])
    setInput('')
    setIsTyping(true)

    // TODO: Implement actual AI response logic
    // For now, we'll just simulate a response
    setTimeout(() => {
      const aiResponse: Message = { 
        id: Date.now(), 
        role: 'ai', 
        content: 'This is a simulated AI response. I can provide information about administrative procedures and documents in Cameroon.'
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)

    toast({
      title: "Message Sent",
      description: "Your message has been sent to Tchinda AI.",
    })
  }

  return (
    <div className="flex flex-col h-[600px] bg-background rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                  {message.role === 'user' ? <IconUser size={24} /> : <IconRobot size={24} />}
                </div>
                <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  {message.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
              Tchinda is typing...
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-background border-t">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <IconSend size={18} />
          </Button>
        </form>
      </div>
    </div>
  )
}