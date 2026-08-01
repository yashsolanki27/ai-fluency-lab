// AI Fluency Modules

const modules = [
  {
    title: "Introduction to AI Fluency",
    description: "Understanding effective collaboration between humans and AI.",
  },

  {
    title: "Generative AI",
    description: "AI systems that create text, images, code and content.",
  },

  {
    title: "Delegation",
    description: "Deciding which tasks AI should perform.",
  },

  {
    title: "Description",
    description: "Providing context, instructions and constraints.",
  },

  {
    title: "Discernment",
    description: "Evaluating AI outputs critically.",
  },

  {
    title: "Diligence",
    description: "Verifying AI results before using them.",
  },
];

// Render Modules

const moduleContainer = document.getElementById("moduleContainer");

modules.forEach((module) => {
  moduleContainer.innerHTML += `

<div class="card">

<h3>
${module.title}
</h3>


<p>
${module.description}
</p>


</div>

`;
});

// 4D Framework

const framework = {
  Delegation: "Choose what AI should handle.",

  Description: "Give clear instructions and context.",

  Discernment: "Review AI responses carefully.",

  Diligence: "Verify accuracy and quality.",
};

const frameworkContainer = document.getElementById("frameworkContainer");

Object.entries(framework).forEach(([key, value]) => {
  frameworkContainer.innerHTML += `

<div class="card">

<h3>
${key}
</h3>

<p>
${value}
</p>


</div>

`;
});

// Prompt Library

const prompts = [
  {
    name: "Learning Prompt",
    text: "Create a structured roadmap to learn JavaScript.",
  },

  {
    name: "Coding Prompt",
    text: "Review my code and explain improvements.",
  },

  {
    name: "Career Prompt",
    text: "Create an AI based career development plan.",
  },
];

const promptContainer = document.getElementById("promptContainer");

function displayPrompts(data) {
  promptContainer.innerHTML = "";

  data.forEach((prompt) => {
    promptContainer.innerHTML += `

<div class="card">

<h3>
${prompt.name}
</h3>

<p>
${prompt.text}
</p>

</div>


`;
  });
}

displayPrompts(prompts);

function searchPrompts() {
  let value = document.getElementById("searchInput").value.toLowerCase();

  let result = prompts.filter((prompt) =>
    prompt.text.toLowerCase().includes(value),
  );

  displayPrompts(result);
}

// Dark Mode

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Quiz

const questions = [
  {
    question: "What does Discernment mean?",

    answer: "Evaluate AI outputs",
  },

  {
    question: "What does Diligence mean?",

    answer: "Verify results",
  },
];

let current = 0;

let score = 0;

function showQuestion() {
  document.getElementById("quizContainer").innerHTML = `

<h3>
${questions[current].question}
</h3>


<input id="answer">


`;
}

showQuestion();

function nextQuestion() {
  let userAnswer = document.getElementById("answer").value;

  if (
    userAnswer
      .toLowerCase()
      .includes(questions[current].answer.toLowerCase().substring(0, 5))
  ) {
    score++;
  }

  current++;

  if (current >= questions.length) {
    current = 0;
  }

  document.getElementById("score").innerHTML = "Score: " + score;

  showQuestion();
}

// Progress Tracker

function completeLearning() {
  localStorage.setItem("AI_Fluency_Status", "Completed");

  document.getElementById("progress").innerHTML = "Learning Completed ✅";
}
