import EmailFormSection from 'components/EmailFormSection';
import OrionLoading from 'components/OrionLoading';
import PageDetailsContent from 'components/PageDetailsContent';
import PromoSection from 'components/PromoSection/PromoSection';
import { Styled100vhLoadingBox } from 'components/StyledComponents';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { serviceDetailsRecoil, serviceRecoil } from 'store';

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
