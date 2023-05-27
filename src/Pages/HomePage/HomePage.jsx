import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Filters from "../../Components/Filters/Filters";
import Content from "../../Components/Content/Content";
import Search from "../../Components/Search/Search";
import style from "./style.module.scss";
function HomePage() {
  const [searchString, setSearchString] = useState("");
  const [expression, setExpression] = useState({ industry: 'default', salaryFrom: '', salaryTo: '' });

  

  return (
    <div className={style["wrapper"]}>
      <Header />
      <div className={style['preview']}>
        <Filters setExpression={setExpression} />
        <div className={style["content"]}>
          <Search setSearchString={setSearchString} />
          <Content searchString={searchString} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
