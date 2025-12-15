import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FolderOpen, Users, Settings, Plus, MoreVertical, Palette } from "lucide-react";

interface PersonalAccountProps {
  onNavigate: (page: string) => void;
}

export function PersonalAccount({ onNavigate }: PersonalAccountProps) {
  const projects = [
    { id: 1, name: "Космическое приключение", pages: 12, updated: "2 часа назад" },
    { id: 2, name: "Детективная история", pages: 8, updated: "1 день назад" },
    { id: 3, name: "Фэнтези квест", pages: 15, updated: "3 дня назад" },
    { id: 4, name: "Хроники супергероя", pages: 20, updated: "1 неделю назад" },
  ];

  const characters = [
    { id: 1, name: "Герой" },
    { id: 2, name: "Злодей" },
    { id: 3, name: "Помощник" },
    { id: 4, name: "Наставник" },
    { id: 5, name: "Детектив" },
    { id: 6, name: "Инопланетянин" },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-72 bg-slate-50 border-r border-slate-100 flex flex-col">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-slate-900">CreateHub</span>
          </div>
        </div>
        <nav className="flex-1 p-6">
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-xl bg-blue-500 text-white mb-2">
            <FolderOpen className="w-5 h-5" />
            Проекты
          </button>
          <button 
            className="w-full flex items-center gap-3 px-5 py-4 rounded-xl text-slate-600 hover:bg-white hover:text-blue-500 transition-colors mb-2"
            onClick={() => onNavigate('characters')}
          >
            <Users className="w-5 h-5" />
            Персонажи
          </button>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-xl text-slate-600 hover:bg-white hover:text-blue-500 transition-colors">
            <Settings className="w-5 h-5" />
            Настройки
          </button>
        </nav>
        <div className="p-6 border-t border-slate-100">
          <Button 
            variant="ghost" 
            className="w-full text-slate-600"
            onClick={() => onNavigate('main')}
          >
            Выход
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl mb-2 text-slate-900">Мои проекты</h1>
              <p className="text-slate-500 text-lg">Создавайте и управляйте своими проектами комиксов</p>
            </div>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-none px-6 py-6"
              onClick={() => onNavigate('editor')}
            >
              <Plus className="w-5 h-5 mr-2" />
              Новый проект
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden border border-slate-100 shadow-none hover:border-blue-200 transition-colors cursor-pointer bg-white"
                onClick={() => onNavigate('editor')}
              >
                <div className="h-48 bg-slate-50 flex items-center justify-center border-b border-slate-100">
                  <FolderOpen className="w-16 h-16 text-slate-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg text-slate-900">{project.name}</h3>
                    <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                  <div className="text-sm text-slate-500 space-y-1">
                    <p>{project.pages} страниц</p>
                    <p>Обновлено {project.updated}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* My Characters Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl text-slate-900">Мои персонажи</h2>
              <Button 
                variant="ghost"
                className="text-blue-500"
                onClick={() => onNavigate('characters')}
              >
                Показать все
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {characters.map((character) => (
                <Card key={character.id} className="overflow-hidden border border-slate-100 shadow-none hover:border-blue-200 transition-colors cursor-pointer bg-white">
                  <div className="aspect-square bg-slate-50 flex items-center justify-center border-b border-slate-100">
                    <Users className="w-12 h-12 text-slate-300" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-slate-700">{character.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}