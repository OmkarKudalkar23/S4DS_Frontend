import { Link } from 'react-router-dom';

function Welcome(){
    return(
        <div className="w-full overflow-x-hidden">
            <div className="relative  overflow-x-hidden min-w-[100vw] h-[100vh]">
                <div>
                    <img src='assets\images\1000_F_182771643_1MM0WDpG2RwXue3dDxupuwVmAEH9IKR9 2.jpg' className='min-w-[100vw] h-[100vh] top-0 absolute'></img>
                </div>
                <div>
                    <img src='assets\images\modern-wood-floor-transparent-background-cutout-png 2.jpg' className='w-[100vw] h-[28vh] bottom-0 absolute'></img>
                </div>
                <div>
                    <img src='assets\images\Stairs-PNG-Picture 1-min.png' className='w-[45vw] h-[87vh] top-[-4%] absolute right-[-5%] z-40'></img>
                </div>
                <div>
                    <img src='assets\images\Polygon 1-min.png' className='w-[45vw] h-[70vh] top-[15%] absolute right-[-4.5%]'></img>
                </div>
                <div>
                    <img src='assets\images\unnamed-removebg-preview 1.jpg' className='w-[28vw] h-[60vh] top-[12%] absolute left-[4%]'></img>
                </div>
                <div>
                    <img src='assets\images\image 39-min.png' className=' absolute h-[17vh] w-[10vw] left-[33%] top-[7%] z-30 '></img>
                </div>
                <div>
                    <img src='assets/images/Screenshot 2025-10-11 at 1.26.27 AM 3-min.png' className=' absolute h-[12vh] w-[9vw] left-[44%] top-[11%] z-30'></img>
                </div>
                <div>
                    <img src='assets\images\ff9e85bb8336df6374aa9ad194d0466d-removebg-preview 2 (1)-min.png' className=' absolute h-[12vh] w-[8vw] left-[54%] top-[17%] z-30'></img>
                </div>
                <div>
                    <img src='assets/images/Screenshot 2025-10-11 at 1.13.56 AM 3 (1)-min.png' className=' absolute h-[10vh] w-[8vw] left-[41%] top-[27%] z-30'></img>
                </div>
                <div>
                    <img src='assets\images\fa94095495270e3e8061f3df2ddc8ded-removebg-preview 1-min.png' className='absolute h-[20vh] w-[7vw] left-[65%] top-[8%] z-30 '></img>
                </div>
                <div className='bg-gradient-to-r from-[rgba(197,180,180,0.8)] to-[rgba(98,83,83,0.8)] absolute w-[90vw] lg:max-w-none min-h-[10vw] md:w-[70vw] sm:w-[75vw] pl-5 pb-5 pr-1 lg:w-[50vw] sm:max-w-[400px] pt-8 lg:pt-[2vw] md:min-w-[600px] sm:min-w-[550px] max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold rounded-lg border-[0.2rem] border-black z-50'>
                    <Link to="/welcome">
                        <img src='assets\images\Group 50 (1)-min.png' className=' lg:w-[4vw] md:w-[6vw] w-[8vw] sm:w-[6vw] absolute right-1 top-2 cursor-pointer'></img>
                    </Link>
                    
                    <div className="lg:leading-[3vw] md:leading-[3rem] leading-[1.5rem] lg:min-text lg:text-[2vw] md:text-2xl sm:text-xl ">WELCOME TO WARREN’S HOUSE, THE <br></br> SECRETS BEHIND THE DOORS AWAITS YOU</div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;