export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-transparent bg-transparent pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border-transparent lg:bg-transparent lg:p-4">
          Creatividad y Construcción&nbsp;
          <a href="https://constructiva.cc" className="font-mono font-bold text-blue-400 hover:text-blue-300">Constructiva.cc</a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            Powered by{' '}
            <a href="https://c0.creaconstruye.com" className="font-bold text-blue-400 hover:text-blue-300">Conciencia0</a>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="text-6xl font-bold text-gray-100 mb-4">creaconstruye.com</div>
        <div className="text-xl text-gray-400">Plataforma integral de construcción y creatividad</div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/docs"
          className="group rounded-lg px-5 py-4 transition-colors hover:text-blue-300"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-100 group-hover:text-blue-300`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Encuentra información detallada de la plataforma y herramientas.
          </p>
        </a>

        <a
          href="/pm-bob"
          className="group rounded-lg px-5 py-4 transition-colors hover:text-blue-300"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-100 group-hover:text-blue-300`}>
            PM_Bob{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Agente de Inteligencia Artificial para el Desarrollo, creatividad y Construcción
          </p>
        </a>

        <a
          href="/herramientas"
          className="group rounded-lg px-5 py-4 transition-colors hover:text-blue-300"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-100 group-hover:text-blue-300`}>
            Herramientas{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Business Development, Análisis, Proforma, Arquitectura, Construcción.
          </p>
        </a>

        <a
          href="/blog"
          className="group rounded-lg px-5 py-4 transition-colors hover:text-blue-300"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-100 group-hover:text-blue-300`}>
            Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
            Todo lo relativo a la creatividad y a la Construcción.
          </p>
        </a>
      </div>
    </main>
  );
}