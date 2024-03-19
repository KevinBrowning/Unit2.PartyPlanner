const APIURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;

/* 
1. create an area on HTML where the material can be displayed
2. create a const for the api url and declare as global variable
3. make async function that will grab json data from api
4. create element li that will show up on HTML
5. replace children in LI with json elements

notes after i realized there was more to do
1. Also had to make a state
2. had to make a seperate function to display the events on the page
e. had to make a render function actually run them
*/
const state = {
events: []
};

const getEvents = async () => {
  try{
  const response = await fetch(APIURL);
  // console.log(response); TESTER
  const json = await response.json();
  console.log(json);
  state.events = json.data
  } 
  catch(error){
    console.log(error);
  }
}

const displayEvents = () => {
  const partyListHolder = document.querySelector(`#partyTimeList`);
  const displayedEvents = state.events.map((currentEvent) => {
  const li = document.createElement(`li`);
  li.innerHTML = `
  <h3>${currentEvent.name}<h3>
  <p>${currentEvent.description}<p>
  <p>${currentEvent.date}<p>
  <p>${currentEvent.location}<p>
  `;
  return li;
});
partyListHolder.replaceChildren(...displayedEvents);
};

const render = async () => {
 await getEvents();
 displayEvents();
}

render();