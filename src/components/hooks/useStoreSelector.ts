import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const useStoreSelector = () => {
  return useSelector((state: RootState) => state);
};

export default useStoreSelector;
