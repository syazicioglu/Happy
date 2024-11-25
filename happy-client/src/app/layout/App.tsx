import { Outlet } from "react-router-dom";
import { useStore } from "../stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

function App() {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return (<div className="flex h-96 items-center justify-center">
    <div className="w-10 h-10 border-4 border-[#344f24] border-dashed rounded-full animate-spin"></div>
  </div>)

  return (
    <>
      <Outlet />
    </>
  );
}

export default observer(App);