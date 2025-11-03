import { useState } from 'react';
import { MainPage } from './components/MainPage';
import { PersonalAccount } from './components/PersonalAccount';
import { Editor } from './components/Editor';
import { CharacterGeneration } from './components/CharacterGeneration';
import { AdminPanel } from './components/AdminPanel';

type Page = 'main' | 'account' | 'editor' | 'characters' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('main');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <div className="w-full h-screen">
      {currentPage === 'main' && <MainPage onNavigate={handleNavigate} />}
      {currentPage === 'account' && <PersonalAccount onNavigate={handleNavigate} />}
      {currentPage === 'editor' && <Editor onNavigate={handleNavigate} />}
      {currentPage === 'characters' && <CharacterGeneration onNavigate={handleNavigate} />}
      {currentPage === 'admin' && <AdminPanel onNavigate={handleNavigate} />}
    </div>
  );
}
