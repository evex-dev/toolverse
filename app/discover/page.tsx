import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DiscoverPage() {
  // 仮のツールデータ
  const tools = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `ツール名 ${i + 1}`,
    description: "このツールの簡単な説明がここに表示されます。ユーザーにとって有益な情報を提供します。",
    category: ["開発", "デザイン", "AI", "プロダクティビティ", "マーケティング", "SEO"][i % 6],
  }));

  // 仮のカテゴリーリスト
  const categories = ['すべて', '開発', 'デザイン', 'マーケティング', 'プロダクティビティ', 'SEO', 'AI'];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-900 to-indigo-900">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 bg-blue-800/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">ツールを探す</h1>
          <p className="text-xl text-blue-50/90 max-w-2xl mx-auto">
            様々なカテゴリーから便利なウェブツールを見つけましょう。自分のニーズに合ったツールを探索できます。
          </p>
        </div>
      </section>
      
      {/* Filters and Search */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Input */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="ツールを検索..." 
                    className="w-full py-3 px-4 pr-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <div className="absolute right-3 top-3 text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm ${
                      category === 'すべて' 
                        ? 'bg-blue-500/70 text-white' 
                        : 'bg-white/10 text-white/90 hover:bg-white/20'
                    } border border-white/20 transition-all`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">{tool.name}</h3>
                  <p className="text-blue-50/80 mb-4 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="bg-blue-500/30 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-blue-300/20">{tool.category}</span>
                    </div>
                    <Link href={`/tool/${tool.id}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all">
                前のページ
              </button>
              <button className="bg-blue-500/70 text-white px-4 py-2 rounded-lg border border-white/20 transition-all">
                1
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all">
                2
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all">
                3
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all">
                次のページ
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
