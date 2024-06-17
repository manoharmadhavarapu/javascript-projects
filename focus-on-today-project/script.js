const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressLabel = document.querySelector('.progress-label');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');


const allQuotes = [
    'Raise the bar by completing your goals',
    'Well begun is half done!',
    'Just a step away, keep going',
    'Almost completed... time for break'
]


const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};
let completedGoalsCount = Object.values(allGoals).filter(goal=>goal.completed).length;
console.log(completedGoalsCount,allGoals);

progressValue.style.width = `${(completedGoalsCount/inputFields.length) * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFields.length} completed`

progressLabel.innerText = allQuotes[completedGoalsCount] === undefined ? 'Whoa! You just completed all the goals, time for chill : D' : allQuotes[completedGoalsCount];



checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{

        // checking all fields whether it is filled with data or not.
        const allFieldsFilled = [...inputFields].every((input)=>{
            return input.value ;
        })

        
        if(allFieldsFilled){
            checkbox.parentElement.classList.toggle('completed');
            allGoals[checkbox.nextElementSibling.id].completed= !allGoals[checkbox.nextElementSibling.id].completed;
            completedGoalsCount = Object.values(allGoals).filter(goal=>goal.completed).length;

            progressValue.style.width = `${(completedGoalsCount/inputFields.length) * 100}%`
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFields.length} completed`
            progressLabel.innerText = allQuotes[completedGoalsCount] === undefined ? 'Whoa! You just completed all the goals, time for chill : D' : allQuotes[completedGoalsCount];


            localStorage.setItem('allGoals',JSON.stringify(allGoals));
        }
        else {
            progressBar.classList.add('show-error')
        }
    })
})


inputFields.forEach((input)=>{

    // First Approach
    // input.value = allGoals[input.id]?.name === undefined ? '' : allGoals[input.id].name


    // Second Approach
    if(allGoals[input.id]){
        input.value = allGoals[input.id].name;

        if(allGoals[input.id]?.completed){
            input.parentElement.classList.add('completed')
        }
    }

    // if(allGoals[input.id]?.completed){
    //     input.parentElement.classList.add('completed')
    // }

    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')
    })

    input.addEventListener('input',(e)=>{

        if(allGoals[input.id]?.completed){
            e.target.value = allGoals[input.id]?.name
             return 
        }

        allGoals[input.id] = {
            name:e.target.value,
            completed : false
        }
        console.log(allGoals);
        localStorage.setItem('allGoals',JSON.stringify(allGoals));
    })
})