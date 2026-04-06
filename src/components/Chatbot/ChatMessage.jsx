// ============================================================
// ChatMessage.jsx — Individual Message Bubble
// ============================================================
import { Link } from 'react-router-dom';

// Render text with **bold** markdown support
function renderText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function formatTime(date) {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export default function ChatMessage({ message, onQuickReply }) {
  const isBot = message.sender === 'bot';

  return (
    <div className={`ctc-message ${isBot ? 'bot' : 'user'}`}>
      {/* Bot avatar */}
      {isBot && (
        <div className="ctc-msg-avatar" role="img" aria-label="CTC Bot">
          <img
            src="/images/chatbot/technocrat.png"
            alt="CTC Bot"
            className="ctc-avatar-img"
          />
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
        {/* Message bubble */}
        <div className="ctc-msg-bubble">
          <span className="ctc-msg-text">{renderText(message.text)}</span>

          {/* Navigation links inside message */}
          {isBot && message.links && message.links.length > 0 && (
            <div className="ctc-msg-links">
              {message.links.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="ctc-msg-link"
                  title={`Go to ${link.label}`}
                >
                  🔗 {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Timestamp */}
        <span className="ctc-msg-time">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
