import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() { // create an async function
  try { // try to run the function
    const photo = await uploadPhoto(); // await the uploadPhoto function
    const user = await createUser(); // await the createUser function
    return { photo, user }; // return the photo and user
  } catch (error) { // if there is an error
    return {
      photo: null,
      user: null,
    }; // return null
  }
}
