import React from 'react';
import PageDetailsContent from "../../components/PageDetailsContent";
import EmailFormSection from "../../components/EmailFormSection";
import BlogDetailsPromo from "./sections/BlogDetailsPromo";

const BlogDetails = () => {
   return (
       <>
          <BlogDetailsPromo/>
          <PageDetailsContent/>
          <EmailFormSection/>
       </>
   );
};

export default BlogDetails;