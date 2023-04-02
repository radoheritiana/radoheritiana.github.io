const theme = document.querySelector("#theme");

theme.addEventListener("change", (e) => {
  let state = e.target.checked;
  if (state) {
    document.querySelector("#navbar").classList =
      "navbar navbar-dark navbar-expand-lg sticky-top shadow";
    document.body.classList = "body-dark";
    let cards = document.querySelectorAll("#card");
    cards.forEach((card) => {
      card.classList = "card card-dark mt-3 ";
    });
    let card_headers = document.querySelectorAll("#card-header");
    card_headers.forEach((card_header) => {
      card_header.classList = "card-header card-header-dark p-3";
    });
    let tables = document.querySelectorAll("#table");
    tables.forEach((table) => {
      table.classList = "table dark-table fs-6";
    });
    let card_portfolio = document.querySelectorAll("#card-portfolio");
    card_portfolio.forEach((card) => {
      card.classList.remove("text-bg-white");
      card.classList.add("text-bg-dark");
    });
  } else {
    document.querySelector("#navbar").classList =
      "navbar navbar-light navbar-expand-lg sticky-top shadow";
    document.body.classList = "body-light";
    let cards = document.querySelectorAll("#card");
    cards.forEach((card) => {
      card.classList = "card card-light mt-3 ";
    });
    let card_headers = document.querySelectorAll("#card-header");
    card_headers.forEach((card_header) => {
      card_header.classList = "card-header card-header-light p-3";
    });
    let tables = document.querySelectorAll("#table");
    tables.forEach((table) => {
      table.classList = "table light-table fs-6";
    });
    let card_portfolio = document.querySelectorAll("#card-portfolio");
    card_portfolio.forEach((card) => {
      card.classList.add("text-bg-dark");
      card.classList.remove("text-bg-white");
    });
  }
});
