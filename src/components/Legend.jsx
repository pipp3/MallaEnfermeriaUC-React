export default function Legend() {
  return (
    <div className="flex flex-wrap justify-center items-center ml-2 space-x-3 text-sm">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="rounded-full bg-blue-600 h-4 w-4"></div>
        <p className="font-semibold ml-1 text-sky-400">Min. Fase Profesional</p>
      </div>

      <div className="flex items-center mb-2 sm:mb-0">
        <div className="rounded-full bg-orange-500 h-4 w-4"></div>
        <p className="font-semibold ml-1 text-sky-400">Formacion Basica</p>
      </div>

      <div className="flex items-center mb-2 sm:mb-0">
        <div className="rounded-full bg-green-400 h-4 w-4"></div>
        <p className="font-semibold ml-1 text-sky-400">C. Propios de Licenc.</p>
      </div>

      <div className="flex items-center mb-2 sm:mb-0">
        <div className="rounded-full bg-sky-300 h-4 w-4"></div>
        <p className="font-semibold ml-1 text-sky-400">Formacion General</p>
      </div>
    </div>
  );
}
