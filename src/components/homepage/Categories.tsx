import CategoryCard from './CategoryCard';

export interface Category {
  id: number;
  name: string;
  thumbnails: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  products_count: number;
}

const categoryList: Category[] = [
  {
    id: 1,
    name: 'Mobile UI Kit',
    thumbnails:
      'https://zullkit-backend.belajarkoding.com/storage/gallery/PnS8Vh8Fk3fW4ym0Z8ZtkhOOKtkM5xZLU2gsyJLu.jpg',
    deleted_at: null,
    created_at: '2023-06-19T04:35:50.000000Z',
    updated_at: '2023-06-19T04:35:50.000000Z',
    products_count: 2,
  },
  {
    id: 2,
    name: 'Fonts',
    thumbnails:
      'https://zullkit-backend.belajarkoding.com/storage/gallery/PtJuhxdEth9hCkhTXjLsQD1kJr7A4OYsC8pF29Gm.jpg',
    deleted_at: null,
    created_at: '2023-06-19T04:36:04.000000Z',
    updated_at: '2023-06-19T04:36:04.000000Z',
    products_count: 0,
  },
  {
    id: 3,
    name: 'Icon Set',
    thumbnails:
      'https://zullkit-backend.belajarkoding.com/storage/gallery/kvHAhPRH6KbhSHNKFProOb4kW4lHA57ohOQk23YX.jpg',
    deleted_at: null,
    created_at: '2023-06-19T04:36:13.000000Z',
    updated_at: '2023-06-19T04:36:13.000000Z',
    products_count: 0,
  },
  {
    id: 4,
    name: 'Website UI Kit',
    thumbnails:
      'https://zullkit-backend.belajarkoding.com/storage/gallery/oDol6t3DRlZK2VtzcGkVjYCd6uzxQeC1cMDKOT3U.jpg',
    deleted_at: null,
    created_at: '2023-06-19T04:36:22.000000Z',
    updated_at: '2023-06-19T04:36:22.000000Z',
    products_count: 1,
  },
];

function Categories() {
  return (
    <div className='container px-4 mx-auto my-16 md:px-12'>
      <h2 className='mb-4 text-xl font-medium md:mb-0 md:text-lg'>
        Top Categories
      </h2>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {categoryList.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
