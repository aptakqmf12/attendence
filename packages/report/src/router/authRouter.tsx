import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/user';
import Header from '../pages/home/component/header';

interface AuthRouterProps {
  children: React.ReactElement;
}

export default function AuthRouter({ children }: AuthRouterProps) {
  const { isLogin } = useUserStore();

  if (!isLogin) return <Navigate to="/login" replace />;

  return (
    <>
      <Header />

      {children}
    </>
  );
}
