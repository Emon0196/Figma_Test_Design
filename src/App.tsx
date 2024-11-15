import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Frame1707477989 } from './components/Frame1707477989/Frame1707477989';
import { Frame1707477991 } from './components/Frame1707477991/Frame1707477991';
import { Frame1707477992 } from './components/Frame1707477992/Frame1707477992';
import { Frame1707478003 } from './components/Frame1707478003/Frame1707478003';
import { Footer } from './components/Footer/Footer';
import CustomerTestimonials from './components/Review/CustomerTestimonials'; 

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame1707477989/>
      <Frame1707477991/>
      <Frame1707477992/>
      <Frame1707478003/>
      <CustomerTestimonials/>
      <Footer/>
    </div>
  );
});

export default App