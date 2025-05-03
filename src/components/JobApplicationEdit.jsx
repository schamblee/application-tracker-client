import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobApplication, updateJobApplication } from "../api/jobApplications";
import JobApplicationForm from "./JobApplicationForm.jsx";

export default function JobApplicationEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetchJobApplication(id).then(setInitialData);
  }, [id]);

  const handleSubmit = async (data) => {
    await updateJobApplication(id, data);
    navigate(`/${id}`);
  };

  if (!initialData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Job Application</h2>
      <JobApplicationForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
}
