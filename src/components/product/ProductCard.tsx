import { Link } from 'react-router-dom';

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

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { id, name, thumbnails, subtitle } = product;
  return (
    <div className='w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <div className='overflow-hidden border border-gray-200 rounded-xl'>
        <Link to={`/product/${id}`}>
          <div className='m-4 overflow-hidden rounded-xl'>
            <img alt={name} className='block w-full h-auto' src={thumbnails} />
          </div>
        </Link>
        <header className='px-4 mb-4 leading-tight'>
          <Link
            to={`/product/${id}`}
            className='font-semibold text-black no-underline hover:underline'
          >
            {name}
          </Link>
          <span className='block text-sm font-light text-gray-500 no-underline'>
            {subtitle}
          </span>
        </header>
      </div>
    </div>
  );
}

export default ProductCard;
