import { navigation } from "./config";
import { NavigationItem } from "./NavigationItem";

export function Navigation() {
  return (
    <nav className="flex flex-col gap-1">
      {navigation.map((item) => (
        <NavigationItem
          key={item.href}
          item={item}
        />
      ))}
    </nav>
  );
}