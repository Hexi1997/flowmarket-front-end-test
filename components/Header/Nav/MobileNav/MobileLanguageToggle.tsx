import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';
import React, { useCallback, useState } from 'react';

import {
  Languages,
  LanguageType,
  switchLanguage,
  useTranslation
} from '@/assets/i18n';
export default function MobileLanguageToggle() {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(false);

  const handleLocaleChange = useCallback((language: string) => {
    switchLanguage(language as LanguageType);
  }, []);

  return (
    <div className="absolute right-0 bottom-0 p-4 w-full flex justify-end bg-white">
      <Checkbox
        checked={checked}
        onChange={(e) => {
          handleLocaleChange(i18n.language === 'zh' ? 'en' : 'zh');
          setChecked(e.currentTarget.checked);
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        Language: {Languages[i18n.language]?.subMenuLabel}
      </Checkbox>
    </div>
  );
}
