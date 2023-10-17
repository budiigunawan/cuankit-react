import { useGetAllCategories } from '../../hooks/api/category';
import CategoryCard from '../category/CategoryCard';

export interface Category {
  id: number;
  name: string;
  thumbnails: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  products_count: number;
}

function Categories() {
  const { data: categoryList, isLoading } = useGetAllCategories();
  return (
    <div className='container px-4 mx-auto my-16 md:px-12'>
      <h2 className='mb-4 text-xl font-medium md:mb-0 md:text-lg'>
        Top Categories
      </h2>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {isLoading ? (
          <div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
            loading...
          </div>
        ) : (
          categoryList.data.map((category: Category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        )}
      </div>
    </div>
  );
}

export default Categories;
