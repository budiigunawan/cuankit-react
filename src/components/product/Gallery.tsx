import React from 'react';

export interface Gallery {
  id: number;
  products_id: number;
  url: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

type GalleryProps = {
  galleries: Gallery[];
  thumbnails: string;
};

function Gallery({ galleries, thumbnails }: GalleryProps) {
  const activeClass =
    'overflow-hidden cursor-pointer rounded-2xl ring-2 ring-indigo-500';
  const inactiveClass = 'overflow-hidden cursor-pointer rounded-2xl';
  const [selectedImage, setSelectedImage] = React.useState<string>(thumbnails);

  const handleSelectImage = (imageName: string) => {
    setSelectedImage(imageName);
  };

  return (
    <section id='gallery'>
      <img
        src={selectedImage}
        alt='thumbnails'
        className='w-full mt-6 rounded-2xl'
      />
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {galleries.length &&
          galleries.map((gallery, idx) => (
            <div
              key={idx}
              className='overflow-hidden cursor-pointer rounded-2xl'
              onClick={() => {
                handleSelectImage(gallery.url);
              }}
            >
              <img
                src={gallery.url}
                className={
                  selectedImage === gallery.url ? activeClass : inactiveClass
                }
                alt={`gallery-${idx}`}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Gallery;
