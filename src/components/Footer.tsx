import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__title">AI × テクノロジーで変革を</p>
        </div>
        <div className="site-footer__cols">
          <div>
            <p className="site-footer__heading">Services</p>
            <ul>
              <li><Link href="/services/ai-consulting">AIコンサルティング</Link></li>
              <li><Link href="/services/ai-development">AI受託開発</Link></li>
              <li><Link href="/services/ai-improvement">AI業務改善提案</Link></li>
              <li><Link href="/services/system-development">システム開発</Link></li>
              <li><Link href="/services/web-marketing">WEBマーケティング</Link></li>
              <li><Link href="/services/crm-hosting">CRM & ホスティング</Link></li>
            </ul>
          </div>
          <div>
            <p className="site-footer__heading">Company</p>
            <ul>
              <li><Link href="/#industries">業界別ソリューション</Link></li>
              <li><Link href="/#process">導入プロセス</Link></li>
              <li><Link href="/#insights">インサイト</Link></li>
              <li><Link href="/#news">お知らせ</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#company">会社概要</Link></li>
            </ul>
          </div>
          <div>
            <p className="site-footer__heading">Contact</p>
            <ul>
              <li><a href="tel:03-5928-9115">TEL: 03-5928-9115</a></li>
              <li>東京都新宿区高田馬場1-27-1</li>
              <li>ファインテックビル5階</li>
            </ul>
          </div>
        </div>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Stork Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
