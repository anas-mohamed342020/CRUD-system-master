
var productsContainer = [];
if (localStorage.getItem("ourProducts") != null) {

    productsContainer = JSON.parse(localStorage.getItem("ourProducts"));
    dispalyProducts();
}
else {
    productsContainer = [];
}

var productNameinput = document.getElementById("productName");
var productPriceinput = document.getElementById("productPrice");
var productCaregoryinput = document.getElementById("productCategory");
var productDescinput = document.getElementById("productDesc");


function addProduct() {
    var product = {
        name: productNameinput.value,
        price: productPriceinput.value,
        category: productCaregoryinput.value,
        desc: productDescinput.value,
    }
    productsContainer.push(product);
    clearForm();
    localStorage.setItem("ourProducts", JSON.stringify(productsContainer));
    document.getElementById("mainBtn").innerHTML = "Add prouduct";
    dispalyProducts();
}

function clearForm() {
    productNameinput.value = "";
    productPriceinput.value = "";
    productCaregoryinput.value = "";
    productDescinput.value = "";
}

function dispalyProducts() {
    var cartoon = ``;
    if(productsContainer.length==0)
    {
        document.getElementById('table').classList.add('d-none')
    }
    else{
        document.getElementById('table').classList.remove('d-none')
    }
    for (var i = 0; i < productsContainer.length; i++) {
        cartoon += `<tr>
        <td> ${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-primary">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoon;
}

function deleteProduct(index) {
    productsContainer.splice(index, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productsContainer));
    dispalyProducts();
}


function searchproducts(term) {
    var cartoon = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            cartoon += `<tr>
            <td> ${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-primary">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`

        }
    }
    document.getElementById('tableBody').innerHTML = cartoon;
}

function updateProduct(index){
    productNameinput.value = productsContainer[index].name;
    productPriceinput.value = productsContainer[index].price;
    productCaregoryinput.value = productsContainer[index].category;
    productDescinput.value = productsContainer[index].desc;
    document.getElementById("mainBtn").innerHTML = "Update";
    deleteProduct(index);
}
