import EmailFormSection from 'components/EmailFormSection';
import OrionLoading from 'components/OrionLoading';
import PageDetailsContent from 'components/PageDetailsContent';
import { Styled100vhLoadingBox } from 'components/StyledComponents';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { blogDetailsRecoil, blogRecoil } from 'store';
import BlogDetailsPromo from './sections/BlogDetailsPromo';

const BlogDetails = () => {
  const { id } = useParams();

  const blogList = useRecoilValue(blogRecoil);
  const [blog, setBlog] = useRecoilState(blogDetailsRecoil);

  useEffect(() => {
    if (!blog) {
      setBlog(blogList.find(item => item.id === id));
    }
  }, [blog, blogList, id, setBlog]);

  useEffect(() => {
    return () => setBlog(null);
  }, [setBlog]);

  return (
    <>
      {blog ? (
        <>
          <BlogDetailsPromo images={blog.images} />
          <PageDetailsContent data={blog} />
        </>
      ) : (
        <Styled100vhLoadingBox>
          <OrionLoading />
        </Styled100vhLoadingBox>
      )}
      <EmailFormSection />
    </>
  );
};

export default BlogDetails;
