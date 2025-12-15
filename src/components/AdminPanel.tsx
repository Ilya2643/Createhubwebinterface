import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { 
  LayoutTemplate, 
  Image as ImageIcon, 
  Users, 
  BarChart3, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Search,
  Palette
} from "lucide-react";

interface AdminPanelProps {
  onNavigate: (page: string) => void;
}

export function AdminPanel({ onNavigate }: AdminPanelProps) {
  const templates = [
    { id: 1, name: "Классика 4 панели", category: "Стандарт", usage: 1250 },
    { id: 2, name: "Манга стиль", category: "Манга", usage: 890 },
    { id: 3, name: "Героический разворот", category: "Экшн", usage: 2100 },
    { id: 4, name: "Много диалога", category: "История", usage: 670 },
    { id: 5, name: "Боевая сцена", category: "Экшн", usage: 1420 },
  ];

  const users = [
    { id: 1, name: "Иван Петров", email: "ivan@example.com", projects: 5, joined: "15.01.2024" },
    { id: 2, name: "Мария Иванова", email: "maria@example.com", projects: 12, joined: "20.02.2024" },
    { id: 3, name: "Алексей Сидоров", email: "alexey@example.com", projects: 3, joined: "10.03.2024" },
    { id: 4, name: "Елена Смирнова", email: "elena@example.com", projects: 8, joined: "05.04.2024" },
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
            <span className="text-xl text-slate-900">Админ панель</span>
          </div>
        </div>
        <nav className="flex-1 p-6">
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-xl text-slate-600 hover:bg-white hover:text-blue-500 transition-colors mb-2">
            <BarChart3 className="w-5 h-5" />
            Панель управления
          </button>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-xl bg-blue-500 text-white mb-2">
            <LayoutTemplate className="w-5 h-5" />
            Шаблоны
          </button>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-xl text-slate-600 hover:bg-white hover:text-blue-500 transition-colors mb-2">
            <ImageIcon className="w-5 h-5" />
            Фоны
          </button>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-xl text-slate-600 hover:bg-white hover:text-blue-500 transition-colors mb-2">
            <Users className="w-5 h-5" />
            Пользователи
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
            Выйти из админки
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white">
        <div className="p-10">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 border border-slate-100 shadow-none bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-500">Всего пользоват��лей</span>
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl mb-2 text-slate-900">2,547</div>
              <div className="text-sm text-green-600">+12% за прошлый месяц</div>
            </Card>

            <Card className="p-6 border border-slate-100 shadow-none bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-500">Шаблоны</span>
                <LayoutTemplate className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl mb-2 text-slate-900">156</div>
              <div className="text-sm text-green-600">+8 новых на этой неделе</div>
            </Card>

            <Card className="p-6 border border-slate-100 shadow-none bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-500">Создано проектов</span>
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl mb-2 text-slate-900">8,921</div>
              <div className="text-sm text-green-600">+24% за прошлый месяц</div>
            </Card>

            <Card className="p-6 border border-slate-100 shadow-none bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-500">Фоны</span>
                <ImageIcon className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl mb-2 text-slate-900">432</div>
              <div className="text-sm text-green-600">+15 новых на этой неделе</div>
            </Card>
          </div>

          {/* Templates Management */}
          <Card className="mb-8 border border-slate-100 shadow-none bg-white">
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Шаблоны комиксов</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input placeholder="Поиск шаблонов..." className="pl-10 w-64 border-slate-200" />
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-none">
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить шаблон
                  </Button>
                </div>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100">
                  <TableHead className="text-slate-600">Название</TableHead>
                  <TableHead className="text-slate-600">Категория</TableHead>
                  <TableHead className="text-slate-600">Количество использований</TableHead>
                  <TableHead className="text-right text-slate-600">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.map((template) => (
                  <TableRow key={template.id} className="border-slate-100">
                    <TableCell className="text-slate-900">{template.name}</TableCell>
                    <TableCell className="text-slate-600">{template.category}</TableCell>
                    <TableCell className="text-slate-600">{template.usage.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 hover:bg-blue-50">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Users Management */}
          <Card className="border border-slate-100 shadow-none bg-white">
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Управление пользователями</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input placeholder="Поиск пользователей..." className="pl-10 w-64 border-slate-200" />
                  </div>
                  <Button variant="outline" className="border-slate-200 text-slate-600">
                    Экспорт данных
                  </Button>
                </div>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-100">
                  <TableHead className="text-slate-600">Имя</TableHead>
                  <TableHead className="text-slate-600">Email</TableHead>
                  <TableHead className="text-slate-600">Проекты</TableHead>
                  <TableHead className="text-slate-600">Дата регистрации</TableHead>
                  <TableHead className="text-right text-slate-600">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="border-slate-100">
                    <TableCell className="text-slate-900">{user.name}</TableCell>
                    <TableCell className="text-slate-600">{user.email}</TableCell>
                    <TableCell className="text-slate-600">{user.projects}</TableCell>
                    <TableCell className="text-slate-600">{user.joined}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 hover:bg-blue-50">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}