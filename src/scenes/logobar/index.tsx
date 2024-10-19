import React from 'react'
import Logo from "@/assets/Logo.png"


type Props = {}

const LogoBar = (props: Props) => {
  return  (
    <section>
        <div className="relative">
            <div className="fixed top-0 w-full bg-blue-950 py-4 z-50 text-center">
                <div className="flex items-center justify-center space-x-4">
                    {/* Logo */}
                    <img src={Logo} className="h-28" alt="logo" /> {/* Adjust height with 'h-16' or as needed */}
    
                    {/* Text */}
                    <div className="text-white">
                        <p className="font-bold text-6xl italic">MOUTH COAST SAFETY AGENCY</p>
                        <p className="text-2xl">SECURE - DEFEND - PROTECT - CA PPO 30334</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoBar