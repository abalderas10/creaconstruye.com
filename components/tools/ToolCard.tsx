import Link from 'next/link';
import { Tool } from '@/lib/tools-data';

export function ToolCard({ title, description, icon, href, features }: Tool) {
  return (
    <Link href={href} className="block h-full">
      <div className="h-full p-6 transition-colors hover:bg-gray-800/30">
        <div className="text-3xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold text-gray-100 mb-3">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}