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
              Back
            </Button>
            <h1 className="text-2xl text-slate-900">AI Character Generation</h1>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-none">
            <Save className="w-4 h-4 mr-2" />
            Save to Library
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Input */}
        <div className="w-96 bg-slate-50 border-r border-slate-100 overflow-auto">
          <div className="p-8">
            <h2 className="text-2xl mb-8 text-slate-900">Generate Character</h2>
            
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="w-full grid grid-cols-2 bg-white border border-slate-200">
                <TabsTrigger value="text">Text Description</TabsTrigger>
                <TabsTrigger value="image">Upload Image</TabsTrigger>
              </TabsList>
              
              <TabsContent value="text" className="space-y-6 mt-8">
                <div>
                  <Label className="mb-3 block text-slate-700">Character Description</Label>
                  <Textarea 
                    placeholder="Describe your character... (e.g., A brave superhero with blue cape and mask, muscular build, confident pose)"
                    className="min-h-32 border-slate-200"
                  />
                </div>

                <div>
                  <Label className="mb-3 block text-slate-700">Number of Poses</Label>
                  <Input type="number" defaultValue="10" min="1" max="10" className="border-slate-200" />
                  <p className="text-xs text-slate-500 mt-2">Demo version: Maximum 10 poses</p>
                </div>
              </TabsContent>

              <TabsContent value="image" className="space-y-6 mt-8">
                <div>
                  <Label className="mb-3 block text-slate-700">Upload Reference Image</Label>
                  <Card className="border-2 border-dashed border-slate-200 p-12 text-center cursor-pointer hover:border-blue-300 transition-colors bg-white shadow-none">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                    <p className="text-slate-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-slate-400">PNG, JPG up to 10MB</p>
                  </Card>
                </div>

                <div>
                  <Label className="mb-3 block text-slate-700">Additional Modifications</Label>
                  <Textarea 
                    placeholder="Add costume, change colors, add accessories, etc."
                    className="min-h-24 border-slate-200"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <Button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white shadow-none py-6">
              <Wand2 className="w-5 h-5 mr-2" />
              Generate Character Poses
            </Button>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-sm mb-3 text-blue-900">Tips for Better Results</h3>
              <ul className="text-sm text-blue-700 space-y-2 leading-relaxed">
                <li>• Be specific about appearance details</li>
                <li>• Include desired poses and expressions</li>
                <li>• Mention clothing and accessories</li>
                <li>• Describe the character's personality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview Grid */}
        <div className="flex-1 overflow-auto bg-white">
          <div className="p-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl mb-2 text-slate-900">Generated Poses</h2>
                <p className="text-slate-500">Click on a pose to select and use in your comic</p>
              </div>
              <Button variant="outline" className="border-slate-200 text-slate-600">
                <Wand2 className="w-4 h-4 mr-2" />
                Regenerate
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
                    <p className="text-xs text-slate-500">Pose {i}</p>
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