import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const [contacts, setContacts] = useState([]);
    const [applications, setApplications] = useState([]);
    const [activeTab, setActiveTab] = useState("contacts");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const token = localStorage.getItem("adminToken");

    const authHeaders = {
        Authorization: `Bearer ${token}`,
    };

    const handleUnauthorized = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    const fetchData = async () => {
        try {
            setError("");

            const [contactsResponse, applicationsResponse] =
                await Promise.all([
                    fetch(`${API_URL}/api/contact`, {
                        headers: authHeaders,
                    }),

                    fetch(`${API_URL}/api/career`, {
                        headers: authHeaders,
                    }),
                ]);

            console.log(
                "Contact API Status:",
                contactsResponse.status
            );

            console.log(
                "Career API Status:",
                applicationsResponse.status
            );

            const contactsText =
                await contactsResponse.text();

            const applicationsText =
                await applicationsResponse.text();

            console.log(
                "Contact API Response:",
                contactsText
            );

            console.log(
                "Career API Response:",
                applicationsText
            );

            if (
                contactsResponse.status === 401 ||
                applicationsResponse.status === 401
            ) {
                handleUnauthorized();
                return;
            }

            if (!contactsResponse.ok) {
                throw new Error(
                    `Contact API error: ${contactsResponse.status}`
                );
            }

            if (!applicationsResponse.ok) {
                throw new Error(
                    `Career API error: ${applicationsResponse.status}`
                );
            }

            let contactsData;
            let applicationsData;

            try {
                contactsData =
                    JSON.parse(contactsText);

                applicationsData =
                    JSON.parse(applicationsText);
            } catch (jsonError) {
                console.error(
                    "Invalid JSON response:",
                    jsonError
                );

                throw new Error(
                    "Server returned an invalid response."
                );
            }

            setContacts(
                Array.isArray(contactsData)
                    ? contactsData
                    : []
            );

            setApplications(
                Array.isArray(applicationsData)
                    ? applicationsData
                    : []
            );

        } catch (error) {
            console.error(
                "Failed to fetch admin data:",
                error
            );

            setError(
                error.message ||
                "Failed to load dashboard data."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!token) {
            navigate("/admin");
            return;
        }

        fetchData();
    }, []);

    const deleteContact = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this contact?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `${API_URL}/api/contact/${id}`,
                {
                    method: "DELETE",
                    headers: authHeaders,
                }
            );

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                throw new Error(
                    "Failed to delete contact"
                );
            }

            setContacts((prev) =>
                prev.filter(
                    (contact) =>
                        contact._id !== id
                )
            );

        } catch (error) {
            console.error(error);
            alert("Failed to delete contact.");
        }
    };

    const deleteApplication = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this application?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `${API_URL}/api/career/${id}`,
                {
                    method: "DELETE",
                    headers: authHeaders,
                }
            );

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                throw new Error(
                    "Failed to delete application"
                );
            }

            setApplications((prev) =>
                prev.filter(
                    (application) =>
                        application._id !== id
                )
            );

        } catch (error) {
            console.error(error);
            alert("Failed to delete application.");
        }
    };

    const updateStatus = async (
        type,
        id,
        status
    ) => {
        try {
            const response = await fetch(
                `${API_URL}/api/${type}/${id}/status`,
                {
                    method: "PATCH",

                    headers: {
                        ...authHeaders,
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        status,
                    }),
                }
            );

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                throw new Error(
                    "Failed to update status"
                );
            }

            if (type === "contact") {
                setContacts((prev) =>
                    prev.map((contact) =>
                        contact._id === id
                            ? {
                                ...contact,
                                status,
                            }
                            : contact
                    )
                );
            }

            if (type === "career") {
                setApplications((prev) =>
                    prev.map((application) =>
                        application._id === id
                            ? {
                                ...application,
                                status,
                            }
                            : application
                    )
                );
            }

        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading Admin Dashboard...
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 pb-20 pt-32">

            <div className="mx-auto max-w-7xl">

                {/* HEADER */}

                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">

                    <div>

                        <p className="theme-color text-sm uppercase tracking-[0.3em]">
                            REGUL Admin
                        </p>

                        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
                            Dashboard
                        </h1>

                    </div>

                    <button
                        onClick={logout}
                        className="btn-theme rounded-xl px-5 py-3 font-semibold"
                    >
                        Logout
                    </button>

                </div>

                {/* ERROR */}

                {error && (
                    <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">

                        {error}

                    </div>
                )}

                {/* STATISTICS */}

                <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="glass rounded-2xl p-6">

                        <p className="text-gray-400">
                            Contact Requests
                        </p>

                        <h2 className="mt-3 text-4xl font-bold">
                            {contacts.length}
                        </h2>

                    </div>

                    <div className="glass rounded-2xl p-6">

                        <p className="text-gray-400">
                            Job Applications
                        </p>

                        <h2 className="mt-3 text-4xl font-bold">
                            {applications.length}
                        </h2>

                    </div>

                    <div className="glass rounded-2xl p-6">

                        <p className="text-gray-400">
                            Total Requests
                        </p>

                        <h2 className="mt-3 text-4xl font-bold">
                            {contacts.length +
                                applications.length}
                        </h2>

                    </div>

                </div>

                {/* TABS */}

                <div className="mb-8 flex flex-wrap gap-3">

                    <button
                        onClick={() =>
                            setActiveTab("contacts")
                        }
                        className={`rounded-xl px-5 py-3 font-semibold transition ${
                            activeTab === "contacts"
                                ? "btn-theme"
                                : "border border-white/20"
                        }`}
                    >
                        Contact Requests
                    </button>

                    <button
                        onClick={() =>
                            setActiveTab("applications")
                        }
                        className={`rounded-xl px-5 py-3 font-semibold transition ${
                            activeTab === "applications"
                                ? "btn-theme"
                                : "border border-white/20"
                        }`}
                    >
                        Job Applications
                    </button>

                </div>

                {/* CONTACTS */}

                {activeTab === "contacts" && (

                    <div className="space-y-5">

                        {contacts.length === 0 ? (

                            <div className="glass rounded-2xl p-8 text-center text-gray-400">
                                No contact requests yet.
                            </div>

                        ) : (

                            contacts.map((contact) => (

                                <div
                                    key={contact._id}
                                    className="glass rounded-2xl p-6"
                                >

                                    <div className="flex flex-col justify-between gap-5 md:flex-row">

                                        <div>

                                            <h3 className="text-xl font-semibold">
                                                {contact.name}
                                            </h3>

                                            <p className="mt-2 text-gray-400">
                                                {contact.email}
                                            </p>

                                            <p className="text-gray-400">
                                                {contact.phone}
                                            </p>

                                            <p className="mt-3 theme-color">
                                                {contact.service}
                                            </p>

                                            <p className="mt-4 text-gray-300">
                                                {contact.message}
                                            </p>

                                        </div>

                                        <button
                                            onClick={() =>
                                                deleteContact(
                                                    contact._id
                                                )
                                            }
                                            className="h-fit rounded-xl border border-red-500/40 px-4 py-2 text-red-400 transition hover:bg-red-500/10"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                )}

                {/* APPLICATIONS */}

                {activeTab === "applications" && (

                    <div className="space-y-5">

                        {applications.length === 0 ? (

                            <div className="glass rounded-2xl p-8 text-center text-gray-400">
                                No job applications yet.
                            </div>

                        ) : (

                            applications.map(
                                (application) => (

                                    <div
                                        key={
                                            application._id
                                        }
                                        className="glass rounded-2xl p-6"
                                    >

                                        <div className="flex flex-col justify-between gap-5 md:flex-row">

                                            <div>

                                                <h3 className="text-xl font-semibold">
                                                    {
                                                        application.name
                                                    }
                                                </h3>

                                                <p className="mt-2 text-gray-400">
                                                    {
                                                        application.email
                                                    }
                                                </p>

                                                <p className="text-gray-400">
                                                    {
                                                        application.phone
                                                    }
                                                </p>

                                                <p className="mt-3 theme-color">
                                                    {
                                                        application.position
                                                    }
                                                </p>

                                                <p className="mt-2 text-gray-400">
                                                    Experience:{" "}
                                                    {
                                                        application.experience
                                                    }
                                                </p>

                                                <p className="mt-4 text-gray-300">
                                                    {
                                                        application.coverLetter
                                                    }
                                                </p>

                                                {application.resume?.path && (

                                                    <a
                                                        href={`${API_URL}/${application.resume.path.replaceAll(
                                                            "\\",
                                                            "/"
                                                        )}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-4 inline-block theme-color"
                                                    >
                                                        View Resume
                                                    </a>

                                                )}

                                            </div>

                                            <button
                                                onClick={() =>
                                                    deleteApplication(
                                                        application._id
                                                    )
                                                }
                                                className="h-fit rounded-xl border border-red-500/40 px-4 py-2 text-red-400 transition hover:bg-red-500/10"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>

                                )
                            )

                        )}

                    </div>

                )}

            </div>

        </div>
    );
}