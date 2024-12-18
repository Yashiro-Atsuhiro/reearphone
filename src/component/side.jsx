import React from "react";

const photoin = [
    { id: 0, leftbanner: "/img/mini_weekly_rank.webp", alt: "週間ランキング" },
    { id: 1, leftbanner: "/img/kaitori_left.webp", alt: "買取強化キャンペーン" },
    { id: 2, leftbanner: "/img/mini_campaign.webp", alt: "開催中のキャンペーン" },
    { id: 3, leftbanner: "/img/mini_line.webp", alt: "公式LINE" },
    { id: 4, leftbanner: "/img/mini_web_member.webp", alt: "会員募集中" },
    { id: 5, leftbanner: "/img/mini_recruit_400_160.webp", alt: "スタッフ大募集" },
    { id: 6, leftbanner: "/img/mini_web_member.webp", alt: "dummy" },
    { id: 7, leftbanner: "/img/mini_web_member.webp", alt: "dummy" },
];

function Side({ leftbanner, alt }) {
    return (
        <div className="leftbandiv">
            <img className="leftbanner" src={leftbanner} alt={alt} />
        </div>
    );
}

function Leftcate() {
    return (
        <div className="left_categ">
            {photoin.map((photo) => (
                <Side key={photo.id} leftbanner={photo.leftbanner} alt={photo.alt} />
            ))}
        </div>
    );
}

const leftcatecon = [
    { id: 0, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンワイヤレス", catename: "ワイヤレス" },
    { id: 1, img: "/img/mini_weekly_rank.webp", alt: "eイヤホン有線イヤホン", catename: "有線イヤホン" },
    { id: 2, img: "/img/mini_weekly_rank.webp", alt: "eイヤホン有線ヘッドホン", catename: "有線ヘッドホン" },
    { id: 3, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンゲーミング", catename: "ゲーミング" },
    { id: 4, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンプレイヤー", catename: "プレイヤー" },
    { id: 5, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンAMPDAC", catename: "AMP・DAC" },
    { id: 6, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンケーブル", catename: "ケーブル" },
    { id: 7, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンスピーカー", catename: "スピーカー" },
    { id: 8, img: "/img/mini_weekly_rank.webp", alt: "eイヤホン修理自作", catename: "修理・自作" },
    { id: 9, img: "/img/mini_weekly_rank.webp", alt: "eイヤホン雑貨アクセサリー", catename: "雑貨アクセサリー" },
    { id: 10, img: "/img/mini_weekly_rank.webp", alt: "eイヤホンアウトレット", catename: "アウトレット" },
    { id: 11, img: "/img/mini_weekly_rank.webp", alt: "eイヤホン中古", catename: "中古" },
];

function Sidesearch({ img, alt, catename }) {
    return (
        <div className="side-item">
                <img className="cateimg" src={img} alt={alt} />
             <a href="#">
                <p className="catename">{catename}</p>
             </a>
        </div>
    );
}


function Categ_search() {
    return (
        <div>
            <h2 className="info-title">カテゴリーから探す</h2>
            <div className="sidecateg">
                {leftcatecon.map((cate) => (
                    <Sidesearch key={cate.id} img={cate.img} alt={cate.alt} catename={cate.catename} />
                ))}
            </div>
        </div>
    );
}

// 20件
const brandcon = [
    { id: 0, brandname: "ブランド名A" },
    { id: 1, brandname: "ブランド名B" },
    { id: 2, brandname: "ブランド名C" },
    { id: 3, brandname: "ブランド名D" },
    { id: 4, brandname: "ブランド名E" },
    { id: 5, brandname: "ブランド名F" },
    { id: 6, brandname: "ブランド名G" },
    { id: 7, brandname: "ブランド名H" },
    { id: 8, brandname: "ブランド名I" },
    { id: 9, brandname: "ブランド名J" },
    { id: 10, brandname: "ブランド名K" },
    { id: 11, brandname: "ブランド名L" },
    { id: 12, brandname: "ブランド名M" },
    { id: 13, brandname: "ブランド名N" },
    { id: 14, brandname: "ブランド名O" },
    { id: 15, brandname: "ブランド名P" },
    { id: 16, brandname: "ブランド名Q" },
    { id: 17, brandname: "ブランド名R" },
    { id: 18, brandname: "ブランド名S" },
    { id: 19, brandname: "ブランド名T" },
];







function Brandnamesearch({ brandname }) {
    return (
        <div className="side-brandid">
            <a href="#">
                <p className="brandname">{brandname}</p>
            </a>
        </div>
    );
}






function Brand_search() {
    return (
        <div>
            <h2 className="info-title">ブランドから探す</h2>
            <div className="sidecategbrand">
                {brandcon.map((brand) => (
                    <Brandnamesearch key={brand.id} brandname={brand.brandname} />
                ))}
            </div>
        </div>
    );
}


const announcements = [
    {
        date: "2024/11/26",
        message: "システムメンテナンスのお知らせ",
    },
    {
        date: "2024/11/20",
        message: "新製品発売のお知らせ",
    },
    {
        date: "2024/11/15",
        message: "システムメンテナンスのお知らせ",
    },
];

function InformationBox() {
    return (
        <div className="info-box">
            <h2 className="info-title" id="infomation">
                INFORMATION <br /><span className="info-subtitle">お知らせ</span>
            </h2>
            <div className="info-content">
                {announcements.map((announcement, index) => (
                    <div key={index} className="info-item">
                        <p className="info-date">{announcement.date}</p>
                        <p className="info-message">{announcement.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}





function Content() {
    return (
        <div className="productcate">
            <Leftcate />
            <Categ_search />
            <Brand_search />
            <InformationBox />
        </div>
    );
}


export default Content;
