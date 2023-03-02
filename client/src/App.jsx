import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Chat, Home } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chat />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
