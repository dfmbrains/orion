import React, { useEffect } from 'react';
import PageDetailsContent from '../../components/PageDetailsContent';
import EmailFormSection from '../../components/EmailFormSection';
import BlogDetailsPromo from './sections/BlogDetailsPromo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { blogDetailsRecoil, blogRecoil } from '../../recoil';
import { useParams } from 'react-router-dom';
import MatxLoading from '../../components/MatxLoading';
import { Styled100vhLoadingBox } from '../../components/StyledComponents';

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
          <MatxLoading />
        </Styled100vhLoadingBox>
      )}
      <EmailFormSection />
    </>
  );
};

export default BlogDetails;
