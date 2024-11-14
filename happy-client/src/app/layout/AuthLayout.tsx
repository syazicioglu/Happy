import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <Outlet /> {/* İçerik burada render edilecek */}
    </div>
  );
}
