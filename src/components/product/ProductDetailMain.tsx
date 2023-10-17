import Description from './Description';
import ProductGallery from './Gallery';

export interface Gallery {
  id: number;
  products_id: number;
  url: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

type ProductDetailMainProps = {
  name: string;
  subtitle: string;
  galleries: Gallery[];
  thumbnails: string;
  description: string;
};

function ProductDetailMain({
  name,
  subtitle,
  galleries,
  thumbnails,
  description,
}: ProductDetailMainProps) {
  return (
    <div role='main' className='w-full px-4 pt-1 sm:w-2/3 md:w-2/3'>
      <h1 className='mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl'>
        {name}
      </h1>
      <p className='text-gray-500'>{subtitle}</p>
      <ProductGallery galleries={galleries} thumbnails={thumbnails} />
      <Description description={description} />
    </div>
  );
}

export default ProductDetailMain;
