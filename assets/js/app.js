// sanity check
console.log("app.js linked.");

let db = [
  {
    projName: "js-control-flow-training",
    projDesc: "In this module we had 3 exercises on the Control Flow feature of Javascript. They are in login.js, sequrity_questions.js, and sing.js.",
    projLink: "https://github.com/achentha/js-control-flow-training/tree/master/starter-code"
  },

  {
    projName: "achentha.github.io",
    projDesc: "This is my first personal Web Page. It is an on-going project at the time of this writing.",
    projLink: "https://github.com/achentha/achentha.github.io"
  },

  {
    projName: "wdi-fundamentals-memorygame",
    projDesc: "This is a very simple game to test your memory. There are 4 cards in the game. The goal is to find a matching pair of two cards.",
    projLink: "https://github.com/achentha/wdi-fundamentals-memorygame"
  }
]

$(document).ready(function() {
  console.log("DOM is ready")

  if (db.length === 0)  /* bail out early if the db is empty */
    return;

  /*
   * Populating the string for the projects from the db defined above and stored
   * it in myProj variable. First start with the <h3> and the <ul>. Note that
   * the </ul> tag will be appended after the loop.
   */
  let myProj = "<h3>My Projects</h3><ul>";

  /*
   * Loop thru the db(array of project objects) and construct each project entry
   * as an <li> element of the <ul> above.
   */
  for (let i = 0; i < db.length; i++) {
    myProj += `<li><a href="${db[i].projLink}" target="_blank">${db[i].projName}</a></li>`;
  }

  myProj += "</ul>";   /* add the </ul> tag */

  /* Attach the prepared string into the div "dyn" */
  let section = $(".dyn");
  section.append(myProj);












})
