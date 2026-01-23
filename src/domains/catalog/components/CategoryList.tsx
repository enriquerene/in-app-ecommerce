import React from 'react';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="flex overflow-x-auto py-4 px-4 space-x-4 no-scrollbar">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col items-center flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 overflow-hidden">
            <div className="w-full h-full rounded-full border-2 border-white dark:border-black overflow-hidden">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-[10px] mt-1 text-zinc-600 dark:text-zinc-400 font-medium">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};
