import Link from 'next/link'
import ImageSlot from './ImageSlot'

export default function MixedMedia() {
  return (
    <section className="cta-band">
      <div className="cta-band__inner cta-band__inner--media">
        <div className="cta-band__media">
          <ImageSlot
            id="about-team"
            alt="ストークのチーム/オフィスの様子(About用ビジュアル)"
            ratio="4 / 3"
          />
        </div>
        <div className="cta-band__copy">
          <p className="section__eyebrow">About Us</p>
          <h2 className="section__title">確かな実績と、新しい挑戦で未来を創る</h2>
          <p className="section__lead">
            有限会社ストークは、セールスサポートの総合サービスを基盤に、AIテクノロジーを融合した新しい価値を提供します。20年以上にわたり培った経験と最先端技術で、お客様のビジネスを次のステージへ導きます。
          </p>
          <div className="cta-band__actions">
            <Link href="/contact" className="btn btn--primary">お問い合わせ</Link>
            <Link href="/#services" className="btn btn--ghost">サービス一覧</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
