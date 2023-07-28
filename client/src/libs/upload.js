import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "skillbrisk");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dw1dvjbx1/image/upload",
      data
    );
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};
export default upload;

// import axios from "axios";

// const upload = async (file) => {
//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "skillbrisk");

//   try {
//     const res = await axios.post('https://api.cloudinary.com/v1_1/skillbrisk/image/upload', data );
//     const { url } = res.data;
//     return url;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default upload;
