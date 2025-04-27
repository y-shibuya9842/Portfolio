// import { headers } from 'next/headers';  //サーバーコンポーネントのときに使用(今は使っていない)
import Link from 'next/link';
import Image from 'next/image';
import "./header.css"

const Header = () => {
    return (
      <header className="header">
        <div className="container">
            {/* ロゴ */}
            <h1 className="logo">
                <Image 
                    src="/Logo.png" 
                    alt="My Portfolio" 
                    width={80}
                    height={80}
                    className='header-logo' 
                />
                <Link href="/" >My Portfolio</Link>
            </h1>

            {/* ナビゲーションメニュー */}
            <nav>
                <ul className="nav-menu">
                    <li>
                        <Link href="#about">自己紹介</Link>
                    </li>
                    <li>
                        <Link href="#skill">スキル</Link>
                    </li>
                    <li>
                        <Link href="#projects">制作物一覧</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    );
  };
  
  export default Header;