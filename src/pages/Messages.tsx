import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Message {
  _id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); // Hook for navigation

  const formatDate = (isoString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token
        const response = await fetch("http://localhost:5000/api/messages", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
          },
        });

        if (response.status === 401 || response.status === 403) {
          // If unauthorized, redirect to login
          localStorage.removeItem("token"); // Clear token
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  if (loading) {
    return <div>Loading messages...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Messages</h1>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Email
              </th>

              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <Link
                    to={`/messages/${msg._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {msg.name}
                  </Link>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {msg.email}
                </td>

                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {formatDate(msg.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Messages;
