import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { 
  Save, 
  Download, 
  FileText, 
  Users, 
  Image as ImageIcon, 
  Type, 
  ChevronLeft,
  Layers,
  Square
} from "lucide-react";

interface EditorProps {
  onNavigate: (page: string) => void;
}

export function Editor({ onNavigate }: EditorProps) {
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
            Back
          </Button>
          <div className="h-6 w-px bg-slate-200"></div>
          <span className="text-slate-700">Space Adventure - Page 1</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-slate-600">
            <FileText className="w-4 h-4 mr-2" />
            Templates
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white shadow-none">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Assets */}
        <div className="w-72 bg-slate-50 border-r border-slate-100 overflow-auto">
          <Tabs defaultValue="characters" className="w-full">
            <TabsList className="w-full grid grid-cols-3 rounded-none border-b border-slate-100 bg-transparent">
              <TabsTrigger value="characters" className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
                <Users className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="backgrounds" className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
                <ImageIcon className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="text" className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
                <Type className="w-4 h-4" />
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="characters" className="p-6 m-0">
              <h3 className="mb-4 text-slate-900">Characters</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card 
                    key={i} 
                    className="aspect-square bg-white border border-slate-100 flex items-center justify-center cursor-pointer hover:border-blue-300 transition-colors shadow-none"
                  >
                    <Users className="w-10 h-10 text-slate-300" />
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 border-slate-200 text-slate-600">
                Add Character
              </Button>
            </TabsContent>

            <TabsContent value="backgrounds" className="p-6 m-0">
              <h3 className="mb-4 text-slate-900">Backgrounds</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card 
                    key={i} 
                    className="aspect-square bg-white border border-slate-100 flex items-center justify-center cursor-pointer hover:border-blue-300 transition-colors shadow-none"
                  >
                    <ImageIcon className="w-10 h-10 text-slate-300" />
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 border-slate-200 text-slate-600">
                Upload Background
              </Button>
            </TabsContent>

            <TabsContent value="text" className="p-6 m-0">
              <h3 className="mb-4 text-slate-900">Text Elements</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-500">
                  <Type className="w-4 h-4 mr-2" />
                  Speech Bubble
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-500">
                  <Type className="w-4 h-4 mr-2" />
                  Thought Bubble
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-500">
                  <Type className="w-4 h-4 mr-2" />
                  Caption Box
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-500">
                  <Type className="w-4 h-4 mr-2" />
                  Sound Effect
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 bg-slate-50 p-12 overflow-auto flex items-center justify-center">
          <div className="bg-white border-2 border-slate-200 rounded-sm" style={{ width: '800px', height: '1000px' }}>
            {/* Comic Template Grid */}
            <div className="h-full p-6 grid grid-rows-3 gap-6">
              <Card className="border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 shadow-none">
                <div className="text-center">
                  <Square className="w-12 h-12 mx-auto mb-2" />
                  <p>Panel 1</p>
                </div>
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 shadow-none">
                  <div className="text-center">
                    <Square className="w-12 h-12 mx-auto mb-2" />
                    <p>Panel 2</p>
                  </div>
                </Card>
                <Card className="border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 shadow-none">
                  <div className="text-center">
                    <Square className="w-12 h-12 mx-auto mb-2" />
                    <p>Panel 3</p>
                  </div>
                </Card>
              </div>
              <Card className="border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 shadow-none">
                <div className="text-center">
                  <Square className="w-12 h-12 mx-auto mb-2" />
                  <p>Panel 4</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className="w-80 bg-white border-l border-slate-100 overflow-auto p-6">
          <h3 className="mb-6 text-slate-900">Properties</h3>
          
          <div className="space-y-6">
            <div>
              <Label className="mb-3 block text-slate-700">Layer Name</Label>
              <Input placeholder="Element name" defaultValue="Panel 1" className="border-slate-200" />
            </div>

            <div>
              <Label className="mb-3 block text-slate-700">Position X</Label>
              <Input type="number" defaultValue="0" className="border-slate-200" />
            </div>

            <div>
              <Label className="mb-3 block text-slate-700">Position Y</Label>
              <Input type="number" defaultValue="0" className="border-slate-200" />
            </div>

            <div>
              <Label className="mb-3 block text-slate-700">Width</Label>
              <Input type="number" defaultValue="100" className="border-slate-200" />
            </div>

            <div>
              <Label className="mb-3 block text-slate-700">Height</Label>
              <Input type="number" defaultValue="100" className="border-slate-200" />
            </div>

            <div>
              <Label className="mb-3 block text-slate-700">Rotation</Label>
              <Slider defaultValue={[0]} max={360} step={1} className="mb-3" />
              <Input type="number" defaultValue="0" className="border-slate-200" />
            </div>

            <div>
              <Label className="mb-3 block text-slate-700">Opacity</Label>
              <Slider defaultValue={[100]} max={100} step={1} className="mb-3" />
              <Input type="number" defaultValue="100" className="border-slate-200" />
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Button variant="outline" className="w-full border-slate-200 text-slate-600">
                <Layers className="w-4 h-4 mr-2" />
                Duplicate
              </Button>
              <Button variant="outline" className="w-full border-red-200 text-red-500 hover:bg-red-50">
                Delete Element
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
