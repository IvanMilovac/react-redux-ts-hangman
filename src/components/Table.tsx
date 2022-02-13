import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../redux/reducers";
import { useSelector } from "react-redux";

interface IProps {
  columns: string[];
  rows: IRow[];
}

const BasicTable = ({ rows, columns }: IProps) => {
  const {
    user: { name },
  } = useSelector((state: RootState) => state);
  return (
    <TableContainer sx={{ width: "300px", maxWidth: "100%" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "#ddd" }}>
            {columns.map((col) => (
              <TableCell key={uuidv4()}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={uuidv4()}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                background: name === row.userName ? "#0f04" : "inherit",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ paddingInline: "1rem" }}
              >
                {row.userName}
              </TableCell>
              <TableCell align="left" sx={{ paddingInline: "1rem" }}>
                {row.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
