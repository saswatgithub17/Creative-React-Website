// ============================================================
// ChatbotButton.jsx — Floating Action Button
// ============================================================

export default function ChatbotButton({ isOpen, hasUnread, onClick }) {
  return (
    <button
      id="ctc-chatbot-fab"
      className="ctc-chatbot-fab"
      onClick={onClick}
      aria-label={isOpen ? 'Close chat' : 'Open CTC Assistant'}
      title={isOpen ? 'Close chat' : 'Chat with CTC Bot'}
    >
      {/* Unread notification dot */}
      {hasUnread && !isOpen && (
        <span className="ctc-fab-dot" aria-hidden="true" />
      )}

      {/* Toggle icon: chat ↔ close */}
      <span
        className={`ctc-fab-icon ${isOpen ? 'open' : ''}`}
        aria-hidden="true"
      >
        {isOpen ? '✕' : (
          <img
            src={`${import.meta.env.BASE_URL}images/chatbot/technocrat.png`}
            alt="Technocrat Logo"
            className="fab-img"
          />
        )}
      </span>
    </button>
  );
}
