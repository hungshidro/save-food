import {TKeyTranslation} from 'interfaces';
import {useTranslation} from 'react-i18next';

type UseAppTranslationResponse = {
  t: (key: TKeyTranslation) => string;
};

export const useAppTranslation = (): UseAppTranslationResponse => {
  const {t} = useTranslation();
  return {t};
};
