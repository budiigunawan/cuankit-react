import PageLayout from '../../components/layout/PageLayout';
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

const productDetailData: Product = {
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
  category: {
    id: 1,
    name: 'Mobile UI Kit',
    thumbnails:
      'https://zullkit-backend.belajarkoding.com/storage/gallery/PnS8Vh8Fk3fW4ym0Z8ZtkhOOKtkM5xZLU2gsyJLu.jpg',
    deleted_at: null,
    created_at: '2023-06-19T04:35:50.000000Z',
    updated_at: '2023-06-19T04:35:50.000000Z',
  },
  galleries: [
    {
      id: 1,
      products_id: 1,
      url: 'https://zullkit-backend.belajarkoding.com/storage/gallery/8tePaFRtgrAFCyPFoK7U3tpL6h8jbdyV6ZBqf09C.png',
      deleted_at: null,
      created_at: '2023-06-19T04:40:13.000000Z',
      updated_at: '2023-06-19T04:40:13.000000Z',
    },
    {
      id: 2,
      products_id: 1,
      url: 'https://zullkit-backend.belajarkoding.com/storage/gallery/ItE0oTFTfxbzXR2CTHW7r8QyhPIsFWFR0qKSMcK0.png',
      deleted_at: null,
      created_at: '2023-06-19T04:40:13.000000Z',
      updated_at: '2023-06-19T04:40:13.000000Z',
    },
    {
      id: 3,
      products_id: 1,
      url: 'https://zullkit-backend.belajarkoding.com/storage/gallery/gHMGOSvs3JT8lBkWbg57AkUvf8tIHv1VP26TE9jK.png',
      deleted_at: null,
      created_at: '2023-06-19T04:40:13.000000Z',
      updated_at: '2023-06-19T04:40:13.000000Z',
    },
    {
      id: 4,
      products_id: 1,
      url: 'https://zullkit-backend.belajarkoding.com/storage/gallery/NajTwZoULrAtsb9ppL4i1zu60DhN31s7aFOQrrbm.png',
      deleted_at: null,
      created_at: '2023-06-19T04:40:13.000000Z',
      updated_at: '2023-06-19T04:40:13.000000Z',
    },
  ],
};

function ProductDetail() {
  const { name, subtitle, galleries, thumbnails, description } =
    productDetailData;
  return (
    <PageLayout>
      <div className='container p-2 mx-auto my-10 max-w-7xl'>
        <div className='flex flex-row flex-wrap py-4'>
          <ProductDetailMain
            name={name}
            subtitle={subtitle}
            galleries={galleries}
            thumbnails={thumbnails}
            description={description}
          />
          <div>aside</div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductDetail;
