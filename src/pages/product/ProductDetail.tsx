import { useParams } from 'react-router-dom';
import { useGetDetailProduct } from '../../hooks/api/product';
import PageLayout from '../../components/layout/PageLayout';
import ProductDetailAside from '../../components/product/ProductDetailAside';
import ProductDetailMain from '../../components/product/ProductDetailMain';

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

function ProductDetail() {
  const routeParams = useParams();
  const { data: product, isLoading } = useGetDetailProduct({
    id: routeParams.id,
  });

  return (
    <PageLayout>
      <div className='container p-2 mx-auto my-10 max-w-7xl'>
        <div className='flex flex-row flex-wrap py-4'>
          {isLoading ? (
            <div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
              loading...
            </div>
          ) : (
            <>
              <ProductDetailMain
                name={product?.data.name}
                subtitle={product?.data.subtitle}
                galleries={product?.data.galleries}
                thumbnails={product?.data.thumbnails}
                description={product?.data.description}
              />
              <ProductDetailAside
                features={product?.data.features}
                isFigma={product?.data.is_figma}
                isSketch={product?.data.is_sketch}
                file={product?.data.file}
              />
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductDetail;
