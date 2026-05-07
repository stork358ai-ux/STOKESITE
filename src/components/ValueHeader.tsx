import ImageSlot from './ImageSlot'

export default function ValueHeader() {
  return (
    <section id="ai" className="value-header">
      <div className="value-header__inner">
        <div className="value-header__lead">
          <p className="section__eyebrow">A Message from Stork</p>
          <h2 className="value-header__title">
            事業課題から逆算した<br />
            実装で、成果に責任を持つ。
          </h2>
        </div>

        <div className="value-header__portrait">
          <ImageSlot
            id="ceo-portrait"
            alt="代表 藤原憲市のポートレート(暗背景・モノクロ調)"
            ratio="16 / 9"
            className="img-slot--dark"
          />
        </div>

        <div className="value-header__body">
          <p className="value-header__quote">
            「派手な技術トレンドに振り回されず、現場で動き続けるシステムを作る」<br />
            これがストークが2003年から守り続けてきた一貫した姿勢です。AIブームの今だからこそ、地に足のついた実装力と運用力で、お客様の事業を支えます。
          </p>

          <dl className="value-header__pillars">
            <div className="pillar">
              <dt className="pillar__label">Strategy</dt>
              <dd className="pillar__title">事業価値から逆算する設計</dd>
              <dd className="pillar__desc">技術ありきではなく、KPIとROIから逆算。AI/非AIの判断、内製/外注の境界設計まで含めて支援します。</dd>
            </div>
            <div className="pillar">
              <dt className="pillar__label">Engineering</dt>
              <dd className="pillar__title">運用に耐える実装</dd>
              <dd className="pillar__desc">PoC止まりにしない、本番運用・SLA・MLOpsまで考慮した実装。OSS活用でTCOを抑えます。</dd>
            </div>
            <div className="pillar">
              <dt className="pillar__label">Partnership</dt>
              <dd className="pillar__title">長期で伴走する</dd>
              <dd className="pillar__desc">納品して終わりではなく、3年5年と続く改善サイクル。事業の変化に合わせて柔軟に拡張します。</dd>
            </div>
          </dl>
        </div>

        <ul className="value-header__metrics">
          <li>
            <span className="metric__num">23<small>年</small></span>
            <span className="metric__label">創業からの事業継続</span>
          </li>
          <li>
            <span className="metric__num">540<small>+</small></span>
            <span className="metric__label">累計プロジェクト</span>
          </li>
          <li>
            <span className="metric__num">94<small>%</small></span>
            <span className="metric__label">継続契約率</span>
          </li>
          <li>
            <span className="metric__num">38<small>社</small></span>
            <span className="metric__label">上場企業の支援実績</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
