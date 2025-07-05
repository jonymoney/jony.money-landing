import Link from 'next/link';

interface AppIconProps {
  emoji: string;
  title: string;
  href: string;
}

function AppIcon({ emoji, title, href }: AppIconProps) {
  return (
    <Link href={href} className="no-underline transition-all duration-300 ease-out hover:scale-110">
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <div className="w-[70px] h-[70px] bg-white/10 backdrop-blur-xl rounded-[18px] flex items-center justify-center border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 ease-out hover:bg-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]">
          <span className="text-[32px] leading-none">{emoji}</span>
        </div>
        <span className="text-white text-[13px] font-normal text-center font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">{title}</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const apps = [
    { emoji: '🧑‍💻', title: 'About', href: '/about' },
    { emoji: '🚀', title: 'Projects', href: '/projects' },
    { emoji: '🧠', title: 'Experience', href: '/experience' },
    { emoji: '✍️', title: 'Blog', href: '/blog' },
    { emoji: '📬', title: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-float"></div>
      
      {/* Desktop: iPhone Frame */}
      <div className="hidden md:block">
        <div className="w-[375px] h-[812px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[50px] p-2 shadow-[0_0_0_2px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] relative">
          {/* Notch */}
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-gray-900 rounded-[20px] z-10"></div>
          
          {/* Screen */}
          <div className="w-full h-full bg-black/85 backdrop-blur-xl rounded-[42px] pt-[60px] px-5 pb-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-[42px]"></div>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center text-white text-base font-semibold mb-10 relative z-[5]">
              <span className="font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">9:41</span>
              <div className="w-6 h-3 border border-white/60 rounded-sm relative bg-white/80">
                <div className="absolute -right-[3px] top-[3px] w-[2px] h-[6px] bg-white/60 rounded-r-[1px]"></div>
              </div>
            </div>
            
            {/* Home Screen */}
            <div className="flex-1 flex flex-col relative z-[5]">
              <div className="grid grid-cols-4 gap-[30px] p-5 justify-items-center">
                {apps.map((app, index) => (
                  <div key={index} className={index === 4 ? "col-start-2 row-start-2" : ""}>
                    <AppIcon {...app} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Fullscreen */}
      <div className="md:hidden w-full h-screen bg-black/85 backdrop-blur-xl p-5">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-white text-base font-semibold mb-[60px]">
          <span className="font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">9:41</span>
          <div className="w-6 h-3 border border-white/60 rounded-sm relative bg-white/80">
            <div className="absolute -right-[3px] top-[3px] w-[2px] h-[6px] bg-white/60 rounded-r-[1px]"></div>
          </div>
        </div>
        
        {/* Home Screen */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-4 gap-10 p-5 justify-items-center sm:grid-cols-3 sm:gap-[35px]">
            {apps.map((app, index) => (
              <div key={index} className={`${index === 4 ? "col-start-2 row-start-2 sm:col-start-2" : ""}`}>
                <AppIcon {...app} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
