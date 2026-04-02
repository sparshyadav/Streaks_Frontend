import { AppRouter } from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRouter />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgba(22, 25, 29, 0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#f8f9fa",
            borderRadius: "16px",
            padding: "12px 24px",
            boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.45)",
            fontSize: "15px",
            fontWeight: "500",
            maxWidth: "400px",
          },
          success: {
            iconTheme: {
              primary: "#00e676",
              secondary: "#16191d",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#16191d",
            },
          },
        }}
      />
    </>
  );
}

export default App;