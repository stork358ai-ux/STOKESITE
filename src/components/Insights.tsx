import ImageSlot from './ImageSlot'

const posts = [
  {
    id: 'genai-enterprise',
    slot: 'insight-1',
    category: 'Insight',
    date: '2026.03.18',
    title: '生成AIを企業導入する際の3つの落とし穴',
    excerpt: 'PoC止まりにしない、ROIを最大化する組織設計と評価指標について解説します。',
    alt: '生成AI/ビジネス活用を象徴するサムネイル',
  },
  {
    id: 'rag-architecture',
    slot: 'insight-2',
    category: 'Tech',
    date: '2026.02.27',
    title: '社内ナレッジ × RAG: 失敗しないアーキテクチャ',
    excerpt: 'ベクトル検索の選定、ハイブリッド検索、評価ベンチの作り方まで実装視点で。',
    alt: 'RAG/ベクトル検索/ナレッジを象徴するサムネイル',
  },
  {
    id: 'crm-case',
    slot: 'insight-3',
    category: 'Case Study',
    date: '2026.02.05',
    title: '飲食チェーン向けCRM刷新で売上 +18%',
    excerpt: 'セグメント自動分類とクーポン最適化により、再来店率が大きく改善した事例。',
    alt: '小売/飲食店舗を象徴するサムネイル',
  },
  {
    id: 'mlops',
    slot: 'insight-4',
    category: 'Tech',
    date: '2026.01.20',
    title: 'MLOps 入門: 運用で詰まらないための10の指標',
    excerpt: 'モデル監視、データドリフト検知、再学習パイプラインの設計指針をまとめました。',
    alt: 'MLOps/モニタリング/データを象徴するサムネイル',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="section">
      <div className="section__inner">
        <header className="section__header section__header--row">
          <div>
            <p className="section__eyebrow">Insights</p>
            <h2 className="section__title">最新の知見と事例</h2>
          </div>
          <a href="#" className="link-cta">すべて見る<span aria-hidden>→</span></a>
        </header>
        <ul className="insight-grid">
          {posts.map((p) => (
            <li key={p.id} className="insight">
              <a href="#" className="insight__link">
                <div className="insight__thumb">
                  <ImageSlot id={p.slot} alt={p.alt} ratio="16 / 9" />
                </div>
                <div className="insight__body">
                  <div className="insight__meta">
                    <span className="insight__category">{p.category}</span>
                    <span className="insight__date">{p.date}</span>
                  </div>
                  <h3 className="insight__title">{p.title}</h3>
                  <p className="insight__excerpt">{p.excerpt}</p>
                  <span className="insight__cta">続きを読む<span aria-hidden>→</span></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
