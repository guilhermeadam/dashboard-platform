import { sidebarItems } from '@/app/mocks/sidebarItems';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="min-heigth-800 min-w-60 flex flex-col items-center border-r p-4 gap-4 bg-gradient-to-r from-[#204D37] to-[#00853B] to-0%">
      {sidebarItems.map((option) => {
        const { id, path, Icon, name } = option;

        return (
          <Link
            to={path}
            key={id}
            className="flex items-center rounded-sm gap-2 h-12 w-full bg-white border-l-4 border-c-yellow shadow-lg hover:shadow hover:border-l-4
          hover:border-orange hover:bg-green transition-all hover:color-white px-2"
          >
            <Icon />
            <h1>{name}</h1>
          </Link>
        );
      })}
    </aside>
  );
}
