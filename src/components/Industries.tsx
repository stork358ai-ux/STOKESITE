import ImageSlot from './ImageSlot'

const industries = [
  { id: 'finance', name: '金融・保険', desc: 'リスク予測、不正検知、与信スコアリング、顧客行動分析。', tag: 'Banking & Insurance' },
  { id: 'retail', name: '小売・EC', desc: '需要予測、在庫最適化、レコメンドエンジン、CRM統合。', tag: 'Retail & Commerce' },
  { id: 'manufacturing', name: '製造業', desc: '予知保全、品質検査AI、生産ライン最適化、IoT連携。', tag: 'Manufacturing' },
  { id: 'healthcare', name: 'ヘルスケア', desc: '画像診断支援、電子カルテ解析、業務RPA、創薬支援。', tag: 'Healthcare' },
  { id: 'logistics', name: '物流・運輸', desc: '配送ルート最適化、需要予測、倉庫自動化、ドライバー支援。', tag: 'Logistics' },
  { id: 'education', name: '教育・人材', desc: '適応学習、スキル診断、マッチング、教育コンテンツ自動生成。', tag: 'Education & HR' },
]

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="section__inner">
        <header className="section__header">
          <p className="section__eyebrow">Industries</p>
          <h2 className="section__title">業界別ソリューション</h2>
          <p className="section__lead">
            業界特有の課題に対し、ストークは20年以上の実績と最新のAI技術で最適解を提供します。金融からヘルスケア、製造から教育まで、幅広い領域でDXを推進します。
          </p>
        </header>
        <div className="industries-banner">
          <ImageSlot
            id="industries-banner"
            alt="さまざまな業界(金融/小売/製造/ヘルスケア/物流/教育)を象徴するワイドビジュアル"
            ratio="21 / 9"
          />
        </div>
        <ul className="industry-list">
          {industries.map((it, i) => (
            <li key={it.id} className="industry-item">
              <span className="industry-item__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="industry-item__body">
                <p className="industry-item__tag">{it.tag}</p>
                <h3 className="industry-item__name">{it.name}</h3>
                <p className="industry-item__desc">{it.desc}</p>
              </div>
              <span className="industry-item__arrow">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
