import React from 'react';

import Header from './Components/Header';
import LastPosts from './Components/LastPosts';
import DestakPosts from './Components/DestakPosts';
import SpecialContent from './Components/SpecialContent';
import TranslatedMessages from './Components/TranslatedMessages';
import TalkToPastor from './Components/TalkToPastor';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <LastPosts />
      <DestakPosts />
      <SpecialContent />
      <TranslatedMessages />
      <TalkToPastor />
      <Footer />
    </>
  );
}
