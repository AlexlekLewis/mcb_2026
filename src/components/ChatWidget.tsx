"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "system", content: "Hi there! 👋 Welcome to Modern Curtains & Blinds. How can we help you transform your home today?" }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { role: "user", content: inputValue }]);
        setInputValue("");

        // Mock auto-response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: "system",
                content: "Thanks for your message! One of our design consultants will be with you shortly. In the meantime, feel free to browse our collection."
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-lg shadow-2xl w-[350px] md:w-[380px] overflow-hidden border border-stone-200"
                    >
                        {/* Header */}
                        <div className="bg-mcb-charcoal text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <div>
                                    <h3 className="font-serif font-bold text-sm">MCB Concierge</h3>
                                    <p className="text-[10px] text-stone-300">Online & Ready to Help</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-stone-400 hover:text-white transition-colors"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="h-[400px] overflow-y-auto p-4 bg-mcb-paper space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "max-w-[85%] p-3 text-sm leading-relaxed rounded-2xl",
                                        msg.role === "user"
                                            ? "bg-mcb-clay text-white ml-auto rounded-br-sm"
                                            : "bg-white text-stone-700 shadow-sm border border-stone-100 mr-auto rounded-bl-sm"
                                    )}
                                >
                                    {msg.content}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-stone-100">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-stone-50 text-sm p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-mcb-clay/50 text-mcb-charcoal placeholder:text-stone-400"
                                />
                                <button
                                    type="submit"
                                    className="bg-mcb-terracotta text-white p-3 rounded-md hover:bg-stone-800 transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-mcb-terracotta rounded-full shadow-xl flex items-center justify-center text-white hover:bg-mcb-charcoal transition-colors relative"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
                )}
            </motion.button>
        </div>
    );
}
