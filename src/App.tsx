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
          width: "70%",
          flexDirection: "column",
          gap: "15px",
          padding: "5px 40px",
        }}
      >
        <Typography
          variant='h2'
          component='h1'
          textAlign='center'
          color='secondary'
        >
          Sorting Table
        </Typography>
        <ActiveRoutesTable />
        <Typography variant='body2' textAlign='right' color='secondary'>
          Тестовое задание для "НДМ Системы" <br />
          Выполнила <a href='https://github.com/talfril'>Набокова Анна</a>
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
