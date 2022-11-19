import React from 'react';

function App() {
  return (
    <main className="flex flex-col w-screen h-screen justify-between max-h-screen max-w-screen overflow-hidden">
      <div className="text-4xl w-screen h-full flex-col justify-center text-center space-y-6">
        <div className="py-4" />
        <h1 className="underline italic bold">Electron Boiler Plate:</h1>
        <ul>
          <li className="text-blue-500">React</li>
          <li>+</li>
          <li className="text-purple-400">Vite</li>
          <li>+</li>
          <li className="text-blue-300">Tailwind</li>
        </ul>
      </div>

      <footer className="p-8">
        <p className="text-sm opacity-50">Ivan Duran</p>
      </footer>
    </main>
  );
}

export default App;
