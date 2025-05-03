import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobApplication } from "../api/jobApplications";

export default function JobApplicationDetail() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetchJobApplication(id).then(setApp);
  }, [id]);

  if (!app) return <div>Loading...</div>;

  return (
    <div>
      <h2>{app.title} at {app.company}</h2>
      <p>Status: {app.application_status}</p>
      <p>Submitted: {app.submission_date}</p>
      <a href={app.job_posting_url} target="_blank" rel="noreferrer">Job Posting</a>
      <p>Referrer: {app.referrer_name}</p>
      <Link to={`/${app.id}/edit`}>Edit</Link>
    </div>
  );
}
