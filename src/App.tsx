import { Provider } from "react-redux";
import { store } from "./redux/store";
import { map } from "lodash";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            {map(routes, (route, index) => (
              <Route
                path={route.path}
                key={"route-key-" + index}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
};
