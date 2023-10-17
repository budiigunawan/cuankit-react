import { useParams } from 'react-router-dom';
import { useGetDetailCategory } from '../../hooks/api/category';
import PageLayout from '../../components/layout/PageLayout';
import ProductCard from '../../components/product/ProductCard';

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  thumbnails: string;
  is_figma: number;
  is_sketch: number;
  features: string;
  users_id: number;
  categories_id: number;
  file: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  thumbnails: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  products: Product[];
}

function CategoryDetail() {
  const routeParams = useParams();
  const { data: category, isLoading } = useGetDetailCategory({
    id: routeParams.id,
  });

  return (
    <PageLayout>
      <div className='container px-4 mx-auto my-16 md:px-12'>
        {isLoading ? (
          <div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
            loading...
          </div>
        ) : (
          <>
            <h2 className='mb-4 text-xl font-medium md:mb-0 md:text-lg'>
              {category.data.name}
            </h2>
            {category.data?.products.length ? (
              <div className='flex flex-wrap -mx-1 lg:-mx-4'>
                {category.data.products.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <h3 className='mb-4 font-medium md:mb-0'>No items found</h3>
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
}

export default CategoryDetail;
