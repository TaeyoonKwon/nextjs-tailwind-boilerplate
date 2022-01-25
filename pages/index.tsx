import type { ReactElement } from "react";
import { DefaultLayout } from "../layouts/default.layout";

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center font-bold text-white">
      HomePage
    </div>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default HomePage;
