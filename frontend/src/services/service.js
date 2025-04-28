const httpService = "http://localhost:2000";

export const getBooks = async () => {
  try {
    const response = await fetch(`${httpService}/books`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
};

export const SignUpForUser = async (payload) => {
    try {
      const response = await fetch("http://localhost:2000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Convert book object to JSON
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding book:", error);
      return null;
    }
  };

export const LoginUser = async (payload) => {
  try {
    const response = await fetch("http://localhost:2000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Convert book object to JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding book:", error);
    return null;
  }
};