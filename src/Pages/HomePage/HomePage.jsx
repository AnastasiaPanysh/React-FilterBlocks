import React, { useState } from 'react';
import Content from "../../Components/Content/Content";
import Search from "../../Components/Search/Search";
import style from './style.module.scss';
import Header from '../../Components/Header/Header'
function HomePage() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className={style["wrapper"]}>
      <Header />
      <div className={style["content"]}>
        <Search setSearchString={setSearchString} />
        <Content  searchString={searchString} />
      </div>
    </div>
  );
}

export default HomePage;
