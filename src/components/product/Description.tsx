type DescriptionProps = {
  description: string;
};

function Description({ description }: DescriptionProps) {
  return (
    <section className='' id='orders'>
      <h1 className='mt-8 mb-3 text-lg font-semibold'>About</h1>
      <div
        className='text-gray-500'
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </section>
  );
}

export default Description;
