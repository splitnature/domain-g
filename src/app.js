/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  window.onload = function() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big", "red"];
    let noun = ["jogger", "racoon"];

    const array = [];

    for (let i = 0; i < pronoun.length; i += 1) {
      for (let j = 0; j < adj.length; j += 1) {
        for (let k = 0; k < noun.length; k += 1) {
          const a = pronoun[i];
          const b = adj[j];
          const c = noun[k];
          array.push(a + b + c);
        }
      }
    }

    console.log(array);
  };

