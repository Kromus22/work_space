import { fileController } from "./modules/fileController.js";
import { filterControl } from "./modules/filterControl.js";
import { filterToggle } from "./modules/filterToggle.js";
import { formController } from "./modules/formController.js";
import { loadMoreVacancies } from "./modules/loadMoreVacancies.js";
import { modalVacancyControl } from "./modules/modalVacancyControl.js";
import { renderVacancies } from "./modules/renderVacancies.js";
import { selectCityControl } from "./modules/selectCityControl.js";
import { vacancyControl } from "./modules/vacancyControl.js";

export const API_URL = "https://zircon-immediate-pufferfish.glitch.me/";
export const LOCATION_URL = "api/locations";
export const VACANCY_URL = "api/vacancy";
export const BOT_TOKEN = '6501952909:AAEuiSBIoriPuyYdFnCe8JBtKkokiS0FZE0';

export const cardsList = document.querySelector('.cards__list');
export const filterForm = document.querySelector('.filter__form');
export const vacanciesFilterBtn = document.querySelector('.vacancies__filter-btn');
export const vacanciesFilter = document.querySelector('.vacancies__filter');
export let appData = {
  lastUrl: '',
};
export let pagination = {};


export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadMoreVacancies();
      }
    });
  },
  {
    rootMargin: '100px'
  }
);

const init = () => {
  try {
    filterToggle();
    selectCityControl();
    vacancyControl();
    modalVacancyControl();
    filterControl();
  } catch (error) {
    console.warn('Это не страница index.html');
  }

  try {
    formController();
    fileController();
  } catch (error) {
    console.warn('Это не страница employer.html');
  }
}

init();

