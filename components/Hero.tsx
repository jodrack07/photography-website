type HeroProps = { heading: string, message: string }

export default function Hero({ heading, message } : HeroProps) {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-center bg-cover bg-fixed custom-image">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/90 z-[2]"/>
      <div className="z-[3] px-4 sm:px-0 text-white">
        <h2 className="text-2xl sm:text-5xl text-bold">{heading}</h2>
        <p className="py-5 text-1xl sm:text-2xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
}
