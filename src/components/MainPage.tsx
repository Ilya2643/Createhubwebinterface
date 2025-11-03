import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Palette, Edit3, FileText, Download } from "lucide-react";

interface MainPageProps {
  onNavigate: (page: string) => void;
}

export function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-slate-900">CreateHub</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-slate-600" onClick={() => onNavigate('account')}>Login</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-none">Register</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl mb-6">Create Comics with AI</h1>
          <p className="text-xl mb-10 text-blue-50 max-w-2xl mx-auto">
            Transform your ideas into stunning comic books using AI-powered tools
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 shadow-none px-8 py-6 text-lg"
            onClick={() => onNavigate('account')}
          >
            Start Creating
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl text-center mb-16 text-slate-900">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-8 border border-slate-100 shadow-none hover:border-blue-200 transition-colors bg-white">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Characters AI</h3>
            <p className="text-slate-500 leading-relaxed">
              Generate unique characters from descriptions or images using advanced AI
            </p>
          </Card>

          <Card className="p-8 border border-slate-100 shadow-none hover:border-blue-200 transition-colors bg-white">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Edit3 className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Editor</h3>
            <p className="text-slate-500 leading-relaxed">
              Powerful drag-and-drop editor with intuitive controls and layouts
            </p>
          </Card>

          <Card className="p-8 border border-slate-100 shadow-none hover:border-blue-200 transition-colors bg-white">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Templates</h3>
            <p className="text-slate-500 leading-relaxed">
              Start with professional templates and customize to your vision
            </p>
          </Card>

          <Card className="p-8 border border-slate-100 shadow-none hover:border-blue-200 transition-colors bg-white">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Download className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl mb-3 text-slate-900">Export PDF</h3>
            <p className="text-slate-500 leading-relaxed">
              Export your comics in high-quality PDF format for print or digital
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 mt-24">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl text-slate-900">CreateHub</span>
              </div>
              <p className="text-slate-500">AI-powered comic creation platform</p>
            </div>
            <div>
              <h4 className="mb-4 text-slate-900">Product</h4>
              <div className="flex flex-col gap-3 text-slate-500">
                <a href="#" className="hover:text-blue-500 transition-colors">Features</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Pricing</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Templates</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-slate-900">Company</h4>
              <div className="flex flex-col gap-3 text-slate-500">
                <a href="#" className="hover:text-blue-500 transition-colors">About</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Blog</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-slate-900">Support</h4>
              <div className="flex flex-col gap-3 text-slate-500">
                <a href="#" className="hover:text-blue-500 transition-colors">Help Center</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
