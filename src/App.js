import { customAlphabet } from 'nanoid';
import { lowercase } from 'nanoid-dictionary';

const lowercaseRandomString = customAlphabet(lowercase, 10);


function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="text-7xl font-bold text-black tracking-tighter">
          Modern Password Generator
        </h1>

        <input type="text" className="border-2 border-black shadow-custom-input focus:outline-none py-1 px-2" placeholder="Mot de passe" />

        <button className="bg-black text-white py-1 px-4 block">Generate</button>
        <button className="bg-black text-white py-1 px-4 block">Copy</button>
      </div>
    </div>
  );
}

export default App;
