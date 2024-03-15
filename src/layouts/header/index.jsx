import './style.css'
import React from 'react'
import Logo from '../../assets/image/logo_vinh.png'
import Navbar from '../../components/nav'

export default function Header({name, slogan, phone, hotline}) {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img alt="" src={Logo} />
                    <div className="title">
                        <div className="name">{name}</div>
                        <div className="desc">{slogan}</div>
                    </div>
                </div>
                <div className="search_input">
                    <input placeholder="Nhập từ khoá tìm kiếm..." />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </div>
                <div className="contact">
                    <div className="phone">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-phone"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                            />
                        </svg>
                        <div className="call">
                            <div className="title">Cấp cứu 24/7</div>
                            <div className="number">{phone}</div>
                        </div>
                    </div>
                    <div className="phone" style={{ borderLeft: 'solid 1px #f8f8f8' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-headset"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                            <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                            <path
                                d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"
                            />
                            <path
                                d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"
                            />
                        </svg>
                        <div className="call">
                            <div className="title">Tổng đài CSKH</div>
                            <div className="number">{hotline}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    )
}