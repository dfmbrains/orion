import React, { useEffect } from 'react';
import PromoSection from '../../components/PromoSection';
import EmailFormSection from '../../components/EmailFormSection';
import PageDetailsContent from '../../components/PageDetailsContent';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { serviceDetailsRecoil } from '../../recoil';
import { getFileFromFirebase } from '../../firebase/fileFirebase';
import { serviceFirebasePath } from '../../helpers/constants';
import { getCollectionDocumentById } from '../../firebase/firestoreFirebase';
import { Styled100vhLoadingBox } from '../../components/StyledComponents';
import MatxLoading from '../../components/MatxLoading';

const ServiceDetails = () => {
  const { id } = useParams();

  const [serviceDetailsData, setServiceDetailsData] =
    useRecoilState(serviceDetailsRecoil);

  const getServiceData = async () => {
    const files = await getFileFromFirebase(`${serviceFirebasePath}/${id}`);
    const data = await getCollectionDocumentById(serviceFirebasePath, id);

    return { ...data, images: files[0] };
  };

  useEffect(() => {
    if (!serviceDetailsData) {
      getServiceData().then(res => setServiceDetailsData(res));
    }
  }, [serviceDetailsData]);
  useEffect(() => {
    return () => setServiceDetailsData(null);
  }, []);

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
