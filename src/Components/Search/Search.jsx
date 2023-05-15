import style from "./style.module.scss";
import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

function Search() {
  const [input, setInput] = useState("");

  function showValueInp() {
    console.log(input);
  }

  return (
    <>
      <div className={style["wrapper"]}>
        <Input
          onChange={(event) => setInput(event.target.value)}
          className={style["input"]}
          icon={<IconSearch />}
          placeholder="Введите название вакансии"
          rightSection={
            <Button onClick={showValueInp} className={style["btn"]}>
              Поиск
            </Button>
          }
        />
      </div>
    </>
  );
}

export default Search;
