import PageLayout from '../../components/layout/PageLayout';
import BrandList from '../../components/login/BrandList';
import LoginForm from '../../components/login/LoginForm';

function Login() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden bg-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0'>
            <LoginForm />
            <BrandList />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Login;
