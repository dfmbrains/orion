import EmailFormSection from 'components/EmailFormSection';
import Loadable from 'components/Loadable';
import OrionLoading from 'components/OrionLoading';
import { Styled100vhLoadingBox } from 'components/StyledComponents';
import React, { lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MetaTags from 'seo/MetaTags';
import { blogDetailsRecoil, blogRecoil } from 'store';
import BlogDetailsPromo from './sections/BlogDetailsPromo';

const PageDetailsContent = Loadable(
  lazy(() => import('components/PageDetailsContent')),
);
// const EmailFormSection = Loadable(
//   lazy(() => import('components/EmailFormSection')),
// );

const BlogDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const blogList = useRecoilValue(blogRecoil);
  const [blog, setBlog] = useRecoilState(blogDetailsRecoil);

  useEffect(() => {
    if (!blog || id !== blog.id || blog.language !== i18n.language) {
      setBlog(
        blogList
          .filter(item => item.id === id)
          .find(item => item.language === i18n.language),
      );
    }
  }, [blog, blogList, i18n.language, id, setBlog]);

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
