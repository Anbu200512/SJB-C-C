export default function WhatsAppFloat() {
  return (
    <>
      <a
        href="https://wa.me/919629528219?text=Hi%20SJB%20C%26C%2C%20I%27m%20interested%20in%20your%20construction%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp whatsapp-float-icon" />
        <span className="whatsapp-float-tooltip">Chat with us</span>
      </a>
      <style>{`
        .whatsapp-float{position:fixed;bottom:24px;left:24px;z-index:998;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(37,211,102,.4);transition:transform .3s,box-shadow .3s;text-decoration:none}
        .whatsapp-float:hover{transform:scale(1.1);box-shadow:0 6px 32px rgba(37,211,102,.55)}
        .whatsapp-float-icon{color:#fff;font-size:30px}
        .whatsapp-float-tooltip{position:absolute;left:72px;background:#fff;color:#333;padding:6px 14px;border-radius:8px;font-size:13px;font-weight:500;white-space:nowrap;box-shadow:0 2px 12px rgba(0,0,0,.12);opacity:0;pointer-events:none;transform:translateX(-8px);transition:opacity .3s,transform .3s}
        .whatsapp-float:hover .whatsapp-float-tooltip{opacity:1;transform:translateX(0)}
        .whatsapp-float::before{content:'';position:absolute;width:60px;height:60px;border-radius:50%;background:#25D366;animation:whatsappPulse 2s infinite;z-index:-1}
        @keyframes whatsappPulse{0%{transform:scale(1);opacity:.6}70%{transform:scale(1.4);opacity:0}100%{transform:scale(1.4);opacity:0}}
        @media(max-width:640px){.whatsapp-float{bottom:16px;left:16px;width:54px;height:54px}.whatsapp-float-icon{font-size:26px}.whatsapp-float-tooltip{display:none}}
      `}</style>
    </>
  )
}
