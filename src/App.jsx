// App.jsx
import { Button } from './components/Button';

function App() {
  const handleClick = () => alert("¡Hola!");
  return (
    <div>
      <Button text="Saludar" onClick={handleClick} />
    </div>
  );
}