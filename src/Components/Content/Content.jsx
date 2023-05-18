import { useState, useRef } from "react";
import { Pagination } from "@mantine/core";
import style from "./style.module.scss";
import storage from "../../Storage/Storage.json";
import Item from "./Item";

function Content() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);

  const paginatedList = storage.slice(
    (currentPage - 1) * pageSizeRef.current,
    currentPage * pageSizeRef.current
  );

 function PageChange(page) {
    setCurrentPage(page);
  };

  return (
    <>
      {paginatedList.map((item) => (
        <Item
          key={item.id}
          vacancy={item.vacancy}
          salary={item.salary}
          workday={item.workday}
          city={item.city}
        />
      ))}
      <Pagination
        total={Math.ceil(storage.length / pageSizeRef.current)}
        value={currentPage}
        onChange={PageChange}
        position="center"
      />
    </>
  );
}

export default Content;