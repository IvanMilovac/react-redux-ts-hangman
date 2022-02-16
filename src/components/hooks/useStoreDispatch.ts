import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

const useStoreDispatch = () => {
  return bindActionCreators(actionCreators, useDispatch());
};

export default useStoreDispatch;
