import { ReactNode } from 'react';
import style from './Container.module.css';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
