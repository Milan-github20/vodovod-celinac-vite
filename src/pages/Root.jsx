import { Outlet } from "react-router-dom";
import Header from "../UI/Header/Header";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <Header
        ContentComponent={
          <div className={styles.container}>
            <Outlet />
          </div>
        }
      />
    </div>
  );
};

export default Root;
