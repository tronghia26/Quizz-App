import { useRoutes } from "react-router-dom";
import { routes } from "../../user/routes";
// import { routes } from "../../routes";

function AllRoute() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default AllRoute;
