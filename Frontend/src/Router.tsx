import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}