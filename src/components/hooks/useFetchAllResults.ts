import axios from "axios";
import { useEffect, useRef } from "react";
import useStoreSelector from "./useStoreSelector";
import { calculateScore } from "../../utils";

interface IApiScore {
  _id: number;
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
}
const useFetchAllResults = (
  setResultData: React.Dispatch<React.SetStateAction<IData[]>>
) => {
  const {
    stats: { gameResult },
  } = useStoreSelector();

  const setResultDataRef = useRef(setResultData);

  useEffect(() => {
    setResultDataRef.current = setResultData;
  }, [setResultData]);

  useEffect(() => {
    const { quoteId, userName, errors, length, uniqueCharacters, duration } =
      gameResult;
    axios
      .get(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores"
      )
      .then(({ data }) => {
        let array: IData[] = [];
        data.map((item: IApiScore) =>
          array.push({
            quoteId: item.quoteId,
            userName: item.userName,
            length: item.length,
            uniqueCharacters: item.uniqueCharacters,
            errors: item.errors,
            duration: item.duration,
          })
        );
        array.push({
          quoteId: quoteId,
          userName: userName,
          length: length,
          uniqueCharacters: uniqueCharacters,
          errors: errors,
          duration: duration,
        });
        array = array.map((item) => ({
          ...item,
          score: calculateScore(item, array),
        }));
        setResultDataRef.current(array);
      });
  }, [gameResult]);
};

export default useFetchAllResults;
