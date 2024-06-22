import { ref } from "vue";
import { toast } from "vue3-toastify";
const CART_KEY = "cart";
const TOTAL_AVAILABLE_POINTS_KEY = "totalAvailablePoints";
const POINTS_TO_MMK_CONVERSION_RATE = 1;
const POINTS_STORAGE_KEY = "discountPoints";

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const savePointsToLocalStorage = (points) => {
  localStorage.setItem(POINTS_STORAGE_KEY, points);
};

const loadPointsFromLocalStorage = () => {
  const points = localStorage.getItem(POINTS_STORAGE_KEY);
  return points ? parseInt(points, 10) : 0;
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};
const saveTotalAvailablePointsToLocalStorage = (points) => {
  localStorage.setItem(TOTAL_AVAILABLE_POINTS_KEY, points);
};

const loadTotalAvailablePointsFromLocalStorage = () => {
  const points = localStorage.getItem(TOTAL_AVAILABLE_POINTS_KEY);
  return parseInt(points, 10) || 0;
};
const defaultProduct = [
  {
    id: 1,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Grey & Dark Green",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B.jpg"),
    miniImages: [
      { id: "p-1", url: require("@/assets/product/8028/B.jpg") },
      { id: "p-2", url: require("@/assets/product/8028/31.png") },
      { id: "p-3", url: require("@/assets/product/8028/32.png") },
      { id: "p-4", url: require("@/assets/product/8028/37.png") },
      { id: "p-5", url: require("@/assets/product/8028/38.png") },
    ],
  },
  {
    id: 2,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Blue & Black",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B1.jpg"),
  },
  {
    id: 3,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Dark Red & Brown",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B2.jpg"),
  },
  {
    id: 4,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Light Steel Blue & Dark Green",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B4.jpg"),
  },
  {
    id: 5,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Dark Green & Dark Grey",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B3.jpg"),
  },
  {
    id: 6,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Dark Green & Dark Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A4.jpg"),
  },
  {
    id: 7,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Light Steel Blue & Navy",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A3.jpg"),
  },
  {
    id: 8,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Dark Red & Brown",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A2.jpg"),
  },
  {
    id: 9,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Blue & Black",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A1.jpg"),
  },
  {
    id: 10,
    series: "bamboo",
    cat: "boxer",
    code: 8027,
    color: "Dark Green & Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A.jpg"),
  },
  {
    id: 11,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Light Steel Blue & Navy",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/d.jpg"),
  },
  {
    id: 12,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Blue & Light Grey",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/c.jpg"),
  },
  {
    id: 13,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Dark Grey & Black",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/a.jpg"),
  },
  {
    id: 14,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Dark Green & Brown",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/b.jpg"),
  },
  {
    id: 15,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Dark Red & Grey",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/0.jpg"),
  },
  {
    id: 16,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Blue & Light Grey",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/d.jpg"),
  },
  {
    id: 17,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Blue & Light Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/c.jpg"),
  },
  {
    id: 18,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Light Steel Blue & Navy",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/AA.jpg"),
  },
  {
    id: 19,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Dark Grey & Black",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/d.jpg"),
  },
  {
    id: 20,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Dark Green & Brown",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/b.jpg"),
  },
  {
    id: 21,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Dark Red & Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/a.jpg"),
  },
  {
    id: 22,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Dark Red & Grey",
    price: 14800,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/AA.jpg"),
  },
  {
    id: 23,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Black & Dark Grey",
    price: 14800,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/a.jpg"),
  },
  {
    id: 24,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Light Steel Blue & Navy",
    price: 14800,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/b.jpg"),
  },
  {
    id: 25,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Dark Green & Brown",
    price: 14800,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/c.jpg"),
  },
  {
    id: 26,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Blue & Light Grey",
    price: 14800,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/d.jpg"),
  },
  {
    id: 27,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Dark Red & Grey",
    price: 15600,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/d.jpg"),
  },
  {
    id: 28,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Black & Dark Grey",
    price: 15600,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/c.jpg"),
  },
  {
    id: 29,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Light Steel Blue & Navy",
    price: 15600,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/b.jpg"),
  },
  {
    id: 30,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Dark Green & Brown",
    price: 15600,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/0.jpg"),
  },
  {
    id: 31,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Bluen & Light Grey",
    price: 15600,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/a.jpg"),
  },
  {
    id: 32,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Steel Blue & Grey",
    price: 13000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/b.jpg"),
  },
  {
    id: 33,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "White Smoke & Navy",
    price: 13000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/d.jpg"),
  },
  {
    id: 34,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Light Green & Dark Red",
    price: 13000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/c.jpg"),
  },
  {
    id: 35,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Green & Brown",
    price: 13000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/e.jpg"),
  },
  {
    id: 36,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Dim Grey & Black",
    price: 13000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/0.jpg"),
  },
  {
    id: 37,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Royal Blue & Dark Grey",
    price: 13000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/a.jpg"),
  },
  {
    id: 38,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Steel Blue & Grey",
    price: 12200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/1RO.jpg"),
  },
  {
    id: 39,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "White Smoke & Navy",
    price: 12200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/1.jpg"),
  },
  {
    id: 40,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Light Green & Dark Red",
    price: 12200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/2.jpg"),
  },
  {
    id: 41,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Green & Brown",
    price: 12200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/3.jpg"),
  },
  {
    id: 42,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Dim Grey & Black",
    price: 12200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/4.jpg"),
  },
  {
    id: 43,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Royal Blue & Dark Grey",
    price: 12200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/5.jpg"),
  },
  {
    id: 44,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Light Gray & Navy",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/0.jpg"),
  },
  {
    id: 45,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Black & Dark Gray",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/c.jpg"),
  },
  {
    id: 46,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Brown & Dark Green",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/d.jpg"),
  },
  {
    id: 47,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Blue & Light Grey",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/b.jpg"),
  },
  {
    id: 48,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Dark Red & Grey",
    price: 14200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/a.jpg"),
  },
  {
    id: 49,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Light Gray & Navy",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/4.jpg"),
  },
  {
    id: 50,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Black & Dark Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/1.jpg"),
  },
  {
    id: 51,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Brown & Dark Green",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/AA.jpg"),
  },
  {
    id: 52,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Blue & Light Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/2.jpg"),
  },
  {
    id: 53,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Dark Red & Grey",
    price: 13300,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/3.jpg"),
  },
  {
    id: 54,
    series: "bamboo",
    cat: "brief",
    code: 9001,
    color: "-",
    price: 18500,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/9001,9002/9001.jpg"),
  },
  {
    id: 55,
    series: "bamboo",
    cat: "brief",
    code: 9002,
    color: "-",
    price: 19700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/9001,9002/9002.jpg"),
  },
  {
    id: 56,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Very Dark Grey",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/4.jpg"),
  },
  {
    id: 57,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Very Dark Green",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/2.jpg"),
  },
  {
    id: 58,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Light Green",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/6.jpg"),
  },
  {
    id: 59,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Grey",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/3.jpg"),
  },
  {
    id: 60,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Dark Red",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/5.jpg"),
  },
  {
    id: 61,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Dark Green",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/7.jpg"),
  },
  {
    id: 62,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Brown",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/11.jpg"),
  },
  {
    id: 63,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "White Smoke",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/9.jpg"),
  },
  {
    id: 64,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Navy",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/1.jpg"),
  },
  {
    id: 65,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Dark Grey",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/8.jpg"),
  },
  {
    id: 66,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Blue",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/12.jpg"),
  },
  {
    id: 67,
    series: "spandex",
    cat: "boxer",
    code: 5012,
    color: "Black",
    price: 7000,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5012/10.jpg"),
  },
  {
    id: 68,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Very Dark Grey",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/4.jpg"),
  },
  {
    id: 69,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Very Dark Green",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/9.jpg"),
  },
  {
    id: 70,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Light Green",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/3.jpg"),
  },
  {
    id: 71,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Grey",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/11.jpg"),
  },
  {
    id: 72,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Dark Red",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/5.jpg"),
  },
  {
    id: 73,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Dark Green",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/6.jpg"),
  },
  {
    id: 74,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Brown",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/2.jpg"),
  },
  {
    id: 75,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "White Smoke",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/1.jpg"),
  },
  {
    id: 76,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Navy",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/10.jpg"),
  },
  {
    id: 77,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Dark Grey",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/8.jpg"),
  },
  {
    id: 78,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Blue",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/7.jpg"),
  },
  {
    id: 79,
    series: "spandex",
    cat: "brief",
    code: 5013,
    color: "Black",
    price: 6500,
    pics: "1 Box 1 PCS",
    img: require("@/assets/product/5013/12.jpg"),
  },
];

const defaultLocation = [
  {
    id: 1,
    location: "Yangon",
  },
  {
    id: 2,
    location: "Mandalay",
  },
  {
    id: 3,
    location: "Naypyidaw",
  },
  {
    id: 4,
    location: "Chin_State",
  },
  {
    id: 5,
    location: "Bago",
  },
  {
    id: 6,
    location: "Ayeyarwady",
  },
  {
    id: 7,
    location: "Sagaing",
  },
  {
    id: 8,
    location: "Kayin",
  },
  {
    id: 9,
    location: "Magway",
  },
  {
    id: 10,
    location: "Shan",
  },
  {
    id: 11,
    location: "Tanintharyi",
  },
  {
    id: 12,
    location: "Rakhine",
  },
  {
    id: 13,
    location: "Kachin",
  },
  {
    id: 14,
    location: "Gate",
  },
  {
    id: 15,
    location: "Mon",
  },
];

const defaultsubLocation = {
  Yangon: [
    { id: 1, township: "Pazundaung", price: 2500 },
    { id: 2, township: "Pabedan", price: 2500 },
    { id: 3, township: "Kyauktada", price: 2500 },
    { id: 4, township: "Botahtaung", price: 2500 },
    { id: 5, township: "Mingala Taungnyunt", price: 2500 },
    { id: 6, township: "Latha", price: 2500 },
    { id: 31, township: "Lanmadaw Township", price: 2500 },
    { id: 7, township: "Kamayut Township", price: 3000 },
    { id: 8, township: "Kyimyindaing Township", price: 3000 },
    { id: 9, township: "Sanchaung Township", price: 3000 },
    { id: 10, township: "Tamwe Township", price: 3000 },
    { id: 11, township: "South Okkalapa", price: 3000 },
    { id: 12, township: "Dagon", price: 3000 },
    { id: 13, township: "Dawbon Township", price: 3000 },
    { id: 14, township: "Bahan", price: 3000 },
    { id: 15, township: "Mayangon", price: 3000 },
    { id: 16, township: "North Okkalapa", price: 3000 },
    { id: 17, township: "Yankin", price: 3000 },
    { id: 18, township: "Hlaing Township", price: 3000 },
    { id: 19, township: "Thingangyun", price: 3000 },
    { id: 20, township: "Tharkayta", price: 3000 },
    { id: 21, township: "Ahlone Township", price: 3000 },
    { id: 22, township: "Insein Township", price: 3000 },
    { id: 23, township: "Dagon Seikkan Township", price: 3000 },
    { id: 24, township: "East Dagon Township", price: 3000 },
    { id: 25, township: "North Dagon Township", price: 3000 },
    { id: 26, township: "South Dagon Township", price: 3000 },
    { id: 27, township: "Mingaladon Township", price: 3000 },
    { id: 28, township: "Shwepyitha Township", price: 3000 },
    { id: 29, township: "Hlaingthaya Township", price: 3000 },
    { id: 30, township: "Thanlyin", price: 3000 },
    { id: 32, township: "Kawhmu", price: 4000 },
    { id: 33, township: "Kungyangon", price: 4000 },
    { id: 34, township: "Kyauktan", price: 4000 },
    { id: 35, township: "Khayan", price: 4000 },
    { id: 36, township: "Oak Kan", price: 4000 },
    { id: 37, township: "Taik Kyi", price: 4000 },
    { id: 38, township: "Twantay", price: 4000 },
    { id: 39, township: "Htauk Kyant", price: 4000 },
    { id: 40, township: "Dala Township", price: 4000 },
    { id: 41, township: "Hmawbi", price: 4000 },
    { id: 42, township: "Hlegu", price: 4000 },
    { id: 43, township: "Thongwa", price: 4000 },
  ],
  Mandalay: [
    { id: 1, township: "Mandalay", price: 4000 },
    { id: 2, township: "Chanayethazan", price: 4000 },
    { id: 3, township: "Chanmyathazi", price: 4000 },
    { id: 4, township: "Pyigyitagon", price: 4000 },
    { id: 5, township: "Mahaaungmyay", price: 4000 },
    { id: 6, township: "Aungmyaythazan", price: 4000 },
    { id: 7, township: "Amarapura", price: 4000 },
    { id: 8, township: "Kyaukpadaung", price: 4000 },
    { id: 9, township: "Kyaukse", price: 4000 },
    { id: 10, township: "Kume", price: 4000 },
    { id: 11, township: "Sintgaing", price: 4000 },
    { id: 12, township: "Singu", price: 4000 },
    { id: 13, township: "Za Yet Kwin", price: 4000 },
    { id: 14, township: "Nyaung-U", price: 4000 },
    { id: 15, township: "Tada-U", price: 4000 },
    { id: 16, township: "Taungtha", price: 4000 },
    { id: 17, township: "Natogyi", price: 4000 },
    { id: 18, township: "Pyin Oo Lwin", price: 4000 },
    { id: 19, township: "Pa Leik", price: 4000 },
    { id: 20, township: "Pyawbwe", price: 4000 },
    { id: 21, township: "Bagan", price: 4000 },
    { id: 22, township: "Patheingyi", price: 4000 },
    { id: 23, township: "Meiktila", price: 4000 },
    { id: 24, township: "Mogok", price: 4000 },
    { id: 25, township: "Myingyan", price: 4000 },
    { id: 26, township: "Myitnge", price: 4000 },
    { id: 27, township: "Mahlaing", price: 4000 },
    { id: 28, township: "Myittha", price: 4000 },
    { id: 29, township: "Madaya", price: 4000 },
    { id: 30, township: "Yamethin", price: 4000 },
    { id: 31, township: "Letpanhla", price: 4000 },
    { id: 32, township: "Wundwin", price: 4000 },
    { id: 33, township: "Thazi", price: 4000 },
    { id: 34, township: "Thea Daw", price: 4000 },
    { id: 35, township: "Han Myint Mo lann Kware", price: 4000 },
    { id: 36, township: "Ohn Chaw", price: 4000 },
  ],
  Chin_State: [{ id: 1, township: "Hakha", price: 8000 }],
  Naypyidaw: [
    { id: 1, township: "Nyaung Lunt", price: 4000 },
    { id: 2, township: "Tatkon", price: 4000 },
    { id: 3, township: "Naypyidaw", price: 4000 },
    { id: 4, township: "Pyinmana", price: 4000 },
    { id: 5, township: "Pyan Ka Paya", price: 4000 },
    { id: 6, township: "Lewe", price: 4000 },
  ],
  Bago: [
    { id: 1, township: "Gyobingauk", price: 4000 },
    { id: 2, township: "Kaytumathi myo thit", price: 4000 },
    { id: 3, township: "Kyauktaga", price: 4000 },
    { id: 4, township: "Swar", price: 4000 },
    { id: 5, township: "Zigon", price: 4000 },
    { id: 6, township: "Zeyawaddy", price: 4000 },
    { id: 7, township: "Nyaunglebin", price: 4000 },
    { id: 8, township: "Nyaung Chay Htauk", price: 4000 },
    { id: 9, township: "Oke Shit Pin", price: 4000 },
    { id: 10, township: "Taungoo", price: 4000 },
    { id: 11, township: "Taw Kywe Inn", price: 4000 },
    { id: 12, township: "Daik-U", price: 4000 },
    { id: 13, township: "Nattalin", price: 4000 },
    { id: 14, township: "Bago", price: 4000 },
    { id: 15, township: "Pyay", price: 4000 },
    { id: 16, township: "Paungde", price: 4000 },
    { id: 17, township: "Padigon", price: 4000 },
    { id: 18, township: "Penwegon", price: 4000 },
    { id: 19, township: "Pyuntasa", price: 4000 },
    { id: 20, township: "Paukkhaung", price: 4000 },
    { id: 21, township: "Phyu", price: 4000 },
    { id: 22, township: "Shwedaung", price: 4000 },
    { id: 23, township: "Yedashe", price: 4000 },
    { id: 24, township: "Shwegyin", price: 4000 },
    { id: 25, township: "Letpadan", price: 4000 },
    { id: 26, township: "Waw", price: 4000 },
    { id: 27, township: "Thegon", price: 4000 },
    { id: 28, township: "Thanatpin", price: 4000 },
    { id: 29, township: "Thar Ga Ya", price: 4000 },
    { id: 30, township: "Thonse", price: 4000 },
    { id: 31, township: "Thayarwaddy", price: 4000 },
    { id: 32, township: "Inma", price: 4000 },
    { id: 33, township: "Inn Ta Kaw", price: 4000 },
    { id: 34, township: "Okpho", price: 4000 },
    { id: 35, township: "Oktwin", price: 4000 },
    { id: 35, township: "OutMinHla", price: 4000 },
  ],
  Mon: [
    { id: 1, township: "Kyaikto", price: 4000 },
    { id: 2, township: "Kyaikkhami", price: 4000 },
    { id: 3, township: "Chaungzon", price: 4000 },
    { id: 4, township: "Zin Kyaik", price: 4000 },
    { id: 5, township: "Paung", price: 4000 },
    { id: 6, township: "Bilin", price: 4000 },
    { id: 7, township: "Mawlamyine", price: 4000 },
    { id: 8, township: "Moke Ta Ma", price: 4000 },
    { id: 9, township: "Mudon", price: 4000 },
    { id: 10, township: "Ye", price: 4000 },
    { id: 11, township: "Lamaing", price: 4000 },
    { id: 12, township: "Thanbyuzayat", price: 4000 },
    { id: 13, township: "Thaton", price: 4000 },
    { id: 14, township: "Thuwanawati", price: 4000 },
  ],
  Ayeyarwady: [
    { id: 1, township: "Kyonpyaw", price: 4000 },
    { id: 2, township: "Kyaiklat", price: 4000 },
    { id: 3, township: "Kyaunggon", price: 4000 },
    { id: 4, township: "Kyangin", price: 4000 },
    { id: 5, township: "Chaung Thar", price: 4000 },
    { id: 6, township: "Ngarthine Chaung", price: 4000 },
    { id: 7, township: "Dedaye", price: 4000 },
    { id: 8, township: "Zalun", price: 4000 },
    { id: 9, township: "Nyaungdon", price: 4000 },
    { id: 10, township: "Danubyu", price: 4000 },
    { id: 11, township: "Pathein", price: 4000 },
    { id: 12, township: "Pantanaw", price: 4000 },
    { id: 13, township: "Pyapon", price: 4000 },
    { id: 14, township: "Bogale", price: 4000 },
    { id: 15, township: "Maubin", price: 4000 },
    { id: 16, township: "Myaungmya", price: 4000 },
    { id: 17, township: "Myanaung", price: 4000 },
    { id: 18, township: "Mawgyun", price: 4000 },
    { id: 19, township: "Yegyi", price: 4000 },
    { id: 20, township: "Labutta", price: 4000 },
    { id: 21, township: "Wakema", price: 4000 },
    { id: 21, township: "Hinthada", price: 4000 },
    { id: 21, township: "Einme", price: 4000 },
  ],
  Sagaing: [
    { id: 1, township: "Kanbalu", price: 4000 },
    { id: 2, township: "Kyun Hla", price: 4000 },
    { id: 3, township: "Sagaing", price: 4000 },
    { id: 4, township: "Monywa", price: 4000 },
    { id: 5, township: "Shwebo", price: 4000 },
    { id: 6, township: "Indaw", price: 4000 },
    { id: 7, township: "Katha", price: 5500 },
    { id: 8, township: "Kawlin", price: 5500 },
    { id: 9, township: "Tamu", price: 5500 },
    { id: 10, township: "Tigyaing", price: 5500 },
  ],
  Kayin: [
    { id: 1, township: "Hpa-An", price: 4000 },
    { id: 2, township: "Myaing Ka Lay", price: 4000 },
    { id: 3, township: "Myawaddy", price: 4000 },
  ],
  Magway: [
    { id: 1, township: "Chauk", price: 4000 },
    { id: 2, township: "Saku", price: 4000 },
    { id: 3, township: "Salin", price: 4000 },
    { id: 4, township: "Seikphyu", price: 4000 },
    { id: 5, township: "Sin Hpyu", price: 4000 },
    { id: 6, township: "Sin Hpyu Kyun", price: 4000 },
    { id: 7, township: "Sat Thwar", price: 4000 },
    { id: 8, township: "Taungdwingyi", price: 4000 },
    { id: 9, township: "Natmauk", price: 4000 },
    { id: 10, township: "Pakokku", price: 4000 },
    { id: 11, township: "Pwintbyu", price: 4000 },
    { id: 12, township: "Magway", price: 4000 },
    { id: 13, township: "Minbu", price: 4000 },
    { id: 14, township: "Yenangyaung", price: 4000 },
    { id: 15, township: "Yesagyo", price: 4000 },
    { id: 16, township: "Lelkaing", price: 4000 },
    { id: 17, township: "Thayet", price: 4000 },
    { id: 18, township: "Minhla", price: 4000 },
    { id: 18, township: "Aunglan", price: 4000 },
  ],
  Shan: [
    { id: 1, township: "Kalaw", price: 4000 },
    { id: 2, township: "Kyaukme", price: 4000 },
    { id: 3, township: "Hsihseng", price: 4000 },
    { id: 4, township: "Nyaungshwe", price: 4000 },
    { id: 5, township: "Taunggyi", price: 4000 },
    { id: 6, township: "Nawnghkio", price: 4000 },
    { id: 7, township: "Pindaya", price: 4000 },
    { id: 8, township: "Bahtoo", price: 4000 },
    { id: 9, township: "Shwenyaung", price: 4000 },
    { id: 10, township: "Lawksawk", price: 4000 },
    { id: 11, township: "Lashio", price: 4000 },
    { id: 12, township: "Hsipaw", price: 4000 },
    { id: 13, township: "He Hoe", price: 4000 },
    { id: 14, township: "Ayetharyar", price: 4000 },
    { id: 15, township: "Aungpan", price: 4000 },
    { id: 16, township: "Namsang", price: 5500 },
    { id: 17, township: "Pinlon", price: 5500 },
    { id: 18, township: "Mongmit", price: 5500 },
    { id: 19, township: "Mongnai", price: 5500 },
    { id: 20, township: "Muse", price: 5500 },
    { id: 21, township: "Loilem", price: 5500 },
    { id: 22, township: "Langkho", price: 5500 },
    { id: 23, township: "Tachileik", price: 8000 },
    { id: 24, township: "Mong Hsat", price: 8000 },
  ],
  Tanintharyi: [
    { id: 1, township: "Kawthoung", price: 5500 },
    { id: 2, township: "Dawei", price: 5500 },
    { id: 3, township: "Myeik", price: 5500 },
    { id: 4, township: "Maungmagan", price: 5500 },
    { id: 5, township: "Yebyu", price: 5500 },
  ],
  Rakhine: [
    { id: 1, township: "Kyaukpyu", price: 5500 },
    { id: 2, township: "Kyauktaw", price: 5500 },
    { id: 3, township: "Gwa", price: 5500 },
    { id: 4, township: "Ngapali", price: 5500 },
    { id: 5, township: "Sittwe", price: 5500 },
    { id: 6, township: "Toungup", price: 5500 },
    { id: 7, township: "Ponnagyun", price: 5500 },
    { id: 8, township: "Pauktaw", price: 5500 },
    { id: 9, township: "Buthidaung", price: 5500 },
    { id: 10, township: "Minbya", price: 5500 },
    { id: 11, township: "Mrauk-U", price: 5500 },
    { id: 12, township: "Maungdaw", price: 5500 },
    { id: 13, township: "Ramree", price: 5500 },
    { id: 14, township: "Thandwe", price: 5500 },
  ],
  Kachin: [
    { id: 1, township: "Sinkhan", price: 5500 },
    { id: 2, township: "Nanmati", price: 5500 },
    { id: 3, township: "Bhamo", price: 5500 },
    { id: 4, township: "Myitkyina", price: 5500 },
    { id: 5, township: "Mongkawng", price: 5500 },
    { id: 6, township: "Monghnyin", price: 5500 },
    { id: 7, township: "Shwegu", price: 5500 },
    { id: 8, township: "Lwegel", price: 5500 },
    { id: 9, township: "Waimaw", price: 5500 },
    { id: 10, township: "Hopin", price: 5500 },
    { id: 11, township: "Indawgyi", price: 5500 },
    { id: 12, township: "Danai", price: 8000 },
    { id: 13, township: "Hpakan", price: 8000 },
    { id: 14, township: "Mansi", price: 8000 },
    { id: 15, township: "Lawng Hkang", price: 8000 },
  ],
  Gate: [
    { id: 1, township: "Dagon Ayeyar", price: 1000 },
    { id: 2, township: "Aung Mingalar", price: 1000 },
    { id: 3, township: "Aung San ", price: 1000 },
  ],
};

export default {
  state: {
    products: defaultProduct,
    cart: loadCartFromLocalStorage(),
    selectedCat: [],
    selectedSeries: [],
    locations: defaultLocation,
    subLocations: defaultsubLocation,
    selectedLocation: null,
    selectedSubLocation: null,
    deliveryPrice: 0,
    discountPoints: loadPointsFromLocalStorage(),
    totalAvailablePoints: loadTotalAvailablePointsFromLocalStorage(),
    isLogin: ref(),
  },
  getters: {
    products: (state) => {
      return state.products;
    },
    isLogin: (state) => {
      return state.isLogin;
    },
    discountPoints: (state) => {
      return state.discountPoints;
    },

    cartItems: (state) => {
      return state.cart;
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    totalPrice: (state) => {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    getMiniImagesByProductId: (state) => (id) => {
      const product = state.products.find((product) => product.id === id);
      return product ? product.miniImages : [];
    },
    getImageUrlByTab: (state) => (id, tab) => {
      const product = state.products.find((product) => product.id === id);
      const miniImage = product?.miniImages.find((image) => image.id === tab);
      return miniImage ? miniImage.url : product?.mainImage;
    },
    filteredProducts: (state) => {
      let filtered = state.products;

      if (state.selectedSeries.length > 0) {
        filtered = filtered.filter((product) =>
          state.selectedSeries.includes(product.series)
        );
      }

      return filtered;
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === parseInt(id));
    },
    randomProducts: (state) => (count) => {
      let sliceProduct = state.products;
      sliceProduct = sliceProduct.sort(() => 0.5 - Math.random());
      return sliceProduct.slice(0, count);
    },
    getSubLocations: (state) => {
      if (!state.selectedLocation) return [];
      return state.subLocations[state.selectedLocation.location] || [];
    },

    locations: (state) => {
      return state.locations;
    },
    deliveryPrice: (state) => state.deliveryPrice,

    grandTotal: (state) => {
      const total = state.cart.reduce(
        (total, item) =>
          total + item.price * item.quantity + state.deliveryPrice,
        0
      );
      if (state.discountPoints) {
        const discount = state.discountPoints * POINTS_TO_MMK_CONVERSION_RATE;
        return Math.max(0, total - discount);
      }
      return total;
    },
    totalAvailablePoints: (state) => {
      return state.totalAvailablePoints;
    },
    discountPrice: (state) => {
      return state.discountPoints * POINTS_TO_MMK_CONVERSION_RATE || 0;
    },
  },
  mutations: {
    addToCart(state, product) {
      const itemInCart = state.cart.find(
        (item) => item.id == product.id && item.size == product.size
      );
      if (itemInCart) {
        itemInCart.quantity += product.quantity;
      } else {
        state.cart.push(product);
      }
      saveCartToLocalStorage(state.cart);
    },
    increaseQuantity(state, { id, size }) {
      const itemInCart = state.cart.find(
        (item) => item.id === id && item.size === size
      );
      if (itemInCart) {
        itemInCart.quantity++;
      }
      saveCartToLocalStorage(state.cart);
    },
    decreaseQuantity(state, { id, size }) {
      const itemInCart = state.cart.find(
        (item) => item.id === id && item.size === size
      );
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      } else {
        state.cart = state.cart.filter(
          (item) => !(item.id === id && item.size === size)
        );
      }
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart(state, { id, size }) {
      state.cart = state.cart.filter(
        (item) => !(item.id === id && item.size === size)
      );
      saveCartToLocalStorage(state.cart);
    },
    setSelectedSeries(state, series) {
      state.selectedSeries = series;
    },
    // setSelectedCode(state, code) {
    //   state.selectedCode = code;
    // },
    SET_LOCATION(state, location) {
      state.selectedLocation = location;
      state.selectedSubLocation = null; // Reset sub-location when location changes
    },
    SET_SUB_LOCATION(state, subLocation) {
      state.selectedSubLocation = subLocation;
    },
    SET_DELIVERY_PRICE(state, price) {
      // Mutation to set delivery price
      state.deliveryPrice = price;
    },

    APPLY_DISCOUNT_POINTS(state, points) {
      state.discountPoints = points;

      savePointsToLocalStorage(points);
    },
    returnPoint(state, points) {
      state.discountPoints = points;

      savePointsToLocalStorage(points);
    },
    changeisLogin(state, value) {
      state.isLogin = value;
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearDiscountPoints(state) {
      state.discountPoints = 0;
      localStorage.setItem(
        "discountPoints",
        JSON.stringify(state.discountPoints)
      );
    },
    saveAvaliablePoints(state, points) {
      state.totalAvailablePoints = points;
      saveTotalAvailablePointsToLocalStorage(points);
    },
    usePoints(state, points) {
      let avaliablePoints = state.totalAvailablePoints;
      state.totalAvailablePoints = avaliablePoints - points;
      let usePoint = avaliablePoints - points;
      saveTotalAvailablePointsToLocalStorage(usePoint);
    },
  },
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product);
      toast.success(
        `Product Code:${product.code} of Size:${product.size} is added to Bag`
      );
    },
    increaseQuantity(context, payload) {
      context.commit("increaseQuantity", payload);
    },
    decreaseQuantity(context, payload) {
      context.commit("decreaseQuantity", payload);
    },
    removeFromCart(context, payload) {
      context.commit("removeFromCart", payload);
      toast.error(
        `Product Code:${payload.code} of Size:${payload.size} is remove from Bag`
      );
    },
    setSelectedSeries(context, series) {
      context.commit("setSelectedSeries", series);
    },
    // setSelectedCat(context, code) {
    //   context.commit("setSelectedCode", code);
    // },
    chooseLocation({ commit }, location) {
      commit("SET_LOCATION", location);
    },
    chooseSubLocation({ commit }, subLocation) {
      commit("SET_SUB_LOCATION", subLocation);
    },
    calculateDeliveryPrice({ commit, state }) {
      const location = state.selectedLocation?.location;
      const subLocation = state.selectedSubLocation;
      if (!location || !subLocation) {
        commit("SET_DELIVERY_PRICE", 0);
        return;
      }

      const locationSubLocations = state.subLocations[location];
      if (!locationSubLocations) {
        commit("SET_DELIVERY_PRICE", 0);
        return;
      }

      const subLocationObj = locationSubLocations.find(
        (subLoc) => subLoc.township === subLocation
      );

      const deliveryPrice = subLocationObj ? subLocationObj.price : 0;

      commit("SET_DELIVERY_PRICE", deliveryPrice);
    },
    applyDiscountPoints({ commit, state }, points) {
      if (points > state.totalAvailablePoints) {
        toast.error(`You don't have enough discount points.`);
      } else {
        commit("APPLY_DISCOUNT_POINTS", points);
        toast.info(`Applied ${points} discount points`);
      }
    },
    changeisLogin({ commit }, value) {
      commit("changeisLogin", value);
    },
    returnPoint({ commit }, points) {
      commit("returnPoint", points);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    clearDiscount({ commit }) {
      commit("clearDiscountPoints");
    },
    saveAvaliabePoints({ commit }, points) {
      commit("saveAvaliablePoints", points);
    },
    usePoints({ commit }, points) {
      commit("usePoints", points);
      console.log(points);
    },
  },
  modules: {},
};
