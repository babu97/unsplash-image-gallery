import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/:username" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
