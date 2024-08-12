import {useGetKidInfo} from '@/hooks/my-page/useGetKidInfo';
import {patchKidInfoState} from '@/recoil/atoms/my-page/kidInfo';
import {useSetRecoilState} from 'recoil';
import {useEffect} from 'react';
import KidNameUpdateView from '@/components/organisms/MyPage/KidNameUpdateView';
import KidBirthdayUpdateView from '@/components/organisms/MyPage/KidBirthdayUpdateView';
import KidGenderUpdateView from '@/components/organisms/MyPage/KidGenderUpdateView';
import KidAllergyUpdateView from '@/components/organisms/MyPage/KidAllergyUpdateView';
import KidProfileUpdateView from '@/components/organisms/MyPage/KidProfileUpdateView';

const kidId = 1;
const kindergartenId = 1;

const KidUpdateView = () => {
  const {data} = useGetKidInfo(kidId);
  const setKidInfo = useSetRecoilState(patchKidInfoState);

  useEffect(() => {
    if (data !== undefined) {
      const {id, name, birthday, gender, allergies, picture, banId} = data;
      setKidInfo({
        dto: {
          id,
          name,
          birthday,
          gender,
          allergies,
          banId,
          kindergartenId: kindergartenId,
        },
        picture,
      });
    }
  }, [data, setKidInfo]);

  return (
    <div className="flex-col items-end w-full pt-10 text-gray-300">
      <div className="flex flex-col items-center justify-center w-full gap-3 py-3">
        <KidProfileUpdateView />
      </div>
      <KidNameUpdateView />
      <div className="flex items-end justify-between my-4 gap-9 h-fit">
        <div className="flex-grow">
          <KidBirthdayUpdateView />
        </div>
        <div>
          <KidGenderUpdateView />
        </div>
      </div>
      <KidAllergyUpdateView />
    </div>
  );
};

export default KidUpdateView;
