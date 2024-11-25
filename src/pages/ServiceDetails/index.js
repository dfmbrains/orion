import React, { useEffect } from 'react';
import PromoSection from '../../components/PromoSection';
import EmailFormSection from '../../components/EmailFormSection';
import PageDetailsContent from '../../components/PageDetailsContent';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { serviceDetailsRecoil, serviceRecoil } from '../../recoil';
import { Styled100vhLoadingBox } from '../../components/StyledComponents';
import MatxLoading from '../../components/MatxLoading';

const ServiceDetails = () => {
  const { id } = useParams();

  const servicesList = useRecoilValue(serviceRecoil);
  const [serviceDetailsData, setServiceDetailsData] =
    useRecoilState(serviceDetailsRecoil);

  useEffect(() => {
    if (!serviceDetailsData) {
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
          <MatxLoading />
        </Styled100vhLoadingBox>
      )}
      <EmailFormSection />
    </>
  );
};

export default ServiceDetails;
