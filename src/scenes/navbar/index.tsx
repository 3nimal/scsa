import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import LoginPopup from "@/scenes/loginpopup"

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
  displayLogoBar: boolean
};

  const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage, displayLogoBar }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-blue-950 drop-shadow"

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };

  return (
      <div>
        {/* Conditionally render the logo bar if displayLogoBar is set to true */}
        {
          (isAboveMediumScreens && displayLogoBar && isTopOfPage && (
            <div className="relative">
              {/* Set a high z-index so it stays above the Navbar */}
              <div className="fixed top-0 w-full bg-blue-950 py-4 z-50 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <img src={Logo} className="h-28" alt="logo" />
                  <div className="text-white">
                    <p className="font-bold text-6xl italic">NORTH COAST SAFETY AGENCY</p>
                    <p className="text-2xl">SECURE - DEFEND - PROTECT - CA PPO 30334</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

    <div >
      <nav className="fixed z-40">
      <div className={`${navbarBackground} fixed w-full ${(displayLogoBar && isTopOfPage) ? 'top-[4rem] py-20' : 'top-[0rem]'} `}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full`}>

            {/* MENU ITEMS */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Leadership"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                 
                {/*
                  <img src={SCSALogo} width='400' className="pl-8" />
                */}

                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p className='text-blue-400 text-lg cursor-pointer' onClick={toggleLoginPopup}>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get a quote today!
                  </ActionButton>

                  {/* Show LoginPopup when isLoginPopupOpen is true */}
      {isLoginPopupOpen && (
        <LoginPopup onClose={toggleLoginPopup} />
      )}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-900 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Leadership"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
    </div>
  </div>
  );
};

export default Navbar