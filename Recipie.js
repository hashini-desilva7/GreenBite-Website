// Recipe Data
const recipes = [
  {
    title: "Avocado Toast",
    category: "breakfast",
    description: "Crispy toast topped with creamy avocado and seasoning.",
    image: "img/Avocado-Toast.jpg",
    ingredients: ["2 slices of bread", "1 ripe avocado", "Salt", "Pepper", "Olive oil"],
    steps: ["Toast the bread slices.", "Mash the avocado with salt and pepper.", "Spread on toast and drizzle with olive oil."],
    nutrition: { Calories: "220", Protein: "6g", Carbs: "28g", Fat: "11g" }
  },
  {
    title: "Quinoa Salad",
    category: "lunch",
    description: "A refreshing salad packed with protein and veggies.",
    image: "img/Quinoa-Salad.jpg",
    ingredients: ["1 cup quinoa", "1 cucumber", "1 tomato", "Feta cheese", "Lemon dressing"],
    steps: ["Cook quinoa and let cool.", "Chop cucumber and tomato.", "Mix everything with feta and lemon dressing."],
    nutrition: { Calories: "350", Protein: "12g", Carbs: "45g", Fat: "10g" }
  },
  {
    title: "Grilled Salmon",
    category: "dinner",
    description: "Perfectly grilled salmon with lemon and herbs.",
    image: "img/grilled-salmon.jpg",
    ingredients: ["1 salmon fillet", "Lemon", "Garlic", "Olive oil", "Herbs"],
    steps: ["Marinate salmon with lemon, garlic, and herbs.", "Grill for 5-7 minutes each side.", "Serve hot."],
    nutrition: { Calories: "400", Protein: "35g", Carbs: "0g", Fat: "28g" }
  },
  {
    title: "Berry Smoothie Bowl",
    category: "breakfast",
    description: "A colorful and healthy smoothie bowl topped with fresh berries and seeds.",
    image: "img/Berry Smoothie.webp",
    ingredients: ["1 cup frozen mixed berries", "1 banana", "1/2 cup yogurt", "1 tbsp chia seeds", "1 tbsp honey"],
    steps: [
      "Blend berries, banana, and yogurt until smooth.",
      "Pour into a bowl.",
      "Top with chia seeds and extra berries."
    ],
    nutrition: { Calories: "250", Protein: "6g", Carbs: "45g", Fat: "5g" }
  },
  {
    title: "Chicken Wrap",
    category: "lunch",
    description: "Whole wheat wrap filled with grilled chicken, fresh veggies, and hummus.",
    image: "img/Chicken wrap.jpg",
    ingredients: ["1 whole wheat tortilla", "100g grilled chicken", "Lettuce", "Tomato slices", "2 tbsp hummus"],
    steps: [
      "Spread hummus on tortilla.",
      "Add grilled chicken and veggies.",
      "Roll the tortilla and cut in half."
    ],
    nutrition: { Calories: "350", Protein: "28g", Carbs: "30g", Fat: "12g" }
  },
  {
    title: "Veggie Stir-Fry",
    category: "dinner",
    description: "Quick stir-fried vegetables with soy sauce and garlic.",
    image: "img/Vegetable-Stir-Fry.png",
    ingredients: ["1 cup broccoli", "1 carrot", "1 bell pepper", "2 tbsp soy sauce", "1 clove garlic"],
    steps: [
      "Heat oil in a pan and sauté garlic.",
      "Add vegetables and stir-fry for 5-7 minutes.",
      "Add soy sauce and cook 2 more minutes."
    ],
    nutrition: { Calories: "200", Protein: "5g", Carbs: "20g", Fat: "10g" }
  },
  {
    title: "Fruit Yogurt Parfait",
    category: "snack",
    description: "Layers of yogurt, granola, and fresh fruits make a perfect healthy snack.",
    image: "img/fruit-and-yogurt-parfait.jpg",
    ingredients: ["1 cup yogurt", "1/2 cup granola", "1/2 cup mixed fruits", "1 tsp honey"],
    steps: [
      "Layer yogurt, granola, and fruits in a glass.",
      "Drizzle honey on top.",
      "Serve immediately."
    ],
    nutrition: { Calories: "220", Protein: "8g", Carbs: "35g", Fat: "6g" }
  },
  {
    title: "Quinoa Buddha Bowl",
    category: "lunch",
    description: "A balanced bowl with quinoa, roasted veggies, avocado, and chickpeas.",
    image: "img/buddha-bowl.jpg",
    ingredients: ["1 cup cooked quinoa", "1/2 cup roasted vegetables", "1/2 avocado", "1/2 cup chickpeas", "Lemon dressing"],
    steps: [
      "Arrange quinoa in a bowl.",
      "Top with roasted vegetables, avocado slices, and chickpeas.",
      "Drizzle lemon dressing and serve."
    ],
    nutrition: { Calories: "400", Protein: "15g", Carbs: "50g", Fat: "15g" }
  },
  {
    title: "Oatmeal with Fruits",
    category: "breakfast",
    description: "Warm oatmeal topped with fresh fruits and nuts.",
    image: "img/oatmeal.webp",
    ingredients: ["1/2 cup oats", "1 cup milk", "1 banana", "Handful of berries", "1 tsp honey"],
    steps: [
      "Cook oats with milk until soft.",
      "Pour into a bowl.",
      "Top with banana, berries, and honey."
    ],
    nutrition: { Calories: "250", Protein: "8g", Carbs: "45g", Fat: "6g" }
  },
  {
    title: "Caprese Salad",
    category: "lunch",
    description: "Fresh tomatoes, mozzarella, and basil drizzled with olive oil.",
    image: "img/caprese-salad.JPG",
    ingredients: ["2 tomatoes", "100g mozzarella", "Fresh basil", "Olive oil", "Salt and pepper"],
    steps: [
      "Slice tomatoes and mozzarella.",
      "Layer with basil leaves.",
      "Drizzle with olive oil, add salt and pepper."
    ],
    nutrition: { Calories: "180", Protein: "10g", Carbs: "6g", Fat: "14g" }
  },
  {
    title: "Spaghetti Aglio e Olio",
    category: "dinner",
    description: "Simple Italian pasta with garlic, olive oil, and chili flakes.",
    image: "img/spaghetti.webp",
    ingredients: ["200g spaghetti", "2 cloves garlic", "3 tbsp olive oil", "Red chili flakes", "Parsley"],
    steps: [
      "Cook spaghetti according to package instructions.",
      "Sauté garlic in olive oil, add chili flakes.",
      "Toss pasta with the garlic oil and parsley."
    ],
    nutrition: { Calories: "350", Protein: "12g", Carbs: "60g", Fat: "10g" }
  },
  {
    title: "Veggie Wrap",
    category: "lunch",
    description: "Whole wheat wrap filled with hummus, veggies, and avocado.",
    image: "img/Veggie-Wrap.png",
    ingredients: ["1 whole wheat tortilla", "Hummus", "1/2 avocado", "Lettuce", "Tomato slices", "Cucumber slices"],
    steps: [
      "Spread hummus on tortilla.",
      "Add avocado and veggies.",
      "Roll the tortilla and cut in half."
    ],
    nutrition: { Calories: "300", Protein: "8g", Carbs: "35g", Fat: "15g" }
  },
  {
    title: "Chocolate Chia Pudding",
    category: "snack",
    description: "Healthy dessert made with chia seeds and cocoa powder.",
    image: "img/chocolate chia pudding.jpg",
    ingredients: ["3 tbsp chia seeds", "1 cup milk", "1 tsp cocoa powder", "1 tsp honey", "Berries for topping"],
    steps: [
      "Mix chia seeds, milk, cocoa, and honey in a jar.",
      "Refrigerate for 4 hours or overnight.",
      "Top with berries before serving."
    ],
    nutrition: { Calories: "200", Protein: "6g", Carbs: "20g", Fat: "10g" }
  },
  {
    title: "Grilled Veggie Skewers",
    category: "dinner",
    description: "Skewers of bell peppers, zucchini, and mushrooms grilled to perfection.",
    image: "img/grilled-veggie-skewers.jpg",
    ingredients: ["1 zucchini", "1 bell pepper", "5 mushrooms", "Olive oil", "Salt and pepper"],
    steps: [
      "Cut veggies into chunks and thread onto skewers.",
      "Brush with olive oil and season with salt and pepper.",
      "Grill for 10-15 minutes until cooked."
    ],
    nutrition: { Calories: "180", Protein: "5g", Carbs: "15g", Fat: "10g" }
  },
  {
    title: "Avocado Chickpea Salad",
    category: "lunch",
    description: "Protein-packed salad with mashed chickpeas and creamy avocado.",
    image: "img/AvoChickpeaSalad.jpg",
    ingredients: ["1 cup chickpeas", "1/2 avocado", "1 tomato", "1/4 onion", "Lemon juice", "Salt and pepper"],
    steps: [
      "Mash chickpeas and avocado together.",
      "Add chopped tomato and onion.",
      "Season with lemon juice, salt, and pepper."
    ],
    nutrition: { Calories: "320", Protein: "12g", Carbs: "35g", Fat: "15g" }
  },
  {
    title: "Banana Pancakes",
    category: "breakfast",
    description: "Fluffy pancakes made with mashed bananas and oats.",
    image: "img/Banana pancake.jpg",
    ingredients: ["1 banana", "1/2 cup oats", "1 egg", "1/2 tsp baking powder", "Cinnamon"],
    steps: [
      "Mash banana and mix with oats, egg, baking powder, and cinnamon.",
      "Cook pancakes on a non-stick pan until golden.",
      "Serve with honey or fruits."
    ],
    nutrition: { Calories: "270", Protein: "8g", Carbs: "40g", Fat: "8g" }
  },
  {
    title: "Sweet Potato Fries",
    category: "snack",
    description: "Baked sweet potato fries with paprika and olive oil.",
    image: "img/Sweet-Potato-Fries.jpg",
    ingredients: ["2 sweet potatoes", "1 tbsp olive oil", "1 tsp paprika", "Salt and pepper"],
    steps: [
      "Cut sweet potatoes into fries.",
      "Toss with olive oil, paprika, salt, and pepper.",
      "Bake at 200°C for 25-30 minutes until crispy."
    ],
    nutrition: { Calories: "220", Protein: "3g", Carbs: "35g", Fat: "8g" }
  }
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

// Render recipes
function displayRecipes(list) {
  recipeContainer.innerHTML = "";
  list.forEach((r) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}">
      <h3>${r.title}</h3>
      <p>${r.description}</p>
    `;
    // ✅ Pass recipe object instead of index
    card.addEventListener("click", () => openModal(r));
    recipeContainer.appendChild(card);
  });
}

// Open modal with details
function openModal(r) {
  document.getElementById("modalTitle").innerText = r.title;
  document.getElementById("modalImage").src = r.image;

  // Ingredients
  const ingredientsList = document.getElementById("modalIngredients");
  ingredientsList.innerHTML = "";
  r.ingredients.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    ingredientsList.appendChild(li);
  });

  // Steps
  const stepsList = document.getElementById("modalSteps");
  stepsList.innerHTML = "";
  r.steps.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    stepsList.appendChild(li);
  });

  // Nutrition table
  const nutritionTable = document.getElementById("modalNutrition");
  nutritionTable.innerHTML = `
    <tr><th>Nutrient</th><th>Value</th></tr>
    ${Object.entries(r.nutrition).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}
  `;

  modal.style.display = "flex";
}

// Close modal
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Search and Filter
function filterRecipes() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = recipes.filter(r =>
    (category === "all" || r.category === category) &&
    r.title.toLowerCase().includes(search)
  );
  displayRecipes(filtered);
}

searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);

// Initial display
displayRecipes(recipes);
document.addEventListener("DOMContentLoaded", () => {
  // Modal references
  const modal = document.getElementById("recipeModal");
  const modalContent = document.querySelector(".modal-content");
  

  // Add this for click/touch outside
  if (modal && modalContent) {
    function closeModalOnOutside(e) {
      if (!modalContent.contains(e.target)) {
        modal.style.display = "none";
      }
    }
    modal.addEventListener("click", closeModalOnOutside);
    modal.addEventListener("touchstart", closeModalOnOutside); // for mobile
  }
});