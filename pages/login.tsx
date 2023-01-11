import * as React from 'react';
import { authApi } from '@/api/index';

export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {

  React.useEffect(() => {
    console.log('document.cookie', document.cookie)
  })

    async function handleLoginClick(){
      try{
        await authApi.login({
          username: 'test__11',
          password: '13345555',
        })
      } catch (error) {
        console.log('failed to login', error)
      }
    }

    async function handleGetProfileClick() {
      try{
        await authApi.getProfile()
      } catch (error) {
        console.log('failed to get getProfile', error)
      }
    }

    async function handleLogoutClick(){
      try{
        await authApi.logout()
      } catch (error) {
        console.log('failed to logout', error)
      }
    }

  return (
    <div>
        <h1> Login Page </h1>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleGetProfileClick}>Get Profile</button>
        <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
