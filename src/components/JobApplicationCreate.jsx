import { createJobApplication } from "../api/jobApplications";
import { useNavigate } from "react-router-dom";
import JobApplicationForm from "./JobApplicationForm.jsx";

export default function JobApplicationCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const app = await createJobApplication(data);
    navigate(`/${app.id}`);
  };

  return (
    <div>
      <h2>New Job Application</h2>
      <JobApplicationForm onSubmit={handleSubmit} />
    </div>
  );
}
