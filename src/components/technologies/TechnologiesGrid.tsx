import Popover from './Popover';
import {
  siJavascript,
  siTypescript,
  siReact,
  siTailwindcss,
  siPostgresql,
  siGo,
  siAmazon,
  siAstro,
  siNextdotjs,
  siGraphql,
  siRedis,
  siThreedotjs
} from 'simple-icons/icons';

interface Technology {
  name: string;
  icon: { path: string; hex: string };
  category: 'frontend' | 'backend' | 'tools';
  business: string;
}

const technologies: Technology[] = [
  {
    name: 'JavaScript',
    icon: siJavascript,
    category: 'frontend',
    business: 'The core language of the web, enabling interactive, dynamic user experiences that drive engagement and conversions.'
  },
  {
    name: 'TypeScript',
    icon: siTypescript,
    category: 'frontend',
    business: 'Adds type safety to JavaScript, reducing bugs and improving maintainability for complex business applications.'
  },
  {
    name: 'React',
    icon: siReact,
    category: 'frontend',
    business: 'A leading UI library for building fast, responsive interfaces, ensuring a seamless customer journey.'
  },
  {
    name: 'Next.js',
    icon: siNextdotjs,
    category: 'frontend',
    business: 'A React framework for server-side rendering and static sites, boosting SEO and performance for marketing and content-driven businesses.'
  },
  {
    name: 'Three.js',
    icon: siThreedotjs,
    category: 'frontend',
    business: 'Powers advanced 3D graphics in browsers, ideal for immersive product demos, configurators, and interactive storytelling.'
  },
  {
    name: 'GraphQL',
    icon: siGraphql,
    category: 'frontend',
    business: 'Modern API technology, allowing flexible, efficient data fetching—perfect for scalable, personalized digital products.'
  },
  {
    name: 'Tailwind CSS',
    icon: siTailwindcss,
    category: 'frontend',
    business: 'Utility-first CSS framework for rapid, consistent UI development, keeping your brand’s look polished and adaptable.'
  },
  {
    name: 'Astro',
    icon: siAstro,
    category: 'frontend',
    business: 'Modern static site builder focused on speed and simplicity, delivering blazing-fast landing pages and blogs.'
  },
  {
    name: 'Go',
    icon: siGo,
    category: 'backend',
    business: 'High-performance backend language, ideal for scalable, reliable business services and APIs.'
  },
  {
    name: 'PostgreSQL',
    icon: siPostgresql,
    category: 'backend',
    business: 'Advanced open-source database, ensuring your business data is secure, reliable, and scalable.'
  },
  {
    name: 'Redis',
    icon: siRedis,
    category: 'backend',
    business: 'In-memory data store for caching and real-time analytics, powering fast, responsive user experiences.'
  },
  {
    name: 'AWS',
    icon: siAmazon,
    category: 'tools',
    business: 'Industry-leading cloud provider, offering scalable infrastructure, security, and global reach for your business.'
  }
];

const categories = ['frontend', 'backend', 'tools'] as const;
const categoryTitles = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  tools: 'Tools & Development'
};

export default function TechnologiesComponent() {
  return (
    <section className="my-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-200 mb-12 text-center">My tech stack</h2>
      
      <div className="space-y-12">
        {categories.map(category => {
          const categoryTechs = technologies.filter(tech => tech.category === category);
          return categoryTechs.length > 0 && (
            <div key={category} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl shadow-slate-900/10">
              <div className="flex items-center space-x-3 mb-6">
                <h3 className="text-xl font-semibold text-slate-200">{categoryTitles[category]}</h3>
                <div className="h-px flex-grow bg-slate-700/50"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {categoryTechs.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div key={tech.name} className="flex flex-col items-center transform transition-all duration-200 hover:scale-105 group">
  <Popover text={tech.business}>
    <div className="w-14 h-14 flex items-center justify-center bg-slate-700/50 rounded-lg p-2.5 transition-all duration-200 hover:bg-slate-600/50 hover:shadow-lg hover:shadow-slate-900/20">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-9 h-9 text-slate-200 transition-colors duration-200 group-hover:text-[#${Icon.hex}]`}
        fill="currentColor"
      >
        <path d={Icon.path} />
      </svg>
    </div>
  </Popover>
  <span className="mt-3 text-sm text-slate-300 text-center group-hover:text-slate-200">{tech.name}</span>
</div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
