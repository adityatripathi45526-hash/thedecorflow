"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props{
    loading:boolean;
}

export default function LoadingScreen({loading}:Props){

return(

<AnimatePresence>

{loading && (

<motion.div

initial={{opacity:1}}

exit={{
opacity:0,
transition:{
duration:.8
}
}}

className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FAF7F2]"
>

<div className="text-center">

<motion.h1

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="heading-font text-6xl md:text-8xl text-[#1B1B1B]"
>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="flex justify-center mb-8"
>
  <Image
    src="/images/logo(1).jpg"
    alt="DecorFlow Logo"
    width={150}
    height={150}
    priority
    className="object-contain"
  />
</motion.div>

The Decor<span className="text-[#C9A227]">Flow</span>

</motion.h1>

<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.8,
duration:.8
}}

className="mt-5 tracking-[0.25em] uppercase text-sm text-[#A67C52]"
>

Crafting Timeless Celebrations

</motion.p>

<motion.div

initial={{
width:0
}}

animate={{
width:260
}}

transition={{
delay:1.3,
duration:1.8,
ease:"easeInOut"
}}

className="h-[2px] bg-[#C9A227] rounded-full mx-auto mt-10"
/>

</div>

</motion.div>

)}

</AnimatePresence>

);

}