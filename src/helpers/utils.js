import {getAllCollection} from "../firebase/firestoreFirebase";
import {getFileFromFirebase} from "../firebase/fileFirebase";

export const anchorLinkHandler = (elementId) => {
   const target = document.getElementById(elementId);
   if (target) {
      window.scrollTo({
         top: target.offsetTop,
      });
   }
};

export const handleScrollToTop = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"})

export const formatName = (firstName, middleName, lastName) => {
   let fullName = `${lastName} ${firstName} ${middleName}`;
   return fullName.trim().replace(/\s+/g, ' ');
}

export const getAllCollectionsWithImg = async (path, multiFile) => {
   return await getAllCollection(path)
       .then(data => {
          const createdData = data.map(item => {
             return getFileFromFirebase(`${path}/${item.id}`)
                 .then(files => ({...item, images: multiFile ? files : files[0]}))
          })
          return Promise.all(createdData)
       })
}