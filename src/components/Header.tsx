"use client"
// import { headers } from 'next/headers';  //サーバーコンポーネントのときに使用(今は使っていない)
import type { JSX } from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();  // aタグのデフォルトジャンプをキャンセル
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          closeMenu(); // メニュー閉じたいならここで呼ぶ
        }
    };

    return (
      <header className="header">
        <div className="container grid">
            {/* ロゴ */}
            <h1 className="logo col-6">
                <Image 
                    src="/MyIcon.png" 
                    alt="My Portfolio" 
                    width={55}
                    height={55}
                    className='header-logo' 
                />
                <a href="/">My Portfolio</a>
            </h1>

            {/* ハンバーガーアイコン（768px以下で表示） */}
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </div>

            {/* ナビゲーションメニュー */}
            <nav  className={`nav-menu ${isOpen ? 'active' : ''} col-6`}>
                <ul>
                    <li>
                        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>自己紹介</a>
                    </li>
                    <li>
                        <a href="#skill" onClick={(e) => handleScroll(e, 'skill')}>スキル</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>制作物一覧</a>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    );
  };
  
  export default Header;