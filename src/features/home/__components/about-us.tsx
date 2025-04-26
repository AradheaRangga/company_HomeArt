import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'

function AboutUs() {
  return (
    <section id='about-us' className='bg-gray-50 py-16 dark:bg-gray-900'>
      <MaxWidthWrapper>
        <AnimationContainer>
          <div className='grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 xl:gap-12'>
            <div className='flex w-full items-start justify-center lg:justify-start'>
              <div className='h-fit w-full max-w-lg rounded-3xl p-4 sm:border'>
                <img
                  className='h-full w-full rounded-3xl object-contain sm:ml-5 sm:mt-5'
                  src='/about/logo.png'
                  alt='logo-home-art-creative'
                />
              </div>
            </div>
            <div className='inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start'>
              <div className='flex w-full flex-col items-start justify-center gap-8'>
                <div className='flex flex-col items-center justify-start gap-4 lg:items-start'>
                  <h6 className='text-base font-normal leading-relaxed text-gray-400'>
                    About Us
                  </h6>
                  <div className='flex w-full flex-col items-center justify-start gap-3 lg:items-start'>
                    <h2 className='text-dark mb-6 text-[32px] font-bold uppercase dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
                      THE TALE OF OUR ACHIEVEMENT STORY{' '}
                    </h2>
                    <p className='text-center text-base font-normal leading-relaxed text-muted-foreground lg:text-start'>
                    Welcome to Home Art Creative! We're a custom printing company based in Surabaya, offering products like lanyards, ID cards, wristbands, and more.
                    Our goal is simple: to help you bring your vision to life with high-quality, functional, and stylish products. Whether you're planning an event, representing a student group, or promoting your brand, we’ve got you covered.
                    We believe that every product we create is more than just an item-it's an opportunity to make a statement, build a brand, and connect with others. Let us help you create something that stands out!
                    </p>
                  </div>
                </div>
                <div className='flex w-full flex-col items-start justify-center gap-6'>
                  <div className='grid w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2'>
                    <div className='inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400'>
                      <h4 className='font-manrope text-2xl font-bold leading-9 text-gray-900'>
                        10.000+ Lanyards
                      </h4>
                      <p className='text-base font-normal leading-relaxed text-gray-500'>
                      10.000+ high-quality lanyards perfect for events, offices, and branding needs.
                      </p>
                    </div>
                    <div className='inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400'>
                      <h4 className='font-manrope text-2xl font-bold leading-9 text-gray-900'>
                        10.000+ ID Cards
                      </h4>
                      <p className='text-base font-normal leading-relaxed text-gray-500'>
                      Providing high-quality ID cards for businesses, schools, and events.
                      </p>
                    </div>
                  </div>
                  <div className='grid h-full w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2'>
                    <div className='inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400'>
                      <h4 className='font-manrope text-2xl font-bold leading-9 text-gray-900'>
                        5.000+ Concert Wristbands
                      </h4>
                      <p className='text-base font-normal leading-relaxed text-gray-500'>
                      5.000+ Concert wristbands designed for security, style, and unforgettable event experiences.
                      </p>
                    </div>
                    <div className='inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400'>
                      <h4 className='font-manrope text-2xl font-bold leading-9 text-gray-900'>
                        1.000+ Clients
                      </h4>
                      <p className='text-base font-normal leading-relaxed text-gray-500'>
                      Trusted by 1.000+ clients across industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </section>
  )
}

export { AboutUs }
