import type { ReactElement } from "react";

export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="bg-slate-400">
      <header className="fixed w-full p-4 bg-slate-200">
        Default Layout Header
      </header>
      <main>{children}</main>
      <footer className="fixed bottom-0 w-full p-4 bg-slate-200">
        Default Layout Footer
      </footer>
    </div>
  );
};
