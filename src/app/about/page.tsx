import Image from 'next/image';

export default function AboutPage(){
    return(
        <main className="w-full h-screen grid place-content-center place-items-center">
            <Image
              src="/canchas.svg"
              alt="Canchas Online Logo"
              className=""
              width={625}
              height={24}
              priority
            />
            <h3 className="text-2xl">Proximamente - with NextJS</h3>
        </main>
    )
}