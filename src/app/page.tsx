import Image from "next/image";

export default function Home() {
  return (
    <div className="w-dvw h-dvh bg-background text-white">
      {/* Navbar */}
      <nav className="w-full bg-background px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={400} height={400} />
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-dvw bg-background text-white flex flex-col items-center justify-center">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Digital Safety Toolkit</h1>
          <p className="text-xl">
            Your digital safety toolkit for staying safe online. Built for
            young people & older users.
          </p>
        </header>

        {/* Dashboard Flexbox */}
        <div className="flex flex-col items-center gap-6">
          {/* Row 1: 3 Cards */}
          <div className="flex justify-center gap-4">
            {/* Card 1 */}
            <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-start items-center p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center w-full h-40">
                <Image
                  src="/assets/dino.png"
                  alt="Card 1 Image"
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold text-transform: uppercase mb-2">
                Safety 101
              </h2>
              <p className="text-gray-600 text-center">
                Interactive lessons on cybersafety basics
              </p>
              <a
                href="/safety101"
                className="mt-4 bg-card-button1 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition text-center w-full"
              >
                Learn More
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-start items-center p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center w-full h-40">
                <Image
                  src="/assets/girl.png"
                  alt="Card 2 Image"
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold text-transform: uppercase mb-2">
                Threat detector
              </h2>
              <p className="text-gray-600 text-center">
                Check for suspicious content and scams
              </p>
              <a
                href="/safety101"
                className="mt-4 bg-card-button1 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition text-center w-full"
              >
                Learn More
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-start items-center p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center w-full h-40">
                <Image
                  src="/assets/boy.png"
                  alt="Card 3 Image"
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold text-transform: uppercase mb-2">
                Privacy Checker
              </h2>
              <p className="text-gray-600 text-center">
                Review privacy settings on social media
              </p>
              <a
                href="#"
                className="mt-4 bg-card-button3 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition text-center w-full"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Row 2: 2 Cards */}
          <div className="flex justify-center gap-4">
            {/* Card 4 */}
            <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-start items-center p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center w-full h-40">
                <Image
                  src="/assets/laptop.png"
                  alt="Card 4 Image"
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold text-transform: uppercase mb-2">
                Scam Simulator
              </h2>
              <p className="text-gray-600 text-center">
                This is the content of card 4.
              </p>
              <a
                href="#"
                className="mt-4 bg-card-button4 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition text-center w-full"
              >
                Learn More
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-start items-center p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center w-full h-40">
                <Image
                  src="/assets/astro.png"
                  alt="Card 5 Image"
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold text-transform: uppercase mb-2">
                News & Safety Alerts
              </h2>
              <p className="text-gray-600 text-center">
                This is the content of card 5.
              </p>
              <a
                href="#"
                className="mt-4 bg-card-button5 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition text-center w-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
