import { Container, Typography } from "@mui/material";
import ActiveRoutesTable from "./components/activeRoutesTable/ActiveRoutesTable";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "10px 40px",
        }}
      >
        <Typography variant='h2' component='h1' textAlign='center' color='secondary'>
          Sorting Table
        </Typography>
        <ActiveRoutesTable />
      </Container>
    </ThemeProvider>
  );
}

export default App;
