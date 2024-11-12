interface AgentResponseProps {
  response: string;
}

export function AgentResponse({ response }: AgentResponseProps) {
  if (!response) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-900/10 p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">🤖</div>
          <h2 className="text-2xl font-semibold text-slate-200">
            Asistente de Proyecto
          </h2>
          <p className="text-slate-400 max-w-md">
            Estoy aquí para ayudarte con la gestión, planificación y desarrollo de tu proyecto constructivo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-slate-900/10 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-200 whitespace-pre-wrap">{response}</div>
          </div>
        </div>
      </div>
    </div>
  );
}