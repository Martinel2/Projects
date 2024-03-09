document.addEventListener("DOMContentLoaded", function() {
    // Dummy product data
    const products = [
        {
            name: "상품 1",
            price: 1000,
            image: "https://via.placeholder.com/150"
        },
        {
            name: "상품 2",
            price: 1500,
            image: "https://via.placeholder.com/150"
        },
        {
            name: "상품 3",
            price: 2000,
            image: "https://via.placeholder.com/150"
        }
    ];

    const productsSection = document.getElementById("products");
    const userMenu = document.getElementById("user-menu");

    // Dummy user data (Assuming not logged in initially)
    let isLoggedIn = false;

    // Function to update user menu
    function updateUserMenu() {
        userMenu.innerHTML = "";
        if (isLoggedIn) {
            const userIcon = document.createElement("div");
            userIcon.classList.add("user-icon");
            userIcon.textContent = "User";
            userIcon.addEventListener("click", toggleUserOptions);
            userMenu.appendChild(userIcon);
        } else {
            const loginButton = document.createElement("button");
            loginButton.classList.add("login-button");
            loginButton.textContent = "로그인";
            loginButton.addEventListener("click", redirectToLoginPage);
            userMenu.appendChild(loginButton);
        }
    }

    // Function to redirect to login page
    function redirectToLoginPage() {
        window.location.href = "login.html";
    }

    // Function to toggle user options dropdown
    function toggleUserOptions() {
        const userOptions = document.getElementById("user-options");
        userOptions.classList.toggle("show");
    }

    // Render products
    products.forEach((product, index) => {
        const productElement = document.createElement("section");
        productElement.classList.add("product");
        productElement.dataset.index = index;
        productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price}원</p>
      <button class="add-to-cart">장바구니 담기</button>
    `;
        productsSection.appendChild(productElement);
    });

    // Add event listener to document to close user options dropdown when clicked outside
    document.addEventListener("click", function(event) {
        if (!event.target.matches(".user-icon")) {
            const userOptions = document.getElementById("user-options");
            if (userOptions.classList.contains("show")) {
                userOptions.classList.remove("show");
            }
        }
    });

    updateUserMenu();
});
