import Loadable from 'components/Loadable';
import OrionLoading from 'components/OrionLoading';
import PromoSection from 'components/PromoSection/PromoSection';
import { Styled100vhLoadingBox } from 'components/StyledComponents';
import React, { lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MetaTags from 'seo/MetaTags';
import EmailFormSection from 'components/EmailFormSection';
import { serviceDetailsRecoil, serviceRecoil } from 'store';

const PageDetailsContent = Loadable(
  lazy(() => import('components/PageDetailsContent')),
);
// const EmailFormSection = Loadable(
//   lazy(() => import('components/EmailFormSection')),
// );

const ServiceDetails = () => {
  const { id } = useParams();

  const servicesList = useRecoilValue(serviceRecoil);
  const [serviceDetailsData, setServiceDetailsData] =
    useRecoilState(serviceDetailsRecoil);

  useEffect(() => {
    if (!serviceDetailsData || id !== serviceDetailsData.id) {
      setServiceDetailsData(servicesList.find(item => item.id === id));
    }
  }, [id, serviceDetailsData, servicesList, setServiceDetailsData]);
  useEffect(() => {
    return () => setServiceDetailsData(null);
  }, [setServiceDetailsData]);

  return (
    <>
      <MetaTags
        titleKey="meta.services.title"
        descriptionKey="meta.services.description"
      />

      {serviceDetailsData ? (
        <>
          <PromoSection
            bgImage={serviceDetailsData.images.file}
            title={serviceDetailsData.title}
          />
          <PageDetailsContent data={serviceDetailsData} />
        </>
      ) : (
        <Styled100vhLoadingBox sx={{ background: '#252525' }}>
          <OrionLoading />
        </Styled100vhLoadingBox>
      )}

      <EmailFormSection />
    </>
  );
};

export default ServiceDetails;
