// 3-all.js
import { uploadPhoto, createUser } from "./utils.js";

async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    console.log(`First Name: ${userResponse.firstName}`);
    console.log(`Last Name: ${userResponse.lastName}`);
  } catch (error) {
    console.error("Signup system offline");
  }
}

export default handleProfileSignup;
