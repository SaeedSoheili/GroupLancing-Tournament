import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, status, income, date, manage) {
  return { name, status, income, date, manage };
}

export default function AdminProjectsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  // Make an API request to fetch the project data from your backend
  useEffect(() => {
    fetch("http://localhost:4000/getprojectsdataadmin")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const handleStatusUpdate = async (projectId, newStatus) => {
    try {
      setStatusUpdating(true);

      // Send a PUT request to your backend API to update the project status
      const response = await fetch(
        `http://localhost:4000/updatestatus/${projectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newStatus }),
        }
      );

      if (response.ok) {
        const updatedRows = rows.map((row) =>
          row.id === projectId ? { ...row, status: newStatus } : row
        );
        setRows(updatedRows);
      } else {
        // Handle errors
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setStatusUpdating(false);
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontFamily: '"Vazirmatn", sans-serif',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const tableCellStyle = {
    fontFamily: '"Vazirmatn", sans-serif',
  };

  // Function to handle column sorting
  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      // Toggle sorting order if clicking the same column
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Sort in ascending order by default when clicking a new column
      setSortColumn(columnName);
      setSortOrder("asc");
    }
  };

  // Sorting logic for rows
  const sortedRows = [...rows].sort((a, b) => {
    const columnA = a[sortColumn] || ""; // Provide a default value (empty string) for undefined data
    const columnB = b[sortColumn] || ""; // Provide a default value (empty string) for undefined data

    // Compare the two values based on the column type
    if (sortOrder === "asc") {
      if (sortColumn === "income") {
        return parseFloat(columnA) - parseFloat(columnB);
      } else if (sortColumn === "date") {
        const dateA = new Date(columnA).getTime();
        const dateB = new Date(columnB).getTime();
        return dateA - dateB;
      } else {
        return columnA.localeCompare(columnB);
      }
    } else {
      if (sortColumn === "income") {
        return parseFloat(columnB) - parseFloat(columnA);
      } else if (sortColumn === "date") {
        const dateA = new Date(columnA).getTime();
        const dateB = new Date(columnB).getTime();
        return dateB - dateA;
      } else {
        return columnB.localeCompare(columnA);
      }
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              align="center"
              onClick={() => handleSort("name")} // Add onClick for sorting
            >
              نام و نام خانوادگی
              {sortColumn === "name" && (
                <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </StyledTableCell>
            <StyledTableCell
              align="center"
              onClick={() => handleSort("status")} // Add onClick for sorting
            >
              وضعیت
              {sortColumn === "status" && (
                <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </StyledTableCell>
            <StyledTableCell
              align="center"
              onClick={() => handleSort("income")} // Add onClick for sorting
            >
              مقدار درآمد
              {sortColumn === "income" && (
                <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </StyledTableCell>
            <StyledTableCell
              align="center"
              onClick={() => handleSort("date")} // Add onClick for sorting
            >
              تاریخ
              {sortColumn === "date" && (
                <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </StyledTableCell>
            {/* <StyledTableCell align="center">مقدار درآمد</StyledTableCell> */}
            {/* <StyledTableCell align="center">تاریخ</StyledTableCell> */}
            <StyledTableCell align="center">مدیریت</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? sortedRows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : sortedRows
          ).map((row, index) => (
            <TableRow key={row.name + index}>
              <TableCell
                style={tableCellStyle}
                align="center"
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell style={tableCellStyle} align="center">
                {row.status === "accepted" ? (
                  <img
                    src="../assets/icons8-tick-96.png"
                    alt="Accept"
                    onClick={() => handleStatusUpdate(row.id, "accepted")}
                    disabled={statusUpdating}
                    width="30px"
                  />
                ) : row.status === "pending" ? (
                  <img
                    src="../assets/icons8-pending-96.png"
                    alt="Pending"
                    onClick={() => handleStatusUpdate(row.id, "pending")}
                    disabled={statusUpdating}
                    width="30px"
                  />
                ) : (
                  <img
                    src="../assets/icons8-cancel-96.png"
                    alt="Decline"
                    onClick={() => handleStatusUpdate(row.id, "declined")}
                    disabled={statusUpdating}
                    width="30px"
                  />
                )}
              </TableCell>
              <TableCell style={tableCellStyle} align="center">
                ${row.income}
              </TableCell>
              <TableCell style={tableCellStyle} align="center">
                {row.date}
              </TableCell>
              <TableCell style={tableCellStyle} align="center">
                <img
                  src="../assets/icons8-tick-96.png"
                  alt="Accept"
                  onClick={() => handleStatusUpdate(row.id, "accepted")}
                  disabled={statusUpdating}
                  width="30px"
                />
                <img
                  src="../assets/icons8-pending-96.png"
                  alt="Pending"
                  onClick={() => handleStatusUpdate(row.id, "pending")}
                  disabled={statusUpdating}
                  width="30px"
                />
                <img
                  src="../assets/icons8-cancel-96.png"
                  alt="Decline"
                  onClick={() => handleStatusUpdate(row.id, "declined")}
                  disabled={statusUpdating}
                  width="30px"
                />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
