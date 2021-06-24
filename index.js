const taskContainer = document.querySelector(".task__container");

const globalStore = [];

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card text-center">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-dumpster-fire"></i></button>
      </div>
      <img src=${taskData.imageUrl}
      class="card-img-top" alt="img"
      />
      <div class="card-body">
        <h5 class="card-title">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskType}</p>
        <a href="#" class="btn btn-primary">${taskData.taskDiscription}</a>
      </div>
      <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
      </div>
    </div>
  </div>
`;

const loadInitialCardData = () =>{
   //localstorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");

   //convert from string to normal object
  const {cards} = JSON.parse(getCardData);  

  //loop over the arrays of task object to create HTML card, inject it to DOM
  cards.map((cardObject) => {

    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
     
    //update globalStore
    globalStore.push(cardObject);
  })
};

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //unique number for id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDiscription: document.getElementById("taskdescription").value,
    };

taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

globalStore.push(taskData);

localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));

};