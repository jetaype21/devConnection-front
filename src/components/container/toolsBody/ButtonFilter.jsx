import { useSearchParams } from "react-router-dom";
import styles from "./buttonFilter.module.css";

const ButtonFilter = ({ category_name, category_slug, category_active }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // const searchParamsLocation = new URLSearchParams(location.search);
  // const category = searchParamsLocation.get("category");

  const changeParam = () => {
    if (category_active == category_slug) {
      searchParams.delete("category");
      return setSearchParams(searchParams);
    } else {
      searchParams.set("category", category_slug);
      return setSearchParams(searchParams);
    }
  };

  return (
    <button
      onClick={changeParam}
      type="button"
      className={`${
        category_active == category_slug ? styles.active : styles.noActive
      } ${styles.btn}`}
    >
      {category_name}
    </button>
  );
};
export default ButtonFilter;
