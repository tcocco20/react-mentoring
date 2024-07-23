import { NextUIProvider } from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigation = useNavigate();
  return (
    <NextUIProvider navigate={navigation}>
      <Outlet />
    </NextUIProvider>
  );
};

export default RootLayout;
