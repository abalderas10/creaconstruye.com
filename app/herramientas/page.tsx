import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { toolsData } from '@/lib/tools-data';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export default function HerramientasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { title: 'Inicio', href: '/' },
            { title: 'Herramientas', href: '/herramientas' },
          ]}
        />
        
        <h1 className="text-4xl font-bold text-slate-100 mt-8 mb-4">
          Ciclo de Vida del Proyecto
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Fases y etapas detalladas del proceso constructivo
        </p>

        <div className="custom-scrollbar">
          <div className="min-w-[1200px] p-4">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute h-1 bg-slate-700 top-24 left-0 right-0 z-0"></div>

              {/* Timeline items */}
              <div className="relative z-10 grid grid-cols-6 gap-4">
                {toolsData.map((phase, index) => (
                  <div key={phase.id} className="timeline-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Phase header */}
                    <div className={`flex flex-col items-center mb-8`}>
                      <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-2xl">
                        {phase.icon}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-slate-200">{phase.title}</h3>
                      <p className="text-sm text-slate-400">Fase {index + 1}</p>
                    </div>

                    {/* Subphases */}
                    <div className="space-y-4">
                      {phase.subphases?.map((subphase) => (
                        <HoverCard key={subphase.title}>
                          <HoverCardTrigger>
                            <div className="p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all cursor-pointer metallic-glow">
                              <div className="flex items-center gap-2 mb-2">
                                <span>{subphase.icon}</span>
                                <h4 className="font-medium text-slate-200">{subphase.title}</h4>
                              </div>
                              <div className="text-sm text-slate-400 whitespace-pre-line">
                                {subphase.description}
                              </div>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80 bg-slate-900/90 backdrop-blur-sm border-slate-700 text-slate-200">
                            <div className="space-y-4">
                              <h5 className="font-semibold">Equipo Scrum</h5>
                              {subphase.scrumCrew?.map((member) => (
                                <div key={member.role} className="space-y-2">
                                  <p className="text-sm font-medium text-blue-400">{member.role}</p>
                                  <ul className="text-sm space-y-1">
                                    {member.responsibilities.map((resp, idx) => (
                                      <li key={idx} className="text-slate-300">• {resp}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}