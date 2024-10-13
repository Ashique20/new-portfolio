import { Link } from "react-router-dom"



const Projects=()=>{
   
return(
    <div className="carousel w-full min-h-screen bg-black">
  <div id="slide1" className="carousel-item relative w-full">
  <div className=" p-2 gap-20 flex m-20">
  <div className="flex  m-10 gap-6">
   <div>
   <img className="w-96 h-80"
      src="https://i.ibb.co/JqNrzxb/screencapture-66e54ff0a3e53a0e7b84de66-calm-haupia-b7955f-netlify-app-dashboard-profile-2024-10-13-0.png"
       />
   </div>
       
  <div>
  <img className="w-[100%] h-96 "
      src="https://i.ibb.co/GshgQfq/screencapture-66e54ff0a3e53a0e7b84de66-calm-haupia-b7955f-netlify-app-donation-Requests-2024-10-13-0.png"
       />
  </div>
  <div>
  <img className="w-96 h-80"
      src="https://i.ibb.co/Fm7KdfH/screencapture-66e54ff0a3e53a0e7b84de66-calm-haupia-b7955f-netlify-app-2024-10-13-02-58-47.png"
       />
  </div>
   </div>
   <div className="w-1/2 relative">
    <h1 className="text-2xl">Blood Slogan</h1>
    <ul className="text-white">
                    <div className="flex mt-6 items-center gap-2 "><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F6f55cc4f365b91752f117d8814994a61425376ff-210x240.png&w=64&q=75" alt="" /> <h1>HTML</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F00ccabe5b90c135fbd1a280c07e9cb534b86ed74-225x225.png&w=64&q=75" alt="" /> <h1>CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F609d72da05e786a3ee20e38766ea9c54171a364d-225x225.png&w=64&q=75" alt="" /> <h1>React JS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F10fc8d978042cb802b084da2538096e1759744a4-226x223.png&w=64&q=75" alt="" /> <h1>Tailwind CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Faa5038ab73c516f1700d70889a28aa9b262f7a3d-192x192.png&w=64&q=75" alt="" /> <h1>Tailwind CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Ff5816f75a1730e0a7afbe3c4307347ea009fd85f-252x200.png&w=64&q=75" alt="" /> <h1>BootsStrap</h1></div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-4" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F7294793c7c7da22d0c161d884314f00a79ee1564-192x263.png&w=64&q=75" alt="" />
                        <h1>Firebase</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-4" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Fe1f3912494dc5236cccaec39c4becafcdf46c16f-149x339.png&w=64&q=75" alt="" />
                        <h1>MongoDB</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-6" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F5663b71863d7a5db3c8ad63fad223bc0e707f571-211x238.png&w=64&q=75" alt="" />
                        <h1>Node JS</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-6" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Fc7caecfb3a81b9b3545d867c5b63dfd418b17f08-225x225.png&w=64&q=75" alt="" />
                        <h1>Express JS</h1>
                    </div>
                </ul>
                <a href="https://amazing-entremet-c37b3f.netlify.app/" className="btn absolute right-[260%] w-40 top-96 bg-purple-400 text-black">Live Link</a>
   </div>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
   <div className=" p-2 gap-20 flex m-20">
  <div className="flex  m-10 gap-6">
   <div>
   <img className="w-96 h-80"
      src="https://i.ibb.co/pw4K85H/screencapture-669005118bbb0b00a94f3254-resilient-lokum-9cfeaf-netlify-app-featured-2024-10-13-14-20.png"
       />
   </div>
       
  <div>
  <img className="w-[100%] h-96 "
      src="https://i.ibb.co/ncSV7VR/screencapture-669005118bbb0b00a94f3254-resilient-lokum-9cfeaf-netlify-app-add-Blog-2024-10-13-14-24.png"
       />
  </div>
  <div>
  <img className="w-96 h-80"
      src="https://i.ibb.co/M597Hzg/screencapture-669005118bbb0b00a94f3254-resilient-lokum-9cfeaf-netlify-app-wishlist-2024-10-13-14-19.png"
       />
  </div>
  
   </div>
   <div className="w-1/2 relative">
    <h1 className="text-2xl">Blog Web</h1>
    <ul className="text-white">
                    <div className="flex mt-6 items-center gap-2 "><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F6f55cc4f365b91752f117d8814994a61425376ff-210x240.png&w=64&q=75" alt="" /> <h1>HTML</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F00ccabe5b90c135fbd1a280c07e9cb534b86ed74-225x225.png&w=64&q=75" alt="" /> <h1>CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F609d72da05e786a3ee20e38766ea9c54171a364d-225x225.png&w=64&q=75" alt="" /> <h1>React JS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F10fc8d978042cb802b084da2538096e1759744a4-226x223.png&w=64&q=75" alt="" /> <h1>Tailwind CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Faa5038ab73c516f1700d70889a28aa9b262f7a3d-192x192.png&w=64&q=75" alt="" /> <h1>Tailwind CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Ff5816f75a1730e0a7afbe3c4307347ea009fd85f-252x200.png&w=64&q=75" alt="" /> <h1>BootsStrap</h1></div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-4" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F7294793c7c7da22d0c161d884314f00a79ee1564-192x263.png&w=64&q=75" alt="" />
                        <h1>Firebase</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-4" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Fe1f3912494dc5236cccaec39c4becafcdf46c16f-149x339.png&w=64&q=75" alt="" />
                        <h1>MongoDB</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-6" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F5663b71863d7a5db3c8ad63fad223bc0e707f571-211x238.png&w=64&q=75" alt="" />
                        <h1>Node JS</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-6" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Fc7caecfb3a81b9b3545d867c5b63dfd418b17f08-225x225.png&w=64&q=75" alt="" />
                        <h1>Express JS</h1>
                    </div>
                </ul>
                <a href="https://669005118bbb0b00a94f3254--resilient-lokum-9cfeaf.netlify.app/" className="btn absolute right-[245%] w-32 top-[70%] bg-purple-400 text-black">Live Link</a>
   </div>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className=" p-2 gap-20 flex m-20">
  <div className="flex  m-10 gap-6">
   <div>
   <img className="w-96 h-80"
      src="https://i.ibb.co/jb0MbPZ/screencapture-roaring-haupia-f52859-netlify-app-add-2024-10-13-14-31-45.png"
       />
   </div>
       
  <div>
  <img className="w-[100%] h-96 "
      src="https://i.ibb.co/Q9VPRkc/screencapture-roaring-haupia-f52859-netlify-app-my-Art-2024-10-13-14-31-17.png"
       />
  </div>
  <div>
  <img className="w-96 h-80"
      src="https://i.ibb.co/mqVDh9X/screencapture-roaring-haupia-f52859-netlify-app-2024-10-13-14-29-01.png"
       />
  </div>
   </div>
   <div className="w-1/2 relative">
    <h1 className="text-2xl">Art WEb</h1>
    <ul className="text-white">
                    <div className="flex mt-6 items-center gap-2 "><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F6f55cc4f365b91752f117d8814994a61425376ff-210x240.png&w=64&q=75" alt="" /> <h1>HTML</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F00ccabe5b90c135fbd1a280c07e9cb534b86ed74-225x225.png&w=64&q=75" alt="" /> <h1>CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F609d72da05e786a3ee20e38766ea9c54171a364d-225x225.png&w=64&q=75" alt="" /> <h1>React JS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F10fc8d978042cb802b084da2538096e1759744a4-226x223.png&w=64&q=75" alt="" /> <h1>Tailwind CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Faa5038ab73c516f1700d70889a28aa9b262f7a3d-192x192.png&w=64&q=75" alt="" /> <h1>Tailwind CSS</h1></div>
                    <div className="flex mt-6 items-center gap-2"><img className=" w-8" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Ff5816f75a1730e0a7afbe3c4307347ea009fd85f-252x200.png&w=64&q=75" alt="" /> <h1>BootsStrap</h1></div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-4" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F7294793c7c7da22d0c161d884314f00a79ee1564-192x263.png&w=64&q=75" alt="" />
                        <h1>Firebase</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-4" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Fe1f3912494dc5236cccaec39c4becafcdf46c16f-149x339.png&w=64&q=75" alt="" />
                        <h1>MongoDB</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-6" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2F5663b71863d7a5db3c8ad63fad223bc0e707f571-211x238.png&w=64&q=75" alt="" />
                        <h1>Node JS</h1>
                    </div>
                    <div className="flex mt-6 items-center gap-4">
                        <img className="w-6" src="https://www.niloy.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl6e64rln%2Fproduction%2Fc7caecfb3a81b9b3545d867c5b63dfd418b17f08-225x225.png&w=64&q=75" alt="" />
                        <h1>Express JS</h1>
                    </div>
                </ul>
                <a href="https://roaring-haupia-f52859.netlify.app/" className="btn absolute right-[240%] w-32 top-[70%] bg-purple-400 text-black">Live Link</a>
   </div>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
)
}

export default Projects