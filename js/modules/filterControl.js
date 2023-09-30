import { API_URL, VACANCY_URL, appData, filterForm, vacanciesFilter, vacanciesFilterBtn } from "../script.js";
import { closeFilter } from "./filterToggle.js";
import { getData } from "./getData.js";
import { renderError } from "./renderError.js";
import { renderVacancies } from "./renderVacancies.js";

export const filterControl = () => {
  filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(filterForm);

    const urlWithParam = new URL(`${API_URL}${VACANCY_URL}`);
    formData.forEach((value, key) => {
      urlWithParam.searchParams.append(key, value);
    });

    getData(urlWithParam, renderVacancies, renderError).then(() => {
      appData.lastUrl = urlWithParam;
    })
      .then(() => {
        closeFilter(
          vacanciesFilterBtn,
          vacanciesFilter,
          'vacancies__filter-btn_active',
          'vacancies__filter_active',
        );
      });
  });
}