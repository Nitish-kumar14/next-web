"use client";

import { useState } from "react";
import styles from "@/app/contact/contact.module.css"

const GojoForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    rank: "",
    id: "",
    father: "",
    post: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/gojo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Data added successfully!");
        setFormData({ username: "", rank: "", id: "", father: "", post: "" });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label className={styles.label}>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.input_field}>
        <label className={styles.label}>Rank:</label>
        <input
          type="text"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.input_field}>
        <label className={styles.label}>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.input_field}>
        <label className={styles.label}>Father:</label>
        <input
          type="text"
          name="father"
          value={formData.father}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.input_field}>
        <label className={styles.label}>Post:</label>
        <input
          type="text"
          name="post"
          value={formData.post}
          onChange={handleChange}
          required
        />
        
          </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GojoForm;

