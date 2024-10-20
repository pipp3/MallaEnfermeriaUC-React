import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoSection from "./components/Info";
import Malla from "./components/Malla";
import Button from "./components/Button";
import Stats from "./components/Stats";
import Legend from "./components/Legend";
function App() {
  return (
    <div className="mx-auto">
      <Header />

      <main className="space y-8 p-4">
        <div>
          <div className="flex items-center">
            <div className="flex-grow h-px bg-gradient-to-r from-rose-200 via-gray-400 to-rose-500"></div>
          </div>
        </div>
        <div className="mt-2 flex overflow-x-auto">
          <Button />
          <Stats />
          <Legend />
        </div>
        <Malla />
      </main>
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
