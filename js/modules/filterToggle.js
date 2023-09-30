import { vacanciesFilter, vacanciesFilterBtn } from "../script.js";

const openFilter = (btn, dropdown, classNameBtn, classNameDropdown) => {
  dropdown.style.height = `${dropdown.scrollHeight}px`;
  btn.classList.add(classNameBtn);
  dropdown.classList.add(classNameDropdown);
}

export const closeFilter = (btn, dropdown, classNameBtn, classNameDropdown) => {
  btn.classList.remove(classNameBtn);
  dropdown.classList.remove(classNameDropdown);
  dropdown.style.height = '';
}

export const filterToggle = () => {
  vacanciesFilterBtn.addEventListener('click', () => {
    if (vacanciesFilterBtn.classList.contains('vacancies__filter-btn_active')) {
      closeFilter(
        vacanciesFilterBtn,
        vacanciesFilter,
        'vacancies__filter-btn_active',
        'vacancies__filter_active'
      );
    } else {
      openFilter(
        vacanciesFilterBtn,
        vacanciesFilter,
        'vacancies__filter-btn_active',
        'vacancies__filter_active'
      );
    }

  });

  window.addEventListener('resize', () => {
    if (vacanciesFilterBtn.classList.contains('vacancies__filter-btn_active')) {
      vacanciesFilter.style.height = `${vacanciesFilter.scrollHeight}px`;
    }
  });
}