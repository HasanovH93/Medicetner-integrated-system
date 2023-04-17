

const API_URL = process.env.REACT_APP_API_URL

export async function createOrder(formData) {
    try {
      const response = await fetch(`${API_URL}/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Handle successful submission
        console.log("Form submitted successfully");
      } else {
        // Handle errors
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
