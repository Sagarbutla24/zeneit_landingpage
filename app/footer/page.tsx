import Image from "next/image";

const Footer = () => {
  return ( 
  <div className="
  border-t-[1px]
  hidden
  md:block
  
  ">
     <div className="flex justify-evenly gap-4 p-4">
      <div>
          <div className="flex flex-col p-4 cursor-pointer text-xl">
           All rights reserved. @Zeneith2024

          </div>
          <div className="justify-evenly flex">
            <a href="https://twitter.com/Zeneith2024" target="_blank" rel="noreferrer" className="cursor-pointer">
              <Image src="/images/logo/twitter.svg" alt="twitter" className="h-6"  width={200} height={200}/>
            </a>
            <a href="https://t.me/Zeneith2024" target="_blank" rel="noreferrer" className="cursor-pointer">
              <Image src="/images/logo/telegram.svg" alt="telegram" className="h-6" width={200} height={200} />
            </a>
            <a href="https://www.facebook.com/Zeneith.2024" target="_blank" rel="noreferrer" className="cursor-pointer">
              <Image src="/images/logo/facebook.svg" alt="facebook" className="h-6"   width={200} height={200}/>
            </a>
          </div>

      </div>

     </div>
  </div>  );
}

export default Footer;