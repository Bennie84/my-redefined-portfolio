import { XIcon, GitHubIcon, WhatsAppIcon, EmailIcon } from "./Icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://x.com/thatgirlbennie?s=11"
            className="social-icon"
            title="X"
          >
            <XIcon />
          </a>
          <a
            href="https://github.com/bennie84"
            className="social-icon"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://wa.me/+2349070868414"
            className="social-icon"
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="mailto:bennieeecodes@gmail.com"
            className="social-icon"
            title="Email"
          >
            <EmailIcon />
          </a>
        </div>
        <p className="footer-copyright">© 2026 Benniee. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
