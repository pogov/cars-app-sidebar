import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ListIcon from "@material-ui/icons/List";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div className={styles.sidebarRoot}>
      <div className={styles.list}>
        <div
          onClick={() => history.push("/form")}
          className={
            pathname === "/form" ? styles.listItem_active : styles.listItem
          }
        >
          <AddCircleOutlineOutlinedIcon />
          <div className={styles.buttonText}>FORM</div>
        </div>
        <div
          onClick={() => history.push("/feed")}
          className={
            pathname === "/feed" ? styles.listItem_active : styles.listItem
          }
        >
          <ListIcon />
          <div className={styles.buttonText}>FEED</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
