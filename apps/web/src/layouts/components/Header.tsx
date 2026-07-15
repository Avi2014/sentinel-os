import { HeaderActions } from "@components/navigation";

export function Header() {
  return (
    <header
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        border-(--border)
        bg-(--surface)
        px-6
      "
    >
      <div>
        <h1 className="text-base font-semibold">SentinelOS</h1>
      </div>

      <HeaderActions />
    </header>
  );
}
