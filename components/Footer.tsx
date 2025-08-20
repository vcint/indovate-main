import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer(){
  const socials = [
    { Icon: FaFacebook, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaLinkedin, href: '#' },
  ];
  return (
    <footer className="mt-20 border-t">
      <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Thinkish Agency. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socials.map(({ Icon, href }) => (
            <a key={href} href={href} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50" aria-label="social link">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
