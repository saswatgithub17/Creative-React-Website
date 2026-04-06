// ============================================================
// Chatbot.jsx — Root Component (State + Orchestration)
// ============================================================
import { useState, useCallback } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatbotWindow from './ChatbotWindow';
import { WELCOME_MESSAGE } from './ChatbotEngine';
import './chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setIsClosing(false);
    setHasUnread(false);
  }, []);

  const closeChat = useCallback(() => {
    // Trigger close animation, then unmount
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 240);
  }, []);

  const minimizeChat = useCallback(() => {
    closeChat();
  }, [closeChat]);

  const toggleChat = useCallback(() => {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  }, [isOpen, openChat, closeChat]);

  const handleSendMessage = useCallback((message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  return (
    <>
      {/* Chat window — rendered but hidden during close animation */}
      {isOpen && (
        <ChatbotWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={closeChat}
          onMinimize={minimizeChat}
          isClosing={isClosing}
        />
      )}

      {/* Floating action button — always visible */}
      <ChatbotButton
        isOpen={isOpen}
        hasUnread={hasUnread}
        onClick={toggleChat}
      />
    </>
  );
}
