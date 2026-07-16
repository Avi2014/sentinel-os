import { useNavigationStore } from "@stores";

export function SidebarFooter() {
  const collapsed = useNavigationStore(
    (state) => state.collapsed
  );

  return (
    <div
      className="
        border-t
        border-[var(--border)]
        p-4
      "
    >
      {collapsed ? (
        <p
          className="
            text-center
            text-xs
            text-[var(--muted)]
          "
        >
          v0.1
        </p>
      ) : (
        <>
          <p className="text-xs font-medium">
            SentinelOS
          </p>

          <p
            className="
              text-xs
              text-[var(--muted)]
            "
          >
            Version 0.1.0
          </p>
        </>
      )}
    </div>
  );
}