import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { useColorModeValue } from "./components/ui/color-mode"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Create from "./pages/Create"

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.200", "gray.800")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  )
}

export default App
