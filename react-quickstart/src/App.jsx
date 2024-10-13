import './App.css'
import LoginForm from './LoginForm';
import AdminPanel from './AdminPanel';

function App() {
  let content;
  let isLoggedIn = false;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      {content}
    </>
  )
}

export default App
