export default function Legend() {
  return (
    <div className="flex flex-wrap justify-center items-center ml-2 gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
      <div className="flex items-center group">
        <div className="relative">
          <div className="rounded-full bg-blue-600 h-4 w-4 group-hover:scale-110 transition-transform duration-200"></div>
          <div className="absolute -inset-1 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
        <p className="font-medium ml-2 text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">Min. Fase Profesional</p>
      </div>

      <div className="flex items-center group">
        <div className="relative">
          <div className="rounded-full bg-orange-500 h-4 w-4 group-hover:scale-110 transition-transform duration-200"></div>
          <div className="absolute -inset-1 rounded-full bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
        <p className="font-medium ml-2 text-sm text-gray-700 group-hover:text-orange-500 transition-colors duration-200">Formacion Basica</p>
      </div>

      <div className="flex items-center group">
        <div className="relative">
          <div className="rounded-full bg-green-400 h-4 w-4 group-hover:scale-110 transition-transform duration-200"></div>
          <div className="absolute -inset-1 rounded-full bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
        <p className="font-medium ml-2 text-sm text-gray-700 group-hover:text-green-500 transition-colors duration-200">C. Propios de Licenc.</p>
      </div>

      <div className="flex items-center group">
        <div className="relative">
          <div className="rounded-full bg-sky-300 h-4 w-4 group-hover:scale-110 transition-transform duration-200"></div>
          <div className="absolute -inset-1 rounded-full bg-sky-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
        <p className="font-medium ml-2 text-sm text-gray-700 group-hover:text-sky-500 transition-colors duration-200">Formacion General</p>
      </div>
    </div>
  );
}
