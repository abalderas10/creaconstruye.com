import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export function ToolsHeader() {
  return (
    <div className="mb-12">
      <Breadcrumbs
        items={[
          { title: 'Inicio', href: '/' },
          { title: 'Herramientas', href: '/herramientas' },
        ]}
      />
      <h1 className="text-4xl font-bold text-gray-100 mt-8 mb-4">
        Herramientas de Construcción
      </h1>
      <p className="text-xl text-gray-400">
        Suite completa de herramientas para la gestión y desarrollo de proyectos constructivos
      </p>
    </div>
  );
}