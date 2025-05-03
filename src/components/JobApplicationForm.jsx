import { useState, useEffect } from "react";

export default function JobApplicationForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    company: "",
    title: "",
    job_posting_url: "",
    referrer_name: "",
    application_status: "applied",
    submission_date: "",
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="job_posting_url" value={form.job_posting_url} onChange={handleChange} placeholder="Job URL" />
      <input name="referrer_name" value={form.referrer_name} onChange={handleChange} placeholder="Referrer" />
      <select name="application_status" value={form.application_status} onChange={handleChange}>
        <option value="applied">Applied</option>
        <option value="interviewing">Interviewing</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
        <option value="closed">Closed</option>
      </select>
      <input type="date" name="submission_date" value={form.submission_date} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
