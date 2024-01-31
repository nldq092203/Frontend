const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "../assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "../assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "../assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "../assets/images/icon-visual.svg",
  },
];

const block_summary_list = document.querySelector(".block_summary_list");

console.log(block_summary_list);

const summary_block = ({ category, score, icon }) => {
  return `<div class="summary_block" id="${category.toLowerCase()}">
            <div class="summary_title">
              <img src="${icon}" alt="${category}"/>
              <h4>${category}</h4>
            </div>
            <h4><span>${score}</span>/100</h4>
          </div>`;
};

const renderBlocks = () =>
  data.map((item, index) => {
    const { category, score, icon } = item;
    return summary_block({ category, score, icon });
  });

block_summary_list.innerHTML = renderBlocks().join("");

console.log(data);
