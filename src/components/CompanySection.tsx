import ImageSlot from './ImageSlot'

export default function CompanySection() {
  return (
    <section id="company" className="section">
      <div className="section__inner section__inner--narrow">
        <header className="section__header">
          <p className="section__eyebrow">Company</p>
          <h2 className="section__title">会社概要</h2>
        </header>
        <div className="company-visual">
          <ImageSlot
            id="company-office"
            alt="ストーク本社オフィス(高田馬場)外観もしくは内観"
            ratio="16 / 7"
            src="/images/company-office.jpg"
          />
        </div>
        <table className="info-table">
          <tbody>
            <tr>
              <th>社名</th>
              <td>有限会社ストーク</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                〒169-0075<br />
                東京都新宿区高田馬場1丁目27-1<br />
                ファインテックビル5階
              </td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>藤原 憲市</td>
            </tr>
            <tr>
              <th>代表電話</th>
              <td>03-5928-9115</td>
            </tr>
            <tr>
              <th>事業概要</th>
              <td>
                <ol>
                  <li>AIコンサルティング・受託開発・業務改善提案</li>
                  <li>インターネットにおけるサーバーの構築、運用、管理、賃貸業務</li>
                  <li>電気通信事業法に基づく電気通信事業</li>
                  <li>ネットワークシステムを利用したショッピングサイトの構築、企画、運営</li>
                  <li>ソフトウェアの開発、販売</li>
                  <li>インターネットを利用した各種情報提供サービス</li>
                  <li>インターネットを利用した通信販売業務並びにその取次ぎ</li>
                  <li>人材派遣業</li>
                  <li>上記に関するコンサルティング業務</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th>サービス内容</th>
              <td>
                <ol>
                  <li>AIコンサルティング・AI受託開発</li>
                  <li>AIを活用した業務改善提案</li>
                  <li>WEBマーケティング</li>
                  <li>システム開発事業</li>
                  <li>ホスティングサービス</li>
                  <li>各種店舗向けCRMの開発・販売</li>
                  <li>各種店舗向けホームページ作成</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
