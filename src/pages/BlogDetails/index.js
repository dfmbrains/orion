import Loadable from 'components/Loadable';
import OrionLoading from 'components/OrionLoading';
import { Styled100vhLoadingBox } from 'components/StyledComponents';
import React, { lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MetaTags from 'seo/MetaTags';
import { blogDetailsRecoil, blogRecoil } from 'store';
import BlogDetailsPromo from './sections/BlogDetailsPromo';
import EmailFormSection from 'components/EmailFormSection';

const PageDetailsContent = Loadable(
  lazy(() => import('components/PageDetailsContent')),
);
// const EmailFormSection = Loadable(
//   lazy(() => import('components/EmailFormSection')),
// );

const BlogDetails = () => {
  const { id } = useParams();

  const blogList = useRecoilValue(blogRecoil);
  const [blog, setBlog] = useRecoilState(blogDetailsRecoil);

  useEffect(() => {
    if (!blog || id !== blog.id) {
      setBlog(blogList.find(item => item.id === id));
    }
  }, [blog, blogList, id, setBlog]);

  useEffect(() => {
    return () => setBlog(null);
  }, [setBlog]);

  return (
    <>
      <MetaTags
        titleKey="meta.blogs.title"
        descriptionKey="meta.blogs.description"
      />

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
