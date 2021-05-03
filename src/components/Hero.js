import React from 'react';

export default function Hero({ children, hero } /*props*/) {
  // const { children, hero } = props;
  return <header className={hero}>{children}</header>;
}

Hero.defaulProps = {
  hero: 'defaultHero',
};
