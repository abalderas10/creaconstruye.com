import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-64 bg-gray-900", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-gray-100">
            Herramientas
          </h2>
          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Análisis y Viabilidad
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Planificación
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Tramitología
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Desarrollo
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Marketing
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Post-Venta
            </button>
          </div>
        </div>
        <Separator className="my-2 bg-gray-700" />
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-gray-100">
            Documentos
          </h2>
          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Proformas
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Plantillas
            </button>
            <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-md">
              Guías
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}