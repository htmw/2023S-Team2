import { storage, db } from "./firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

import {
  collection,
  addDoc,
  Timestamp,
  getDoc,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";

// const uploadProfilePicture = async (currentUserId, imageUri) => {
//   const uri = imageUri.substring(imageUri.lastIndexOf("/") + 1);
//   const fileName = uri.substring(0, uri.indexOf("."));
//   const fileExt = uri.substring(uri.indexOf(".") + 1);

//   const path = `profile/${currentUser.uid}/${fileName}${Date.now()}.${fileExt}`;

//   return new Promise(async (res, rej) => {
//     const response = await fetch(image);
//     const file = await response.blob();

//     let uploadTask = uploadBytesResumable(ref(storage, uri), file, {
//       contentType: `image/${fileExt}`,
//     });

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => {
//         rej(error);
//       },
//       async () => {
//         const url = await getDownloadURL(uploadTask.snapshot.ref).then(
//           (downloadUrl) => {
//             res(downloadUrl);
//           }
//         );
//       }
//     );
//   });
// };

export const getUser = async ({ currentUser }) => {
  return new Promise(async (res, rej) => {});
};
