export const localService = "https://bookstore-backend-gyz6.onrender.com";
export const getBooks = async () => {
  try {
    const response = await fetch(`${localService}/books`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
};

export const SignUpForUser = async (payload) => {
  try {
    const response = await fetch(`${localService}/users/signup`, {
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
    const response = await fetch(`${localService}/users/login`, {
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

export const isLoginValid = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const profileBuild = async (username, payload) => {
  try {
    const response = await fetch(
      `${localService}/users/profile/${username}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Convert book object to JSON
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding book:", error);
    return null;
  }
};

export const getProfile = async (username, payload) => {
  try {
    const response = await fetch(
      `${localService}/users/profile/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Convert book object to JSON
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding book:", error);
    return null;
  }
};

export const uploadBook = async (formData) => {
  try {
    const response = await fetch(`${localService}/books/uploadBook`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading book:", error);
    return null;
  }
};