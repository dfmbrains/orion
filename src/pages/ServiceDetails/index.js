import EmailFormSection from 'components/EmailFormSection';
import Loadable from 'components/Loadable';
import OrionLoading from 'components/OrionLoading';
import PromoSection from 'components/PromoSection/PromoSection';
import { Styled100vhLoadingBox } from 'components/StyledComponents';
import React, { lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MetaTags from 'seo/MetaTags';
import { serviceDetailsRecoil, serviceRecoil } from 'store';

const PageDetailsContent = Loadable(
  lazy(() => import('components/PageDetailsContent')),
);
// const EmailFormSection = Loadable(
//   lazy(() => import('components/EmailFormSection')),
// );

const ServiceDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const servicesList = useRecoilValue(serviceRecoil);
  const [serviceDetailsData, setServiceDetailsData] =
    useRecoilState(serviceDetailsRecoil);

  useEffect(() => {
    if (
      !serviceDetailsData ||
      id !== serviceDetailsData.id ||
      serviceDetailsData.language !== i18n.language
    ) {
      setServiceDetailsData(
        servicesList
          .filter(item => item.id === id)
          .find(item => i18n.language === item.language),
      );
    }
  }, [
    i18n.language,
    id,
    serviceDetailsData,
    servicesList,
    setServiceDetailsData,
  ]);

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
