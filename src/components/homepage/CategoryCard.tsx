import React from 'react';
import { Link } from 'react-router-dom';

export interface Category {
  id: number;
  name: string;
  thumbnails: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  products_count: number;
}

type CategoryCardProps = {
  category: Category;
};

function CategoryCard({ category }: CategoryCardProps) {
  const { id, name, thumbnails, products_count } = category;
  return (
    <div className='w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
      <div className='overflow-hidden border border-gray-200 rounded-xl'>
        <Link to={`/categories/${id}`}>
          <div className='m-4 overflow-hidden rounded-xl'>
            <img alt={name} className='block w-full h-auto' src={thumbnails} />
          </div>
        </Link>
        <header className='px-4 mb-4 leading-tight'>
          <h1 className='text-lg'>
            <Link
              to={`/categories/${id}`}
              className='font-semibold text-black no-underline hover:underline'
            >
              {name}
            </Link>
          </h1>
          <span className='block text-sm font-light text-gray-500 no-underline'>
            {`${products_count} items`}
          </span>
        </header>
      </div>
    </div>
  );
}

export default CategoryCard;
