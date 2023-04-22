import React, {useEffect} from 'react';
import PageDetailsContent from "../../components/PageDetailsContent";
import EmailFormSection from "../../components/EmailFormSection";
import BlogDetailsPromo from "./sections/BlogDetailsPromo";
import {useRecoilState} from "recoil";
import {blogDetailsRecoil} from "../../recoil";
import {getCollectionDocumentById} from "../../firebase/firestoreFirebase";
import {blogFirebasePath} from "../../helpers/constants";
import {useParams} from "react-router-dom";
import {getFileFromFirebase} from "../../firebase/fileFirebase";
import MatxLoading from "../../components/MatxLoading";
import {Styled100vhLoadingBox} from "../../components/StyledComponents";

const BlogDetails = () => {
   const {id} = useParams()

   const [blog, setBlog] = useRecoilState(blogDetailsRecoil)

   const getBlogData = async () => {
      const files = await getFileFromFirebase(`${blogFirebasePath}/${id}`)
      const data = await getCollectionDocumentById(blogFirebasePath, id)

      return {...data, images: files}
   }

   useEffect(() => {
      if (!blog) {
         getBlogData()
             .then(res => setBlog(res))
      }
   }, [blog])

   useEffect(() => {
      return () => setBlog(null)
   }, [])

   return (
       <>
          {blog ? (
              <>
                 <BlogDetailsPromo images={blog.images}/>
                 <PageDetailsContent data={blog}/>
              </>
          ) : (
              <Styled100vhLoadingBox>
                 <MatxLoading/>
              </Styled100vhLoadingBox>
          )}
          <EmailFormSection/>
       </>
   );
};

export default BlogDetails;