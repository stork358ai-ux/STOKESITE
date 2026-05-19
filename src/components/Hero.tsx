import ImageSlot from './ImageSlot'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner hero__inner--split">
        <div className="hero__copy">
          <p className="hero__eyebrow">Stork Co., Ltd. — Since 2003</p>
          <h1 className="hero__title">
            AI × Technology<br />
            <span>Innovation</span>
          </h1>
          <p className="hero__lead">
            有限会社ストークは、20年以上の実績を持つシステム開発とWEBマーケティングの専門企業です。AIコンサルティングから受託開発、業務改善提案まで、最先端テクノロジーで企業の成長を加速させます。
          </p>
          <div className="hero__actions">
            <a href="#services" className="btn btn--primary">サービスを見る</a>
            <a href="/contact" className="btn btn--ghost">お問い合わせ</a>
          </div>
        </div>
        <div className="hero__visual">
          <ImageSlot
            id="hero-main"
            alt="ヒーロー画像 / 抽象的なテクノロジー・データのビジュアル"
            ratio="4 / 5"
            src="/images/hero-main.jpg"
          />
        </div>
      </div>
    </section>
  )
}
