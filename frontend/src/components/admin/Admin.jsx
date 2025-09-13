import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { uploadBook } from "../../services/service";

const Admin = () => {
  const [name, setName] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [imgUrl, setImgUrl] = React.useState("");
  const [file, setFile] = React.useState(null);
  const { updateCustomToast } = useGlobalContext();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("summary", summary);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("image", file);

    try {
      const res = await uploadBook(formData);
      if (res?.statusCode >= 200 && res?.statusCode < 300) {
        updateCustomToast("SUCCESS", "Book uploaded successfully");
      } else {
        updateCustomToast("ERROR", "Failed to upload book");
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <form
        className="grid grid-rows-7 gap-4 px-[25%] py-[5%]"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Enter Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Enter Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          placeholder="Enter Quantity"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          min={1}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-indigo text-white flex justify-center items-center w-[10%] mx-[45%] p-2 rounded-md mb-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
