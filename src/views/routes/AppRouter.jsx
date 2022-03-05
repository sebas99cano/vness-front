import React, { Suspense } from "react";
import { AllRoutes } from "./Routes";

const AppRouter = () => {
  return (
    <Suspense fallback={<></>}>
      <AllRoutes />
    </Suspense>
  );
};

export default AppRouter;
