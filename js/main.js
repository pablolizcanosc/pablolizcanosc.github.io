const xhr = new XMLHttpRequest();
xhr.open("GET", "header.html", true);
xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    document.body.insertAdjacentHTML("afterbegin", this.responseText);
  }
};
xhr.send();