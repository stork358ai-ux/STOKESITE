import ImageSlot from './ImageSlot'

const steps = [
  { n: '01', title: 'ヒアリング', desc: '事業課題・KPIを徹底的に把握し、AI/システム化の余地を可視化します。' },
  { n: '02', title: '構想・要件定義', desc: 'ROI試算、データ実現性検証(PoC前評価)、機能要件と非機能要件を策定。' },
  { n: '03', title: 'PoC / プロトタイプ', desc: '4〜8週間で精度・効果を検証。GO/NOGO判定の判断材料を提供します。' },
  { n: '04', title: '本開発', desc: 'アジャイル開発で2週間スプリント。継続的にデモを行い手戻りを防止。' },
  { n: '05', title: 'デプロイ・運用', desc: 'クラウド/オンプレ問わず安定運用。MLOps・監視体制を整備。' },
  { n: '06', title: '改善・拡張', desc: 'モデル再学習、機能追加、横展開。事業成長に合わせて伴走します。' },
]

export default function Process() {
  return (
    <section id="process" className="section section--accent">
      <div className="section__inner">
        <header className="section__header">
          <p className="section__eyebrow">Process</p>
          <h2 className="section__title">導入プロセス</h2>
          <p className="section__lead">
            初回ヒアリングから本番運用、改善まで一貫した6ステップ。短期PoCで実現性を担保しながら、確実にビジネス価値へ繋げます。
          </p>
        </header>
        <div className="process-visual">
          <ImageSlot
            id="process-visual"
            alt="プロジェクトの進行を象徴するチームコラボレーション/ホワイトボードのワイドビジュアル"
            ratio="21 / 9"
          />
        </div>
        <ol className="process-list">
          {steps.map((s) => (
            <li key={s.n} className="process-item">
              <span className="process-item__num">{s.n}</span>
              <h3 className="process-item__title">{s.title}</h3>
              <p className="process-item__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
