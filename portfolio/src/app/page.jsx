import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-secondary text-white min-h-screen flex items-center justify-center w-full">
      <div className="w-fit  overflow-hidden flex  items-center space-x-4">
        <div className="rounded-full">
          <Image
            src="/profile.jpg"
            width={250}
            height={250}
            alt="Picture of the author"
            className="filter grayscale rounded-full aspect-square object-cover object-top"
          />
        </div>
        <div className="flex flex-col space-y-5 ">
          <h1 className="font-bold text-5xl uppercase">Idriss Kone</h1>
          <p className="max-w-md">
            I am a Web Developer by day, human by night... idk sounded cool in
            my head
          </p>
          <div className="flex space-x-2">
            <Image
              src="/github.png"
              width={20}
              height={20}
              alt="Picture of the author"
              className="invert"
            />
            <Image
              src="/twitter.png"
              width={20}
              height={20}
              alt="Picture of the author"
              className="invert"
            />
            <Image
              src="/linkedin.png"
              width={20}
              height={20}
              alt="Picture of the author"
              className="invert"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
