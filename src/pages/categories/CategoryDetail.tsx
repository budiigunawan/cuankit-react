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

const categoryData: Category = {
  id: 1,
  name: 'Mobile UI Kit',
  thumbnails:
    'https://zullkit-backend.belajarkoding.com/storage/gallery/PnS8Vh8Fk3fW4ym0Z8ZtkhOOKtkM5xZLU2gsyJLu.jpg',
  deleted_at: null,
  created_at: '2023-06-19T04:35:50.000000Z',
  updated_at: '2023-06-19T04:35:50.000000Z',
  products: [
    {
      id: 1,
      name: 'Mobile UI Kit',
      subtitle: 'Build your next coin startup',
      description:
        'Sportly App UI Kit will help your Sport, Fitness, and Workout App products or services. Came with modern and sporty style, you can easily edit and customize all elements with components that can speed up your design process.\r\n\r\nSuitable for :\r\n- Sport App\r\n- Fitness & GYM App\r\n- Workout App\r\n- Trainer & Tracker App\r\n- And many more',
      thumbnails:
        'https://zullkit-backend.belajarkoding.com/storage/gallery/LyxZM7ddQqQkP26Z25hwNfvYYAPfmqQymA4WmoC2.png',
      is_figma: 1,
      is_sketch: 1,
      features:
        'Great Features, Customizable layers, Documentation, Icon set design, Pre-built UI screens',
      users_id: 1,
      categories_id: 1,
      file: 'https://buildwithangga.com/',
      deleted_at: null,
      created_at: '2023-06-19T04:38:19.000000Z',
      updated_at: '2023-06-19T04:38:36.000000Z',
    },
    {
      id: 3,
      name: 'Banking Crypto',
      subtitle: 'Build your next coin startup',
      description:
        'Sportly App UI Kit will help your Sport, Fitness, and Workout App products or services. Came with modern and sporty style, you can easily edit and customize all elements with components that can speed up your design process.\r\n\r\nSuitable for :\r\n- Sport App\r\n- Fitness & GYM App\r\n- Workout App\r\n- Trainer & Tracker App\r\n- And many more',
      thumbnails:
        'https://zullkit-backend.belajarkoding.com/storage/gallery/69aQu0xhltGky6lNnN0PW2W3C34g4gWWBfvpDK7F.jpg',
      is_figma: 1,
      is_sketch: 1,
      features:
        'Great Features, Customizable layers, Documentation, Icon set design, Pre-built UI screens',
      users_id: 1,
      categories_id: 1,
      file: 'https://buildwithangga.com/',
      deleted_at: null,
      created_at: '2023-06-19T04:39:55.000000Z',
      updated_at: '2023-06-19T04:39:55.000000Z',
    },
  ],
};

function CategoryDetail() {
  return (
    <PageLayout>
      <div className='container px-4 mx-auto my-16 md:px-12'>
        <h2 className='mb-4 text-xl font-medium md:mb-0 md:text-lg'>
          {categoryData.name}
        </h2>
        {categoryData?.products.length ? (
          <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            {categoryData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <h3 className='mb-4 font-medium md:mb-0'>No items found</h3>
        )}
      </div>
    </PageLayout>
  );
}

export default CategoryDetail;
