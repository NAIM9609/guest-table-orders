import Link from "next/link";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <h1>Hello World!</h1>
      <Link href="/menu">Menu</Link>
    </main>
  );
}
