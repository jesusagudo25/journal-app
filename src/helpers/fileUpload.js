export const fileUpload = async (file) => {
    
    if (!file) throw new Error("No file provided for upload");
    
    const cloudURL = `https://api.cloudinary.com/v1_1/agudobot/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);

    try {
        const response = await fetch(cloudURL, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("File upload failed");

        const data = await response.json();
        return data.secure_url; // Return the URL of the uploaded file
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
