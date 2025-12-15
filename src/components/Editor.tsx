import { Button } from "./ui/button";
import { 
  Save, 
  Download, 
  FileText, 
  Users, 
  Image as ImageIcon, 
  Type, 
  ChevronLeft,
  Square,
  Sparkles,
  Plus,
  Trash2,
  FileImage,
  Upload,
  Folder,
  X
} from "lucide-react";
import { useState } from "react";

interface EditorProps {
  onNavigate: (page: string) => void;
}

interface ComicPage {
  id: number;
  name: string;
}

interface Background {
  id: number;
  url: string;
}

export function Editor({ onNavigate }: EditorProps) {
  const [pages, setPages] = useState<ComicPage[]>([
    { id: 1, name: 'Страница 1' },
    { id: 2, name: 'Страница 2' },
    { id: 3, name: 'Страница 3' },
  ]);
  const [currentPageId, setCurrentPageId] = useState(1);
  const [selectedPanel, setSelectedPanel] = useState<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [selectedPose, setSelectedPose] = useState<number | null>(null);
  const [selectedBackground, setSelectedBackground] = useState<number | null>(null);
  const [backgrounds, setBackgrounds] = useState<Background[]>([
    { id: 1, url: '' },
    { id: 2, url: '' },
    { id: 3, url: '' },
  ]);
  const [panelText, setPanelText] = useState('');

  // Mock character poses - each character has 10 poses
  const characterPoses = Array.from({ length: 10 }, (_, i) => i + 1);
  const characters = Array.from({ length: 6 }, (_, i) => i + 1);

  const handleRemoveBackground = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBackgrounds(backgrounds.filter(bg => bg.id !== id));
    if (selectedBackground === id) {
      setSelectedBackground(null);
    }
  };

  const handleUploadBackground = () => {
    const newId = Math.max(0, ...backgrounds.map(b => b.id)) + 1;
    setBackgrounds([...backgrounds, { id: newId, url: '' }]);
  };

  const handleGeneratePanel = () => {
    if (selectedPanel === null) {
      alert('Пожалуйста, сначала выберите панель, кликнув по ней.');
      return;
    }
    // AI will process and combine:
    // - Selected character from left panel
    // - Background image
    // - Text elements (speech bubbles, captions)
    // - Template layout configuration
    // Into a single composed panel image
    alert(`ИИ генерация запущена для Панели ${selectedPanel}! Это объединит персонажа, фон и текст в панель.`);
  };

  const handleAddPage = () => {
    const newId = Math.max(...pages.map(p => p.id)) + 1;
    setPages([...pages, { id: newId, name: `Страница ${newId}` }]);
    setCurrentPageId(newId);
  };

  const handleDeletePage = (id: number) => {
    if (pages.length === 1) {
      alert('Невозможно удалить последнюю страницу');
      return;
    }
    const newPages = pages.filter(p => p.id !== id);
    setPages(newPages);
    if (currentPageId === id) {
      setCurrentPageId(newPages[0].id);
    }
  };

  const currentPage = pages.find(p => p.id === currentPageId);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top Toolbar */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-slate-600"
            onClick={() => onNavigate('account')}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Назад
          </Button>
          <div className="h-6 w-px bg-slate-200"></div>
          <span className="text-slate-700">Космическое приключение - {currentPage?.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-slate-600">
            <FileText className="w-4 h-4 mr-2" />
            Шаблоны
          </Button>
          <Button 
            size="sm" 
            className="bg-blue-500 hover:bg-blue-600 text-white shadow-none"
            onClick={handleGeneratePanel}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Генерировать панель
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600">
            <Save className="w-4 h-4 mr-2" />
            Сохранить
          </Button>
          <Button size="sm" className="bg-slate-700 hover:bg-slate-800 text-white shadow-none">
            <Download className="w-4 h-4 mr-2" />
            Экспорт PDF
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Assets */}
        <div className="w-56 bg-slate-50 border-r border-slate-100 overflow-auto">
          <div className="p-4 space-y-6">
            {/* Background Section */}
            <div>
              <h3 className="mb-3 text-slate-900">Фон</h3>
              
              {/* Background Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {backgrounds.map((bg) => (
                  <div
                    key={bg.id}
                    className={`group relative aspect-square bg-white border-2 cursor-pointer transition-colors ${
                      selectedBackground === bg.id 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-slate-100 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedBackground(bg.id)}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-slate-300" />
                    </div>
                    
                    {/* Delete button */}
                    <button
                      className="absolute top-1 left-1 p-1 bg-white border border-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:border-red-300 z-10"
                      onClick={(e) => handleRemoveBackground(bg.id, e)}
                    >
                      <X className="w-3 h-3 text-slate-600 hover:text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Background Actions */}
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-xs border-slate-200 text-slate-600 h-8"
                >
                  <Folder className="w-3 h-3 mr-2" />
                  Выбрать из библиотеки
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-xs border-slate-200 text-slate-600 h-8"
                  onClick={handleUploadBackground}
                >
                  <Upload className="w-3 h-3 mr-2" />
                  Загрузить новый
                </Button>
              </div>
            </div>

            {/* Character Section */}
            <div>
              <h3 className="mb-3 text-slate-900">Персонаж</h3>
              
              {/* Character Selector */}
              <div className="mb-3">
                <select
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded bg-white text-slate-700 focus:outline-none focus:border-blue-500"
                  value={selectedCharacter || ''}
                  onChange={(e) => {
                    const value = e.target.value ? Number(e.target.value) : null;
                    setSelectedCharacter(value);
                    if (value === null) {
                      setSelectedPose(null);
                    }
                  }}
                >
                  <option value="">Выберите персонажа...</option>
                  {characters.map((char) => (
                    <option key={char} value={char}>
                      Персонаж {char}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pose Selection */}
              {selectedCharacter && (
                <div>
                  <div className="mb-2 text-xs text-slate-600">
                    Выбранная поза: {selectedPose ? `Поза ${selectedPose}` : 'Нет'}
                  </div>
                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                    {characterPoses.map((poseNum) => (
                      <div
                        key={poseNum}
                        className={`relative aspect-square bg-white border-2 cursor-pointer transition-colors ${
                          selectedPose === poseNum
                            ? 'border-blue-500 ring-2 ring-blue-200'
                            : 'border-slate-100 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedPose(poseNum)}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <Users className="w-6 h-6 text-slate-300 mb-1" />
                          <span className="text-xs text-slate-500">Поза {poseNum}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Text Section */}
            <div>
              <h3 className="mb-3 text-slate-900">Текст</h3>
              <textarea
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded bg-white text-slate-700 focus:outline-none focus:border-blue-500 resize-none"
                rows={4}
                placeholder="Введите текст панели..."
                value={panelText}
                onChange={(e) => setPanelText(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 bg-slate-50 overflow-auto">
          <div className="min-h-full p-8 flex items-start justify-center pt-12">
            {/* A4 aspect ratio is approximately 1:1.414 (210mm x 297mm) */}
            <div className="bg-white border border-slate-300" style={{ width: '595px', height: '842px' }}>
              {/* Comic Template Grid */}
              <div className="h-full p-4 flex flex-col gap-2">
                {/* Panel 1 - Full width */}
                <div 
                  className={`flex-1 bg-slate-50 border border-slate-800 flex items-center justify-center text-slate-400 cursor-pointer transition-all ${
                    selectedPanel === 1 ? 'ring-2 ring-blue-500 ring-inset' : 'hover:border-blue-400'
                  }`}
                  onClick={() => setSelectedPanel(1)}
                >
                  <div className="text-center">
                    <Square className="w-12 h-12 mx-auto mb-2" />
                    <p>Панель 1</p>
                  </div>
                </div>

                {/* Panels 2 & 3 - Side by side */}
                <div className="flex-1 flex gap-2">
                  <div 
                    className={`flex-1 bg-slate-50 border border-slate-800 flex items-center justify-center text-slate-400 cursor-pointer transition-all ${
                      selectedPanel === 2 ? 'ring-2 ring-blue-500 ring-inset' : 'hover:border-blue-400'
                    }`}
                    onClick={() => setSelectedPanel(2)}
                  >
                    <div className="text-center">
                      <Square className="w-12 h-12 mx-auto mb-2" />
                      <p>Панель 2</p>
                    </div>
                  </div>
                  <div 
                    className={`flex-1 bg-slate-50 border border-slate-800 flex items-center justify-center text-slate-400 cursor-pointer transition-all ${
                      selectedPanel === 3 ? 'ring-2 ring-blue-500 ring-inset' : 'hover:border-blue-400'
                    }`}
                    onClick={() => setSelectedPanel(3)}
                  >
                    <div className="text-center">
                      <Square className="w-12 h-12 mx-auto mb-2" />
                      <p>Панель 3</p>
                    </div>
                  </div>
                </div>

                {/* Panel 4 - Full width */}
                <div 
                  className={`flex-1 bg-slate-50 border border-slate-800 flex items-center justify-center text-slate-400 cursor-pointer transition-all ${
                    selectedPanel === 4 ? 'ring-2 ring-blue-500 ring-inset' : 'hover:border-blue-400'
                  }`}
                  onClick={() => setSelectedPanel(4)}
                >
                  <div className="text-center">
                    <Square className="w-12 h-12 mx-auto mb-2" />
                    <p>Панель 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Pages Preview */}
        <div className="w-56 bg-white border-l border-slate-100 overflow-auto">
          <div className="p-4 border-b border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Страницы</h3>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 w-8 p-0 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                onClick={handleAddPage}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {pages.map((page) => (
              <div 
                key={page.id}
                className={`group relative cursor-pointer rounded border-2 transition-all ${
                  currentPageId === page.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
                onClick={() => setCurrentPageId(page.id)}
              >
                {/* A4 aspect ratio preview */}
                <div className="aspect-[1/1.414] bg-white flex items-center justify-center relative">
                  <FileImage className="w-12 h-12 text-slate-300" />
                  
                  {/* Delete button */}
                  {pages.length > 1 && (
                    <button
                      className="absolute top-1 right-1 p-1 bg-white border border-slate-200 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:border-red-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePage(page.id);
                      }}
                    >
                      <Trash2 className="w-3 h-3 text-slate-600 hover:text-red-500" />
                    </button>
                  )}
                </div>
                
                <div className={`px-2 py-1 text-center border-t ${
                  currentPageId === page.id ? 'border-blue-200 bg-blue-50' : 'border-slate-100'
                }`}>
                  <span className={`text-xs ${
                    currentPageId === page.id ? 'text-blue-700' : 'text-slate-600'
                  }`}>
                    {page.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}