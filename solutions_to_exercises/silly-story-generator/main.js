const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

    storyText =storyText.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.07142) + " stone";
    const temperature =  Math.round((94 - 32) * 5/9) + " centigrade";

    storyText = storyText.replace("94 fahrenheit", temperature).replace("300 pounds", weight);
  }

  // stores the story text
  let newStory = storyText;

  // stores the random story that will be gnerated
  let xItem = randomValueFromArray(insertX);
  
  let yItem = randomValueFromArray(insertY);

  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace("insertx", xItem).replace("inserty", yItem).replace("insertz", zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}