import Image from "next/image";

export default function Home() {
  return (
    <div className="w-dvw h-dvh bg-background text-white p-6 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4">Digital Safety Toolkit</h1>
      <p className="text-xl"> Your digital safety toolkit for staying safe online. Built for young people & older users.</p>
      </header>
    
   {/* Dashboard Flexbox */}
   <div className="flex flex-col items-center gap-6">
        {/* Row 1: 3 Cards */}
        <div className="flex justify-center gap-6">
          <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-600">This is the content of card 1.</p>
          </div>
          <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-2">Card 2</h2>
            <p className="text-gray-600">This is the content of card 2.</p>
          </div>
          <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-2">Card 3</h2>
            <p className="text-gray-600">This is the content of card 3.</p>
          </div>
        </div>

        {/* Row 2: 2 Cards */}
        <div className="flex justify-center gap-6">
          <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-2">Card 4</h2>
            <p className="text-gray-600">This is the content of card 4.</p>
          </div>
          <div className="bg-card text-black shadow-md rounded-lg w-80 h-80 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-2">Card 5</h2>
            <p className="text-gray-600">This is the content of card 5.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
