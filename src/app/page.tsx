import Link from "next/link";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Drawer from "./components/Drawer";
import LandingPage from './components/LandingPage';

export default function Home() {
  return (
    <>
    <main>
      {/* <ThemeSwitcher /> */}
      <LandingPage />
    </main>
    </>
  );
}
