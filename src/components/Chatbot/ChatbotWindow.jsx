// ============================================================
// ChatbotWindow.jsx — Chat Panel (Messages, Input, Quick Replies)
// ============================================================
import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { getResponse } from './ChatbotEngine';

// ── Typing Indicator ────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="ctc-typing-indicator">
      <div className="ctc-msg-avatar" role="img" aria-label="CTC Bot">
        <img
          src="/images/chatbot/technocrat.png"
          alt="CTC Bot"
          className="ctc-avatar-img"
        />
      </div>
      <div className="ctc-typing-bubble">
        <span className="ctc-typing-dot" />
        <span className="ctc-typing-dot" />
        <span className="ctc-typing-dot" />
      </div>
    </div>
  );
}

// ── Chat Window ─────────────────────────────────────────────
export default function ChatbotWindow({ messages, onSendMessage, onClose, onMinimize, isClosing }) {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuickReplies, setCurrentQuickReplies] = useState(
    ['Admissions', 'Courses', 'Placements', 'Gymkhana', 'Contact Us']
  );
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Update quick replies from last bot message
  useEffect(() => {
    const lastBot = [...messages].reverse().find(m => m.sender === 'bot');
    if (lastBot?.quickReplies?.length) {
      setCurrentQuickReplies(lastBot.quickReplies);
    }
  }, [messages]);

  // Focus input on open
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 400);
  }, []);

  const handleSend = async (text) => {
    const trimmed = (text || inputValue).trim();
    if (!trimmed) return;

    setInputValue('');

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      links: [],
      quickReplies: [],
      timestamp: new Date(),
    };
    onSendMessage(userMsg);

    // Show typing indicator
    setIsTyping(true);

    // Simulate thinking delay (600ms – 1.2s)
    const delay = 600 + Math.random() * 600;
    await new Promise(r => setTimeout(r, delay));

    // Get bot response
    const response = getResponse(trimmed);
    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: response.text,
      links: response.links || [],
      quickReplies: response.quickReplies || [],
      timestamp: new Date(),
    };

    setIsTyping(false);
    onSendMessage(botMsg);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`ctc-chat-window${isClosing ? ' closing' : ''}`} role="dialog" aria-label="CTC Assistant Chat">

      {/* ── Header ── */}
      <div className="ctc-chat-header">
        <div className="ctc-chat-avatar" role="img" aria-label="CTC Bot Avatar">
          <img
            src="/images/chatbot/technocrat.png"
            alt="CTC Bot"
            className="ctc-avatar-img"
          />
        </div>
        <div className="ctc-chat-header-info">
          <div className="ctc-chat-header-name">CTC Assistant</div>
          <div className="ctc-chat-header-status">
            <span className="ctc-status-dot" />
            Online — Creative Techno College
          </div>
        </div>
        <div className="ctc-chat-header-actions">
          <button
            id="ctc-chat-minimize-btn"
            className="ctc-header-btn"
            onClick={onMinimize}
            aria-label="Minimize chat"
            title="Minimize"
          >
            −
          </button>
          <button
            id="ctc-chat-close-btn"
            className="ctc-header-btn"
            onClick={onClose}
            aria-label="Close chat"
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* ── Messages ── */}
      <div className="ctc-messages-container" role="log" aria-live="polite" aria-label="Chat messages">
        {messages.map(msg => (
          <ChatMessage
            key={msg.id}
            message={msg}
          />
        ))}

        {/* Typing indicator */}
        {isTyping && <TypingIndicator />}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* ── Quick Replies ── */}
      {currentQuickReplies.length > 0 && !isTyping && (
        <div className="ctc-quick-replies" role="group" aria-label="Quick reply options">
          {currentQuickReplies.map((reply, i) => (
            <button
              key={i}
              id={`ctc-quick-reply-${reply.toLowerCase().replace(/\s+/g, '-')}`}
              className="ctc-quick-reply-btn"
              onClick={() => handleSend(reply)}
              aria-label={`Quick reply: ${reply}`}
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* ── Input Area ── */}
      <div className="ctc-input-area">
        <input
          ref={inputRef}
          id="ctc-chat-input"
          type="text"
          className="ctc-chat-input"
          placeholder="Type a message..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Type your message to CTC Bot"
          maxLength={300}
          autoComplete="off"
        />
        <button
          id="ctc-chat-send-btn"
          className="ctc-send-btn"
          onClick={() => handleSend()}
          disabled={!inputValue.trim() || isTyping}
          aria-label="Send message"
          title="Send"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
