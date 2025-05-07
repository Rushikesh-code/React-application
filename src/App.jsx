import Login from "./components/AuthCredentials/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from "./components/AuthCredentials/Sample.jsx";

function App() {

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route index="true" element={<Login />} />
                  <Route index="/sample" element={<Sample />} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
