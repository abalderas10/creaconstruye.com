import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { title: 'Inicio', href: '/' },
            { title: 'Blog', href: '/blog' },
          ]}
        />
        
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-100 mb-6">Blog</h1>
          <p className="text-xl text-gray-400 mb-12">
            Todo lo relativo a la creatividad y a la Construcción
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="bg-transparent rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-blue-400 text-sm mb-2">{post.category}</div>
                    <h2 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const blogPosts = [
  {
    id: 1,
    title: 'Tendencias en Construcción Sostenible 2024',
    excerpt: 'Descubre las últimas innovaciones en construcción sostenible y cómo están transformando la industria.',
    category: 'Sostenibilidad',
    date: 'Mar 15, 2024',
    readTime: 5
  },
  {
    id: 2,
    title: 'Gestión Eficiente de Proyectos Constructivos',
    excerpt: 'Metodologías y herramientas para optimizar la gestión de proyectos en construcción.',
    category: 'Gestión',
    date: 'Mar 12, 2024',
    readTime: 7
  },
  {
    id: 3,
    title: 'Innovación en Materiales de Construcción',
    excerpt: 'Análisis de nuevos materiales y sus aplicaciones en la construcción moderna.',
    category: 'Innovación',
    date: 'Mar 10, 2024',
    readTime: 6
  },
  {
    id: 4,
    title: 'Diseño Arquitectónico y Tecnología BIM',
    excerpt: 'Cómo la tecnología BIM está revolucionando el diseño arquitectónico.',
    category: 'Tecnología',
    date: 'Mar 8, 2024',
    readTime: 8
  },
  {
    id: 5,
    title: 'Seguridad en Obras de Construcción',
    excerpt: 'Mejores prácticas y normativas para garantizar la seguridad en obra.',
    category: 'Seguridad',
    date: 'Mar 5, 2024',
    readTime: 4
  },
  {
    id: 6,
    title: 'Financiamiento de Proyectos Inmobiliarios',
    excerpt: 'Estrategias y opciones para el financiamiento de proyectos constructivos.',
    category: 'Finanzas',
    date: 'Mar 3, 2024',
    readTime: 6
  }
];