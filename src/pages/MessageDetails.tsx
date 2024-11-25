import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const MessageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the message ID from the URL params
  const [message, setMessage] = useState<Message | null>(null);
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
    const fetchMessage = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token
        const response = await fetch(
          `http://localhost:5000/api/messages/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token
            },
          }
        );

        if (response.status === 401 || response.status === 403) {
          // Unauthorized access, redirect to login
          localStorage.removeItem("token"); // Clear the token
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch message details");
        }

        const data = await response.json();
        setMessage(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading message details...</div>;
  }

  if (!message) {
    return <div>Message not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Message Details</h1>
      <p>
        <strong>Name:</strong> {message.name}
      </p>
      <p>
        <strong>Email:</strong> {message.email}
      </p>
      <p>
        <strong>Message:</strong> {message.message}
      </p>
      <p>
        <strong>Date:</strong> {formatDate(message.createdAt)}
      </p>
    </div>
  );
};

export default MessageDetails;
