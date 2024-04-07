'use client';

import React, { useEffect } from 'react'
import { themeChange } from 'theme-change';

const ThemeSwitcher = () => {

    useEffect(() => {
        themeChange(false);
      }, []);

  return (
    <>
        ThemeSwitcher
        <button data-set-theme="" data-act-class="ACTIVECLASS">🌞</button>
        <button data-set-theme="dark" data-act-class="ACTIVECLASS">🌚</button>
    </>
  )
}

export default ThemeSwitcher