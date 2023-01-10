import css from './App.module.css';
import FunctionalSidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple/>
    </div>
  );
}

export default App;