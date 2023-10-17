import PageLayout from '../../components/layout/PageLayout';
import Benefits from '../../components/register/Benefits';
import RegisterHeader from '../../components/register/RegisterHeader';

function Register() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden bg-white'>
        <div className='mx-auto'>
          <div className='flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0'>
            <RegisterHeader />
            <div className='w-full p-5 mx-auto md:max-w-4xl'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <Benefits />
                <div>Form</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Register;
