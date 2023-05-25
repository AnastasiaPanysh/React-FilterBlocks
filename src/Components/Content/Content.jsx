import { useState, useEffect, useRef } from "react";
import { Pagination } from "@mantine/core";
import style from "./style.module.scss";
import Item from "./Item";
import axios from "axios";

function Content({ searchString }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);
  const [list, setList] = useState([]);


  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get(
          "https://api.superjob.ru/2.0/vacancies/",
          {
            headers: {
              "X-Api-App-Id":
                "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer v3.r.137565249.e28e5c69be8e4ff7a749fb84d229f26fe69ec495.0377f2eaf1672c1d2ec04c6cedf2910e21f3ebdd`,
              // 'Authorization': `Bearer ${accessToken}`
            },
          }
        );

        console.log(response.data);
        setVacancies(response.data.objects);
      } catch (error) {
        console.error("Ошибка при получении вакансий", error);
      }
    };

    // performAuthorization();
    fetchVacancies();
  }, []);

  function filterVacancy() {
    if (!searchString) return vacancies;

    return vacancies.filter(({ profession}) => {
      const lowerCaseVacancy = profession.toLowerCase();
      return (
        (!searchString || lowerCaseVacancy.includes(searchString.toLowerCase()))
      );
    });
  };

  

  const paginatedList = filterVacancy().slice(
    (currentPage - 1) * pageSizeRef.current,
    currentPage * pageSizeRef.current
  );


  useEffect(() => {
    setList(filterVacancy());
    setCurrentPage(1);
  }, [searchString]);



  return (
    <>
      {paginatedList.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <Pagination
        total={Math.ceil(list.length / pageSizeRef.current)}
        value={currentPage}
        onChange={(page) => setCurrentPage(page)}
        position="center"
      />
    </>
  );
}

export default Content;
