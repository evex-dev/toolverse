import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-900 to-indigo-900">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm"></div>
        <div className="container relative mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">ウェブツールの共有プラットフォーム</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50/90">最新のウェブツールを発見したり、あなたの作ったツールを共有しましょう。開発者のためのオープンなコミュニティです。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/discover" className="bg-blue-500/70 hover:bg-blue-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-lg transition-all border border-white/10 shadow-lg shadow-blue-500/20">
                ツールを探す
              </Link>
              <Link href="/submit" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl text-lg transition-all backdrop-blur-sm">
                ツールを投稿
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">注目のツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">ツール名</h3>
                  <p className="text-blue-50/80 mb-4">このツールの簡単な説明がここに表示されます。</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="bg-blue-500/30 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-blue-300/20">カテゴリー</span>
                    </div>
                    <Link href={`/tool/${item}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/discover" className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 text-white hover:bg-white/20 transition-all">
              すべてのツールを見る →
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">カテゴリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['開発', 'デザイン', 'マーケティング', 'プロダクティビティ', 'SEO', 'AI'].map((category) => (
              <Link 
                key={category} 
                href={`/category/${category}`}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-white/20"
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-400/40 to-indigo-400/40 rounded-full mx-auto mb-3 backdrop-blur-sm border border-white/20"></div>
                <h3 className="font-medium text-white">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
