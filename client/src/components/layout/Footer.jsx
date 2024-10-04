import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='h-[800px] mx-[70px]'>
      <div className='flex flex-col gap-5 justify-between items-center border-t-[1px] border-b-[1px] border-gray-300 pb-[20px] pt-10'>
        <img
          src={process.env.PUBLIC_URL + '/assets/vendors.svg'}
          alt='vendors'
          className='object-cover w-full h-full'
        />{' '}
        <div className='flex flex-row justify-between w-full'>
          <div className='footer-navigation-link flex flex-row w-1/2'>
            <ul className='contact-usa gap-2 flex flex-col w-8/12'>
              <li className='header font-bold'>Contact Us</li>
              <li>Email: Nguyennguyen8343@gmail.com</li>
              <li>Phone: 0329868603</li>
              <li>Toll-free: 1800 588 801</li>
              <li className='w-1/2'>
                Address: Phuoc Thuan, Xuyen Moc District, Ba Ria – Vung Tau
                Province, Vietnam
              </li>
            </ul>

            <ul className='Company flex flex-col w-4/12 gap-2'>
              <li className='header font-bold'>Company</li>
              <li>About Intercontinal</li>
              <li>Access for all</li>
              <li>Chat with us</li>
              <li>Intercontinal Mobile</li>
              <li>Hotel Development</li>
            </ul>
          </div>

          <div className='social-media-navigation-link flex flex-col items-center'>
            <div className='font-bold'>Social Media</div>

            <div className='social-media-list'>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={process.env.PUBLIC_URL + '/assets/social media.png'}
                  alt='social media'
                  className='object-cover w-full h-full'
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center gap-5 pt-10'>
        <div className='flex flex-row gap-10 justify-center items-center w-full'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            About us
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            How to get here
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Gallery
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Privacy policy
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Terms
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Careers
          </a>
        </div>

        <div className='footer-copyright flex flex-row justify-center items-center w-full'>
          <span>Copyright</span>
          <span>&copy; {new Date().getFullYear()} TG. All rights reserved</span>
        </div>
      </div>
    </section>
  )
}

export default Footer
