import youtubeLogo from '@/assets/youtube-icon.png'
import xLogo from '@/assets/x-logo.png'
import instagramLogo from '@/assets/instagram-logo.png'

const Footer = () => {
  return <footer className='bg-blue-950 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <p className='text-4xl text-white font-bold italic'>SOUTH COAST SAFETY AGENCY</p>
            <p className='my-5 text-white text-lg'>
            Terms and conditions apply. Services may vary based on location and availability. Privacy policy in effect. Your safety and satisfaction are our top priorities. All services are compliant with California regulations. Contact us for more details.
            </p>
            <p className='my-5 text-white text-lg'>© South Coast Safety Agency, All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0 text-white text-lg'>
            <h4 className='font-bold'>Links</h4>

            <a href='https://www.youtube.com/'>
                <p className='my-5 flex items-center'>
                    <img src={youtubeLogo} className='w-10 h-10 mr-2' />
                    Watch our videos!
                </p>
            </a>

            <a href='https://x.com/?lang=en'>
                <p className='my-5 flex items-center'>
                    <img src={xLogo} className='w-10 h-10 mr-2' />
                    Follow us on X
                </p>
            </a>

            <a href='https://www.instagram.com/'>
                <p className='my-5 flex items-center'>
                    <img src={instagramLogo} className='w-10 h-10 mr-2' />
                    Photo gallery
                </p>
            </a>
            
        </div>
        <div className='mt-16 basis-1/4 md:mt-0 text-white text-lg'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>For inquiries or to learn more about how we can help secure your safety, reach out to us today!</p>
            <p>(333) 425-6825</p>
        </div>
    </div>

  </footer>
}

export default Footer