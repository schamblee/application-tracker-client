import { useEffect, useState } from "react";
import { fetchJobApplications, deleteJobApplication } from "../api/jobApplications";
import { Link } from "react-router-dom";

export default function JobApplicationsList() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchJobApplications().then(setApps);
  }, []);

  const handleDelete = async (id) => {
    await deleteJobApplication(id);
    setApps((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h1>Job Applications</h1>
      <Link to="/new">+ Add New</Link>
      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <Link to={`/${app.id}`}>{app.title} at {app.company}</Link>
            <button onClick={() => handleDelete(app.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
