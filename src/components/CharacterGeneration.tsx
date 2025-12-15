import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronLeft, Upload, Wand2, Users, Save } from "lucide-react";

interface CharacterGenerationProps {
  onNavigate: (page: string) => void;
}

export function CharacterGeneration({ onNavigate }: CharacterGenerationProps) {
  // Mock character poses - limited to 10 variations
  const variations = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost"
              className="text-slate-600"
              onClick={() => onNavigate('account')}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Назад
            </Button>
            <h1 className="text-2xl text-slate-900">ИИ генерация персонажей</h1>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-none">
            <Save className="w-4 h-4 mr-2" />
            Сохранить в библиотеку
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Input */}
        <div className="w-96 bg-slate-50 border-r border-slate-100 overflow-auto">
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="w-full grid grid-cols-2 bg-transparent border-b border-slate-200 rounded-none">
              <TabsTrigger 
                value="generate" 
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Генерировать персонажа
              </TabsTrigger>
              <TabsTrigger 
                value="new-pose" 
                className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Новая поза
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="m-0">
              <div className="p-8">
                <h2 className="text-2xl mb-8 text-slate-900">Генерировать персонажа</h2>
                
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 bg-white border border-slate-200">
                    <TabsTrigger value="text">Текстовое описание</TabsTrigger>
                    <TabsTrigger value="image">Загрузить изображение</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="text" className="space-y-6 mt-8">
                    <div>
                      <Label className="mb-3 block text-slate-700">Описание персонажа</Label>
                      <Textarea 
                        placeholder="Опишите вашего персонажа... (например, Храбрый супергерой в синем плаще и маске, мускулистого телосложения, уверенная поза)"
                        className="min-h-32 border-slate-200"
                      />
                    </div>

                    <div>
                      <Label className="mb-3 block text-slate-700">Количество поз</Label>
                      <Input type="number" defaultValue="10" min="1" max="10" className="border-slate-200" />
                      <p className="text-xs text-slate-500 mt-2">Демо версия: Максимум 10 поз</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="space-y-6 mt-8">
                    <div>
                      <Label className="mb-3 block text-slate-700">Загрузить референсное изображение</Label>
                      <Card className="border-2 border-dashed border-slate-200 p-12 text-center cursor-pointer hover:border-blue-300 transition-colors bg-white shadow-none">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                        <p className="text-slate-600 mb-1">Кликните для загрузки или перетащите файл</p>
                        <p className="text-sm text-slate-400">PNG, JPG до 10МБ</p>
                      </Card>
                    </div>

                    <div>
                      <Label className="mb-3 block text-slate-700">Дополнительные модификации</Label>
                      <Textarea 
                        placeholder="Добавить костюм, изменить цвета, добавить аксессуары и т.д."
                        className="min-h-24 border-slate-200"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <Button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white shadow-none py-6">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Генерировать позы персонажа
                </Button>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="text-sm mb-3 text-blue-900">Советы для лучших результатов</h3>
                  <ul className="text-sm text-blue-700 space-y-2 leading-relaxed">
                    <li>• Будьте конкретны в деталях внешности</li>
                    <li>• Укажите желаемые позы и выражения</li>
                    <li>• Опишите одежду и аксессуары</li>
                    <li>• Опишите личность персонажа</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="new-pose" className="m-0">
              <div className="p-8">
                <h2 className="text-2xl mb-8 text-slate-900">Добавить новую позу</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-700">
                      Описание персонажа и референсное изображение уже сохранены для этого персонажа
                    </p>
                  </div>

                  <div>
                    <Label className="mb-3 block text-slate-700">Описание позы</Label>
                    <Textarea 
                      placeholder="Опишите новую позу... (например, Бег на полной скорости, активные движения рук, решительное выражение, динамичная поза действия)"
                      className="min-h-32 border-slate-200"
                    />
                  </div>
                </div>

                <Button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white shadow-none py-6">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Генерировать новую позу
                </Button>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="text-sm mb-3 text-blue-900">Советы для новых поз</h3>
                  <ul className="text-sm text-blue-700 space-y-2 leading-relaxed">
                    <li>• Внешность персонажа уже определена</li>
                    <li>• Сосредоточьтесь на описании действия или позы</li>
                    <li>• Укажите выражение лица и эмоции</li>
                    <li>• Упомяните конкретные позиции тела</li>
                    <li>• Новая поза будет соответствовать стилю персонажа</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Panel - Preview Grid */}
        <div className="flex-1 overflow-auto bg-white">
          <div className="p-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl mb-2 text-slate-900">Сгенерированные позы</h2>
                <p className="text-slate-500">Кликните на позу, чтобы выбрать и использовать в комиксе</p>
              </div>
              <Button variant="outline" className="border-slate-200 text-slate-600">
                <Wand2 className="w-4 h-4 mr-2" />
                Перегенерировать
              </Button>
            </div>

            {/* Character Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {variations.map((i) => (
                <Card 
                  key={i} 
                  className="overflow-hidden cursor-pointer border border-slate-100 hover:border-blue-300 transition-colors shadow-none bg-white"
                >
                  <div className="aspect-square bg-slate-50 flex items-center justify-center border-b border-slate-100">
                    <Users className="w-14 h-14 text-slate-300" />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <p className="text-xs text-slate-500">Поза {i}</p>
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