import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

   
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-md
        border
        border-(--border)
        bg-(--surface)
        transition-colors
        hover:bg-(--surface-secondary)
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}