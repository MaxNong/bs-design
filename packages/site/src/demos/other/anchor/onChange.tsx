import React from 'react';
import { Anchor } from 'bs-design';

const { Link } = Anchor;

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
};

export default () => (
  <Anchor affix={false} onChange={onChange}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
);
