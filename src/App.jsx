import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobApplicationsList from "./components/JobApplicationsList";
import JobApplicationDetail from "./components/JobApplicationDetail";
import JobApplicationCreate from "./components/JobApplicationCreate";
import JobApplicationEdit from "./components/JobApplicationEdit";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobApplicationsList />} />
        <Route path="/new" element={<JobApplicationCreate />} />
        <Route path="/:id" element={<JobApplicationDetail />} />
        <Route path="/:id/edit" element={<JobApplicationEdit />} />
      </Routes>
    </Router>
  );
}
