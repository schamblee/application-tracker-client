const API_BASE = "http://localhost:4000"; // Rails API

export async function fetchJobApplications() {
  const res = await fetch(`${API_BASE}/job_applications`);
  return res.json();
}

export async function fetchJobApplication(id) {
  const res = await fetch(`${API_BASE}/job_applications/${id}`);
  return res.json();
}

export async function createJobApplication(data) {
  const res = await fetch(`${API_BASE}/job_applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ job_application: data }),
  });
  return res.json();
}

export async function updateJobApplication(id, data) {
  const res = await fetch(`${API_BASE}/job_applications/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ job_application: data }),
  });
  return res.json();
}

export async function deleteJobApplication(id) {
  await fetch(`${API_BASE}/job_applications/${id}`, {
    method: "DELETE",
  });
}
