import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Input, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import axios from "axios";


function Filters({ setExpression }) {

  const [navigation, setNavigation] = useState([]);
  const [storage,setStorage]=useState([]);

  useEffect(() => {
    const fetchFilter = async () => {
      try {
        const response = await axios.get(
          "https://api.superjob.ru/2.0/catalogues",
          {
            headers: {
              "X-Api-App-Id":
                "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer v3.r.137565249.e28e5c69be8e4ff7a749fb84d229f26fe69ec495.0377f2eaf1672c1d2ec04c6cedf2910e21f3ebdd`,
            },
          }
        );

        console.log(response.data);
        setStorage(response.data);
      } catch (error) {
        console.error("Ошибка при получении фильтра", error);
      }
    };

    // performAuthorization();
    fetchFilter();
  }, []);


  function changeFiltersState(event) {
    const { name, value } = event.target;
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      [name]: value === "default" ? "" : value,
    }));
  }
  

  function setDefault() {
    setNavigation({ title: "default", salaryFrom: "", salaryTo: "" });
    setExpression({ title: "default", salaryFrom: "", salaryTo: "" });
  }

  return (
    // <>
    // </>
    <div className={style.wrapper}>
      <div className={style.flex}>
        <h2>Фильтры</h2>
        <p onClick={setDefault}>Сбросить все</p>
      </div>

      <div className={style.industry}>
        <h3>Отрасль</h3>
        <Input
  size="lg"
  name="industry"
  component="select"
  value={navigation.title}
  onChange={changeFiltersState}
  rightSection={<IconChevronDown />}
>
  <option value="default">Выберите отрасль</option>
  {Object.values(storage).map((el, index) => (
    <option key={index} value={el.title}>
      {el.title}
    </option>
  ))}
</Input>
      </div>

      <div className={style.salary}>
        <h3>Оклад</h3>

        <div className={style.selectors}>
          <Input
            value={navigation.salaryFrom}
            type="number"
            size="lg"
            className={style["search-inp"]}
            placeholder="От"
            name="salaryFrom"
            onChange={changeFiltersState}
          />
          <Input
            value={navigation.salaryTo}
            type="number"
            size="lg"
            className={style["search-inp"]}
            placeholder="До"
            name="salaryTo"
            onChange={changeFiltersState}
          />
        </div>
      </div>

      <Button
        onClick={() => setExpression(navigation.title)}
        className={style.btn}
        size="lg"
      >
        Применить
      </Button>
    </div>
  );
}

export default Filters;
