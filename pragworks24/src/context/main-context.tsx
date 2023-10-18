// Redux Imports
import { createSlice, createReducer } from "@reduxjs/toolkit";

// Data Imports
import ProductType from "../types/00_Produto"; // import the product interface
import TodosOsProdutos from "../data/00_TodosOsProdutos"; // import the product data

import SolutionType from "../types/01A_Solucao"; // import the solution interface
import TodasAsSolucoes from "../data/01_TodasAsSolucoes"; // import the solution data

const initialState = {
    token: null,
    mode: "light",
    username: "Guest User",
    currencyType: "BRL",
    language: "pt-br",

    isLoading: true,
    lgpdConsent: false,
    menuIsOpen: false,
    searchIsOpen: false,
    cartIsOpen: false,
    checkoutHelpIsOpen: false,
    privacyPolicyIsOpen: false,
    termsIsOpen: false,
    siteMapIsOpen: false,
    productDetailsIsOpen: false,
    solutionDetailsIsOpen: false,
    activeSection: 1,

    availableProducts: TodosOsProdutos,
    activeProduct: null as ProductType | null,
    productClasses: ["robos", "sofwares", "servicos", "experiencias"],
    activeProductClass: "robos",

    availableSolutions: TodasAsSolucoes,
    activeSolution: null as SolutionType | null,
    solutionClasses: ["atendimento", "publicidade", "inspecao", "transporte"],
    activeSolutionClass: "atendimento",

    cartItems: [] as ProductType[],
    cartTotal: 0,
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            console.log("Mode: " + state.mode);
        },
        setLogin: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.username = "Guest User";
            state.token = null;
        },
        toggleCurrency: (state) => {
            state.currencyType = state.currencyType === "BRL" ? "USD" : "BRL";
            console.log("Currency: " + state.currencyType);
        },
        toggleLanguage: (state) => {
            state.language = state.language === "pt-br" ? "en" : "pt-br";
            console.log("Language: " + state.language);
        },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
            console.log("Loading is toggled: " + (state.isLoading ? "on" : "off"));
        },
        setLgpdConsent: (state) => {
            state.lgpdConsent = !state.lgpdConsent;
            console.log("LGPD Consent: " + state.lgpdConsent);
        },
        toggleMenu: (state) => {
            state.menuIsOpen = !state.menuIsOpen;
            console.log("Menu is toggled: " + (state.menuIsOpen ? "open" : "closed"));
        },
        toggleSearch: (state) => {
            state.searchIsOpen = !state.searchIsOpen;
            console.log("Search is toggled :" + (state.searchIsOpen ? "open" : "closed"));
        },
        toggleCart: (state) => {
            state.cartIsOpen = !state.cartIsOpen;
            console.log("Cart is toggled: " + (state.cartIsOpen ? "open" : "closed"));
        },
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.availableProducts.find((item) => item.id === id);
            if (item && id !== undefined) {
                const inCartIndex = state.cartItems.findIndex((item) => item.id === id);

                if (inCartIndex !== -1) {
                    state.cartItems[inCartIndex].cartQuantity += quantity;
                } else {
                    state.cartItems.push({ ...item, cartQuantity: quantity, id });
                }
            }
        },
        decrementCartItem: (state, action) => {
            const { id } = action.payload;
            const item = state.cartItems.find((item) => item.id === id);

            if (item && item.cartQuantity > 1) {
                item.cartQuantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            console.log("Removing from cart");
            const { id } = action.payload;
            console.log("ID: " + id);
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);

            if (itemIndex !== -1) {
                state.cartItems.splice(itemIndex, 1);
            }
        },
        getCartTotal: (state) => {
            state.cartTotal = state.cartItems.reduce((acc, item) => {
                return acc + item.buyPrice * item.cartQuantity;
            }, 0);
        },
        toggleCheckoutHelp: (state) => {
            state.checkoutHelpIsOpen = !state.checkoutHelpIsOpen;
            console.log("Checkout Help is toggled: " + (state.checkoutHelpIsOpen ? "open" : "closed"));
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload.activeSection;
            console.log("Active Section: " + state.activeSection);
        },
        toggleProductDetails: (state) => {
            state.productDetailsIsOpen = !state.productDetailsIsOpen;
        },
        setActiveProduct: (state, action) => {
            const { id } = action.payload;
            const item = state.availableProducts.find((item) => item.id === id);
            if (item && id !== undefined) {
                state.activeProduct = item;
            }
            console.log("Active Product: " + state.activeProduct?.name);
        },
        setActiveProductClass: (state, action) => {
            state.activeProductClass = action.payload;
            console.log("Active Product: " + state.activeProductClass);
        },
        setActiveSolution: (state, action) => {
            const { id } = action.payload;
            const item = state.availableSolutions.find((item) => item.id === id);
            if (item && id !== undefined) {
                state.activeSolution = item;
            }
            console.log("Active Solution: " + state.activeSolution?.name);
        },
        setActiveSolutionClass: (state, action) => {
            state.activeSolutionClass = action.payload;
            console.log("Active Solution Class: " + state.activeSolutionClass);
        },
        toggleSolutionDetails: (state) => {
            state.solutionDetailsIsOpen = !state.solutionDetailsIsOpen;
            console.log("Solution Detail is toggled: " + (state.solutionDetailsIsOpen ? "open" : "closed"));
        },
        togglePrivacyPolicy: (state) => {
            state.privacyPolicyIsOpen = !state.privacyPolicyIsOpen;
            console.log("Privacy Policy is toggled: " + (state.privacyPolicyIsOpen ? "open" : "closed"));
        },
        toggleTerms: (state) => {
            state.termsIsOpen = !state.termsIsOpen;
            console.log("Terms is toggled: " + (state.termsIsOpen ? "open" : "closed"));
        },
        toggleSiteMap: (state) => {
            state.siteMapIsOpen = !state.siteMapIsOpen;
            console.log("Site Map is toggled: " + (state.siteMapIsOpen ? "open" : "closed"));
        },
    },
});

export const {
    toggleMenu,
    toggleCart,
    toggleCheckoutHelp,
    toggleSearch,
    setMode,
    setLogin,
    setLogout,
    setLgpdConsent,
    setActiveSection,
    toggleLoading,
    addToCart,
    decrementCartItem,
    removeFromCart,
    getCartTotal,
    toggleSolutionDetails,
    toggleProductDetails,
    setActiveProduct,
    setActiveProductClass,
    setActiveSolution,
    setActiveSolutionClass,
    togglePrivacyPolicy,
    toggleTerms,
    toggleSiteMap,
    toggleCurrency,
    toggleLanguage,
} = mainSlice.actions;
export default mainSlice.reducer;
