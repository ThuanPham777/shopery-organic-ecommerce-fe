import Navbar from './Navbar';
import SearchBar from './SearchBar';
import TopBar from './TopBar';

export default function Header() {
  return (
    <header>
      <TopBar />
      <SearchBar />
      <Navbar />
    </header>
  );
}
