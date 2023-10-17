import { useGetAllProducts } from '../../hooks/api/product';
import ProductCard from '../product/ProductCard';

export interface Category {
  id: number;
  name: string;
  thumbnails: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Gallery {
  id: number;
  products_id: number;
  url: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

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
  category: Category;
  galleries: Gallery[];
}

function Products() {
  const { data: productList, isLoading } = useGetAllProducts();
  return (
    <div className='container px-4 mx-auto my-16 md:px-12'>
      <h2 className='mb-4 text-xl font-medium md:mb-0 md:text-lg'>New Items</h2>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {isLoading ? (
          <div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
            loading...
          </div>
        ) : (
          productList.data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
